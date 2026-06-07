import axios from "axios";


export async function getImagesByQuery(query, page) { 
    const rez = {
        images: [],
        totalHits: 0,
    };
    const API_KEY = '49108638-27579a6dba88847264bd73f39';
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`);
    rez.images = response.data.hits;
    rez.totalHits = response.data.totalHits;
    return rez;
}