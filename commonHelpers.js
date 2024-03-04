import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="42676528-15736482ad411b0a23089de5b",p="https://pixabay.com/api/";function d(o){const r={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},t=new URLSearchParams(r),n=`${p}?${t}`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Search failed");return e.json()}).then(e=>(e.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e.hits),e.hits)).catch(e=>{console.log(`${e}`)})}function m(o){return o.map(t=>`
            <li class="images-list-item">
                <a class="item-link" href="${t.largeImageURL}">
                    <img 
                        class="item-image" 
                        src="${t.webformatURL}" 
                        alt="${t.tags}" 
                        />
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${t.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${t.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${t.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${t.downloads}</span></p>
                    </div>
                </a>
            </li>`).join("")}const i=document.querySelector(".images-list"),h=document.querySelector(".search-button"),c=document.querySelector(".search-settings"),g=new u("images-list a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150});h.addEventListener("click",y);function y(o){o.preventDefault();const r=c.value.trim();d(r).then(t=>{i.innerHTML="",i.insertAdjacentHTML("beforeend",m(t))}).catch(t=>{console.log(t)}),g.refresh(),c.value=""}
//# sourceMappingURL=commonHelpers.js.map
