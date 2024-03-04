import { getImages } from './js/pixabay-api.js';
import { render } from './js/render-functions.js'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imagesList = document.querySelector(".images-list");
const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-settings');

const lightbox = new SimpleLightbox('images-list a', {
    nav: true,
    captions: true,
    captionsData: 'alt',
    captionDelay: 150,
})

searchButton.addEventListener('click', search);

function search(event) {
    event.preventDefault();
    const query = searchBar.value.trim();
    getImages(query)
        .then(images => {
            imagesList.innerHTML = '';
            imagesList.insertAdjacentHTML("beforeend", render(images)); 
        })
        .catch (error => {
        console.log(error);
        });
    lightbox.refresh();
    searchBar.value = '';
}