import{a as q,S as v,i as u}from"./assets/vendor-DcHCnVjq.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function m(r,a){const t={images:[],totalHits:0},e=await q.get(`https://pixabay.com/api/?key=49108638-27579a6dba88847264bd73f39&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=15`);return t.images=e.data.hits,t.totalHits=e.data.totalHits,t}const S=new v(".gallery a"),g=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");function b(r){const a=r.map(({largeImageURL:t,webformatURL:i,tags:e,likes:o,views:n,comments:E,downloads:$})=>`
        <li class="gallery-item">
            <a href="${t}">
                <img src="${i}" alt="${e}" loading="lazy" />
            </a>
            <table class="info-table">
                <tr>
                    <th scope="col">Likes:</th>
                    <th scope="col">Views:</th>
                    <th scope="col">Comments:</th>
                    <th scope="col">Downloads:</th>
                </tr>
                <tr>
                    <td>${o}</td>
                    <td>${n}</td>
                    <td>${E}</td>
                    <td>${$}</td>
                </tr>
            </table>
        </li>
    `).join("");g.insertAdjacentHTML("beforeend",a),S.refresh()}function M(){g.innerHTML=""}function L(){y.style.display="block"}function l(){y.style.display="none"}function w(){p.classList.remove("visually-hidden")}function d(){p.classList.add("visually-hidden")}l();let s,P=15,c,h;const f=document.querySelector(".form"),B=document.querySelector(".load-more-btn");f.addEventListener("submit",async r=>{if(r.preventDefault(),c=new FormData(f).get("search-text").trim(),c===""){u.error({position:"topRight",theme:"dark",title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040"}),l(),d();return}M(),s=1,L();try{const t=(await m(c,s)).images;if(t.length===0){u.error({position:"topRight",theme:"dark",title:"Error",message:"Sorry, there are no images  matching your search query.Please try again!",backgroundColor:"#EF4040"}),l(),d();return}b(t),s+=1}catch(t){console.log(t)}l(),w()});B.addEventListener("click",H);async function H(){L(),d();try{const r=(await m(c,s)).images,a=(await m(c,s)).totalHits,t=Math.ceil(a/P);if(s>=t)return d(),u.error({position:"topRight",theme:"dark",title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040"});l(),b(r),s+=1,h=document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:h*2,left:0,behavior:"smooth"}),w()}catch(r){console.error(r)}}
//# sourceMappingURL=index.js.map
