import{a as q,S as v,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function h(r,o){return(await q.get(`https://pixabay.com/api/?key=49108638-27579a6dba88847264bd73f39&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=15`)).data}const M=new v(".gallery a"),g=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");function y(r){const o=r.map(({largeImageURL:a,webformatURL:s,tags:e,likes:t,views:i,comments:$,downloads:k})=>`
        <li class="gallery-item">
            <a href="${a}">
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
                    <td>${i}</td>
                    <td>${$}</td>
                    <td>${k}</td>
                </tr>
            </table>
        </li>
    `).join("");g.insertAdjacentHTML("beforeend",o),M.refresh()}function P(){g.innerHTML=""}function b(){f.style.display="block"}function c(){f.style.display="none"}function L(){p.classList.remove("visually-hidden")}function E(){p.classList.add("visually-hidden")}c();let n,w=15,d,u;const m=document.querySelector(".form"),S=document.querySelector(".load-more-btn");m.addEventListener("submit",async r=>{if(r.preventDefault(),d=new FormData(m).get("search-text").trim(),P(),E(),n=1,d===""){l.error({position:"topRight",theme:"dark",title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040"});return}b();try{const a=await h(d,n),s=a.hits,e=a.totalHits,t=Math.ceil(e/w);if(c(),s.length===0){l.error({position:"topRight",theme:"dark",title:"Error",message:"Sorry, there are no images  matching your search query.Please try again!",backgroundColor:"#EF4040"});return}n<t&&L(),y(s),n+=1}catch{c(),l.error({position:"topRight",theme:"dark",title:"error.name",message:"error.message",backgroundColor:"#EF4040"})}});S.addEventListener("click",C);async function C(){b(),E();try{const r=await h(d,n),o=r.hits,a=r.totalHits,s=Math.ceil(a/w);if(c(),n>=s)return l.error({position:"topRight",theme:"dark",title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040"});y(o),n+=1,u=document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:u*2,left:0,behavior:"smooth"}),L()}catch{c(),l.error({position:"topRight",theme:"dark",title:"error.name",message:"error.message",backgroundColor:"#EF4040"})}}
//# sourceMappingURL=index.js.map
