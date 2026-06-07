import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

hideLoader();

let page = 1;
let limit = 15;
let input;

const searchForm = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more-btn");

searchForm.addEventListener('submit', async (event) =>{
    event.preventDefault();
    const formData = new FormData(searchForm);
    input = formData.get("search-text").trim();

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

    clearGallery();
    showLoader();

    try {
        const images = (await getImagesByQuery(input, page)).images;
        if (images.length === 0) {
            iziToast.error({
                position: 'topRight',
                theme: 'dark',
                    title: "Error",
                    message: "Sorry, there are no images  matching your search query.Please try again!",
                    backgroundColor: '#EF4040',
            });
            hideLoader();
            hideLoadMoreButton();
            return;
            }
            createGallery(images);
            page += 1;
    } catch (error) {
        console.log(error);
    }
            hideLoader();
            showLoadMoreButton();
});

loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleLoadMore() {
    showLoader();
    hideLoadMoreButton();
    try {
        const images = (await getImagesByQuery(input, page)).images;
        const totalHits = (await getImagesByQuery(input, page)).totalHits;
            const totalPages = Math.ceil(totalHits / limit);
            if (page >= totalPages) {
                hideLoadMoreButton();
                return iziToast.error({
                    position: 'topRight',
                    theme: 'dark',
                    title: "Error",
                    message: "We're sorry, but you've reached the end of search results.",
                    backgroundColor: '#EF4040',
                });
            }
            hideLoader();
            createGallery(images);
            page += 1;
            showLoadMoreButton();
    } catch (error) {
        console.error(error);
    }
}