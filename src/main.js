import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import createMarkup from './js/render-functions';
import getImages from "./js/pixabay-api";

const list = document.querySelector('.todo-list');
const input = document.querySelector('.input-text');
const form = document.querySelector('.main-form');
const load = document.querySelector('.loader');

const loadMoreBtn = document.querySelector('[data-action="load-more"]');

const perPage = 40;
let currentPage = 1;
let currentQuery;

load.style.display = 'none';

const lightbox = new SimpleLightbox('.todo-list a.galery-link', {
    captionsData: 'alt',
    // captionDelay: 500,
    // download : true,
});

form.addEventListener('submit', async function handler(event) {
    event.preventDefault();
    const query = input.value;
    list.innerHTML = '';
    input.value = '';
    loadMoreBtn.style.display = 'none';
    load.style.display = 'inline-block';
    try {
        const data = await getImages(query, perPage, 1);
        if (data.hits.length === 0) {
            list.innerHTML = '';
            load.style.display = 'none';
            loadMoreBtn.classList.add('is-hidden');
            return iziToast.error({
                message: `Sorry, there are no images matching your search query. Please try again!`,
                position: 'topCenter',
            });
        } else {
            createMarkup(data.hits);
            lightbox.refresh();
            currentQuery = query;
            currentPage = 1;
            load.style.display = 'none';
            if (data.hits.length < perPage) {
                handlerErrorResult();
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    } catch (error) {
        console.error(error);
        load.style.display = 'none';
    }
});
loadMoreBtn.addEventListener('click', async function loadImages(event) {
  event.preventDefault();
  list.insertAdjacentElement('afterend', load);
  load.style.display = 'inline-block';
  currentPage++;
  try {
      const data = await getImages(currentQuery, perPage, currentPage);
      if (data.hits.length === 0) {
          loadMoreBtn.style.display = 'none';
          return handlerErrorResult();
      } else {
          createMarkup(data.hits);
          lightbox.refresh();
          const boxFotos = list;
          load.style.display = 'none';

          const rect = boxFotos.getBoundingClientRect().height;
          window.scrollBy({
              top: 600,
              behavior: "smooth",
          });
          if (data.hits.length < perPage) {
              loadMoreBtn.style.display = 'none';
              handlerErrorResult();
          } else {
              loadMoreBtn.style.display = 'block';
          }
      }
  } catch (error) {
      console.error(error);
      handlerErrorResult();
  }
});
function handlerErrorResult() {
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topCenter',
    });
    loadMoreBtn.style.display = 'none';
    load.style.display = 'none';
  }