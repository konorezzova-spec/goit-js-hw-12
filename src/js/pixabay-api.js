import axios from "axios";

export function getImagesByQuery(query) { 
    const API_KEY = '49108638-27579a6dba88847264bd73f39';
    return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            return response.data.hits; 
        })
        .catch(error => {
            console.error(error);
        });
}