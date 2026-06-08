import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

hideLoader();

let page;
let limit = 15;
let input;
let heightOfCard;

const searchForm = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more-btn");

searchForm.addEventListener('submit', async (event) =>{
    event.preventDefault();
    const formData = new FormData(searchForm);
    input = formData.get("search-text").trim();

    clearGallery();
    hideLoadMoreButton();
    page = 1;

    if (input === "") {
        iziToast.error({
            position: 'topRight',
            theme: 'dark',
            title: "Error",
            message: "Please enter a search query.",
            backgroundColor: '#EF4040',
        });
        return;
    }

    showLoader();

    try {
        const data = await getImagesByQuery(input, page);
        const images = data.hits;
        const totalHits = data.totalHits;
        const totalPages = Math.ceil(totalHits / limit);
        hideLoader();

        if (images.length === 0) {
            iziToast.error({
                position: 'topRight',
                theme: 'dark',
                title: "Error",
                message: "Sorry, there are no images  matching your search query.Please try again!",
                backgroundColor: '#EF4040',
            });
            return;
        }
        if (page < totalPages) {
            showLoadMoreButton();
        } else {
            iziToast.error({
                position: 'topRight',
                theme: 'dark',
                title: "Error",
                message: "We're sorry, but you've reached the end of search results.",
                backgroundColor: '#EF4040',
            });
        }
        createGallery(images);
        page += 1;
        
    } catch (error) {
        hideLoader();
        iziToast.error({
            position: 'topRight',
            theme: 'dark',
            title: error.name,
            message: error.message,
            backgroundColor: '#EF4040',
        });
    }
});

loadMoreBtn.addEventListener('click', handleLoadMore);

function handleLoadMore() {
    showLoader();
    hideLoadMoreButton();
    getImagesByQuery(input, page)
        .then(data => {
            const images = data.hits;
            const totalHits = data.totalHits;
            const totalPages = Math.ceil(totalHits / limit);
            hideLoader();
        
            createGallery(images);
        
            heightOfCard = document.querySelector(".gallery-item").getBoundingClientRect().height;
            window.scrollBy({
                top: (heightOfCard * 2),
                left: 0,
                behavior: "smooth",
            });
        
            if (page >= totalPages) {
                return iziToast.error({
                    position: 'topRight',
                    theme: 'dark',
                    title: "Error",
                    message: "We're sorry, but you've reached the end of search results.",
                    backgroundColor: '#EF4040',
                });
            }
        
            page += 1;
            showLoadMoreButton();

        })
        .catch((error) => {
            hideLoader();
            iziToast.error({
                position: 'topRight',
                theme: 'dark',
                title: error.name,
                message: error.message,
                backgroundColor: '#EF4040',
            });
        })
        // .finally(hideLoader())
    }