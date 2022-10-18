//eventos a los botones

searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=';
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
    location.hash = '#home';
});

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

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive'); //la flechita de ir atras no aparezca en el home
    arrowBtn.classList.remove('header-arrow--white'); 
    headerTitle.classList.remove('inactive'); //quitarla para q se muestre el titulo
    headerCategoryTitle.classList.add('inactive'); //inactivarlo cuando no estemos en la vista de categories
    searchForm.classList.remove('inactive'); //aparezca el formulario

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericListSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');


    //llamamos a las funciones del archivo main.js
    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage() {
    console.log('estamos en Movie CATEGORIES');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = ''; //sin estilos
    arrowBtn.classList.remove('inactive'); //la flechita de ir atras  aparezca en el home
    arrowBtn.classList.remove('header-arrow--white'); 
    headerTitle.classList.add('inactive'); 
    headerCategoryTitle.classList.remove('inactive'); 
    searchForm.classList.add('inactive'); //aparezca el formulario

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}

function movieDetailsPage() {
    console.log('estamos en MOVIE (detalles de una peli!!)');

    headerSection.classList.add('header-container--long');
    //headerSection.style.background = ''; //sin estilos
    arrowBtn.classList.remove('inactive'); 
    arrowBtn.classList.add('header-arrow--white'); 
    headerTitle.classList.add('inactive'); 
    headerCategoryTitle.classList.add('inactive'); 
    searchForm.classList.add('inactive'); //aparezca el formulario

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericListSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
}

function searchPage() {
    console.log('estamos en SEARCH!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = ''; //sin estilos
    arrowBtn.classList.remove('inactive'); //la flechita de ir atras  aparezca en el home
    arrowBtn.classList.remove('header-arrow--white'); 
    headerTitle.classList.add('inactive'); 
    headerCategoryTitle.classList.remove('inactive'); 
    searchForm.classList.remove('inactive'); //aparezca el formulario

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}

function trendsPage() {
    console.log('estamos en TRENDS!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = ''; //sin estilos
    arrowBtn.classList.remove('inactive'); //la flechita de ir atras  aparezca en el home
    arrowBtn.classList.remove('header-arrow--white'); 
    headerTitle.classList.add('inactive'); 
    headerCategoryTitle.classList.remove('inactive'); 
    searchForm.classList.add('inactive'); //aparezca el formulario

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}