async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;
    //console.log({data, movies});
    movies.forEach(movie => {

        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
       
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);//este title es este nombre tal cual q trae de la api
       movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path); //poster path nombre q trae de la api
   
    //poneerlo en el html
    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
    });

}

async function getCategoriesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
    const data = await res.json();

    const categories = data.genres; //genres por q asi esta en la api
    //console.log({data, movies});
    categories.forEach(category => {

        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
       
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);//el 2 id trae los colores
        const categoryTitleText = document.createTextNode(category.name);
   
    //poneerlo en el html
    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    previewCategoriesContainer.appendChild(categoryContainer);

    });

}


getTrendingMoviesPreview();
getCategoriesPreview();