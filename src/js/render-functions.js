const list = document.querySelector('.todo-list');
export default function createMarkup(images){
  const markup = images
    .map(
        ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) => {
            return  `<li class="photo-main-list">
            <a class="galery-link"  href="${largeImageURL}">
            <img class="photo" width="360" height="200" src="${webformatURL}" alt="${tags}" />
            </a>
              <ul class='list-menu'>
                <li class='description'>
                  <h3 class='title'>Likes</h3>
                  <p class='datas'>${likes}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Views</h3>
                  <p class='datas'>${views}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Comments</h3>
                  <p class='datas'>${comments}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Downloads</h3>
                  <p class='datas'>${downloads}</p>
                </li>
              </ul>
            </li>`;
        }
    )
    .join('');
    list.insertAdjacentHTML('beforeend', markup)
}

