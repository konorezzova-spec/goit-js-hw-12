import{a as m,S as p,i as s}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function y(a,o=1){return m.get(`https://pixabay.com/api/?key=49108638-27579a6dba88847264bd73f39&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.data.hits).catch(r=>{console.error(r)})}const g=new p(".gallery a"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function b(a){const o=a.map(({largeImageURL:n,webformatURL:r,tags:e,likes:t,views:i,comments:f,downloads:h})=>`
        <li>
            <a href="${n}">
                <img src="${r}" alt="${e}" loading="lazy" />
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
                    <td>${f}</td>
                    <td>${h}</td>
                </tr>
            </table>
        </li>
    `).join("");c.innerHTML=o,g.refresh()}function L(){c.innerHTML=""}function $(){l.style.display="block"}function u(){l.style.display="none"}u();const d=document.querySelector(".form");d.addEventListener("submit",E);function E(a){a.preventDefault();const n=new FormData(d).get("search-text").trim();if(n===""){s.error({position:"topRight",theme:"dark",title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040"});return}L(),$(),y(n).then(r=>{if(r.length===0){s.error({position:"topRight",theme:"dark",title:"Error",message:"Sorry, there are no images  matching your search query.Please try again!",backgroundColor:"#EF4040"});return}b(r)}).finally(()=>{u()})}
//# sourceMappingURL=index.js.map
