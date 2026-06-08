import{a as $,S as q,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function m(o,a){return(await $.get(`https://pixabay.com/api/?key=49108638-27579a6dba88847264bd73f39&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=15`)).data}const M=new q(".gallery a"),g=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");function y(o){const a=o.map(({largeImageURL:r,webformatURL:s,tags:e,likes:t,views:l,comments:v,downloads:w})=>`
        <li class="gallery-item">
            <a href="${r}">
                <img src="${s}" alt="${e}" loading="lazy" />
            </a>
            <table class="info-table">
                <tr>
                    <th scope="col">Likes:</th>
                    <th scope="col">Views:</th>
                    <th scope="col">Comments:</th>
                    <th scope="col">Downloads:</th>
                </tr>
                <tr>
                    <td>${t}</td>
                    <td>${l}</td>
                    <td>${v}</td>
                    <td>${w}</td>
                </tr>
            </table>
        </li>
    `).join("");g.insertAdjacentHTML("beforeend",a),M.refresh()}function P(){g.innerHTML=""}function b(){f.style.display="block"}function c(){f.style.display="none"}function L(){p.classList.remove("visually-hidden")}function E(){p.classList.add("visually-hidden")}c();let i,k=15,d,u;const h=document.querySelector(".form"),S=document.querySelector(".load-more-btn");h.addEventListener("submit",async o=>{if(o.preventDefault(),d=new FormData(h).get("search-text").trim(),P(),E(),i=1,d===""){n.error({position:"topRight",theme:"dark",title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040"});return}b();try{const r=await m(d,i),s=r.hits,e=r.totalHits,t=Math.ceil(e/k);if(c(),s.length===0){n.error({position:"topRight",theme:"dark",title:"Error",message:"Sorry, there are no images  matching your search query.Please try again!",backgroundColor:"#EF4040"});return}i<t?L():n.error({position:"topRight",theme:"dark",title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040"}),y(s),i+=1}catch(r){c(),n.error({position:"topRight",theme:"dark",title:r.name,message:r.message,backgroundColor:"#EF4040"})}});S.addEventListener("click",C);function C(){b(),E(),m(d,i).then(o=>{const a=o.hits,r=o.totalHits,s=Math.ceil(r/k);if(c(),y(a),u=document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:u*2,left:0,behavior:"smooth"}),i>=s)return n.error({position:"topRight",theme:"dark",title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040"});i+=1,L()}).catch(o=>{c(),n.error({position:"topRight",theme:"dark",title:o.name,message:o.message,backgroundColor:"#EF4040"})})}
//# sourceMappingURL=index.js.map
