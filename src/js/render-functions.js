import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
    
const simpleGallery = new SimpleLightbox(".gallery a");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

export function createGallery(images) { 
    const markup = images.map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `
        <li>
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <table class="info-table">
                <tr>
                    <th scope="col">Likes:</th>
                    <th scope="col">Views:</th>
                    <th scope="col">Comments:</th>
                    <th scope="col">Downloads:</th>
                </tr>
                <tr>
                    <td>${likes}</td>
                    <td>${views}</td>
                    <td>${comments}</td>
                    <td>${downloads}</td>
                </tr>
            </table>
        </li>
    `).join("");
    gallery.innerHTML = markup;
    simpleGallery.refresh();
}

export function clearGallery() { 
    gallery.innerHTML = "";
}

export function showLoader() { 
    loader.style.display = "block";
}

export function hideLoader() { 
    loader.style.display = "none";
}