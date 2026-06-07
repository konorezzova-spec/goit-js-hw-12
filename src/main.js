import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

hideLoader();

const searchForm = document.querySelector(".form");

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();
    const formData = new FormData(searchForm);
    const input = formData.get("search-text").trim();

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

    getImagesByQuery(input)
        .then(images => {
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
            createGallery(images);
        })
        .finally(() => {
            hideLoader();
        });
}