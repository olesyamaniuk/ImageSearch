import{a as E,S as w,i as y}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const L=document.querySelector(".todo-list");function h(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:l,comments:b,downloads:$})=>`<li class="photo-main-list">
            <a class="galery-link"  href="${o}">
            <img class="photo" width="360" height="200" src="${s}" alt="${e}" />
            </a>
              <ul class='list-menu'>
                <li class='description'>
                  <h3 class='title'>Likes</h3>
                  <p class='datas'>${t}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Views</h3>
                  <p class='datas'>${l}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Comments</h3>
                  <p class='datas'>${b}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Downloads</h3>
                  <p class='datas'>${$}</p>
                </li>
              </ul>
            </li>`).join("");L.insertAdjacentHTML("beforeend",r)}const S="42676723-0286cb816b5743467714b50d3",q="https://pixabay.com/api/",v="photo",A="horizontal",I="true";async function f(a,r,s){const o=a.trim(),e=`${q}?key=${S}&q=${o}&image_type=${v}&orientation=${A}&safesearch=${I}&per_page=${r}&page=${s}`;try{const t=await E.get(e);if(t.status!==200)throw new Error(t.status);return t.data}catch(t){throw new Error(`Error fetching images: ${t.message}`)}}const d=document.querySelector(".todo-list"),p=document.querySelector(".input-text"),O=document.querySelector(".main-form"),i=document.querySelector(".loader"),n=document.querySelector('[data-action="load-more"]');let u=1,m;i.style.display="none";const g=new w(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500});O.addEventListener("submit",async function(r){r.preventDefault();const s=p.value;d.innerHTML="",p.value="",n.style.display="none";try{const o=await f(s,15,1);if(o.hits.length===0)return d.innerHTML="",i.style.display="none",n.classList.add("is-hidden"),y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});h(o.hits),g.refresh(),m=s,u=1,i.style.display="none",o.hits.length<15?c():n.style.display="block"}catch(o){console.error(o)}});n.addEventListener("click",async function(r){r.preventDefault(),d.insertAdjacentElement("afterend",i),i.style.display="inline-block",u++;try{const s=await f(m,15,u);if(s.hits.length===0)return n.style.display="none",c();{h(s.hits),g.refresh();const o=d;i.style.display="none";const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),s.hits.length<15?(n.style.display="none",c()):n.style.display="block"}}catch(s){console.error(s),c()}});function c(){y.error({message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}),n.style.display="none",i.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
