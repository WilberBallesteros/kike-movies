//esta funcion la voy a llamar cuando cargue la app y cuando cambie el hash
//el hash es la url cuando cambia a otra ruta, se puede leer desde consola con ejm location.hash='#trends'

document.addEventListener('DOMContentLoaded', navigator, false); //cuando cargue la app
document.addEventListener('hashchange', navigator, false); //cada vez q cambie el hash

function navigator() {
    console.log({location});

    if(location.hash.startsWith('#trends')) { //si el hash comienza por trends
        trendsPage();
    } else if (location.hash.startsWith('#search=')) { //si estamos en busquedas
        searchPage() 
    } else if (location.hash.startsWith('#movie=')) { //buscar detalles de una peli por id
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')) { //categoria de una peli por id
        categoriesPage();
    } else {
        homePage();
    }
}

function homePage() {
    console.log('Home!!'); //si no encuentra ninguno no arroja error sino q redirije al home o si esta en el home pues home
    //llamamos a las funciones del archivo main.js
    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage() {
    console.log('estamos en Movie CATEGORIES');
}

function movieDetailsPage() {
    console.log('estamos en MOVIE (detalles de una peli!!)');
}

function searchPage() {
    console.log('estamos en SEARCH!!');
}

function trendsPage() {
    console.log('estamos en TRENDS!!');
}