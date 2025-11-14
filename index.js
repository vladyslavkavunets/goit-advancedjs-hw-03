import{S as m,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(s){const r="https://pixabay.com/api/",o="53252771-146265e1bedbafdc9d92a47ef",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:f})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${r}" alt="${i}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> ${e}
            </p>
            <p class="info-item">
              <b>Views</b> ${t}
            </p>
            <p class="info-item">
              <b>Comments</b> ${n}
            </p>
            <p class="info-item">
              <b>Downloads</b> ${f}
            </p>
          </div>
        </li>
      `).join("")}const c=document.getElementById("search-form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(){u.classList.remove("is-hidden")}function y(){u.classList.add("is-hidden")}c.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements.searchQuery.value.trim();if(r===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}l.innerHTML="",g(),d(r).then(o=>{if(o.hits.length===0){a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=p(o.hits);l.innerHTML=i,h.refresh()}).catch(o=>{console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{y(),c.reset()})});
//# sourceMappingURL=index.js.map
