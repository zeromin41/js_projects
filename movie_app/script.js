const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a7ff72154d9967465a1fe5f7274997c4&language=ko-KR&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=a7ff72154d9967465a1fe5f7274997c4&language=ko-KR&query="

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(APIURL);   //처음 movies 가져옴

async function getMovies (url) {
    const resp = await fetch (url);
    const respData = await resp.json();

    showMovies(respData.results);
}

function showMovies(movies){

    main.innerHTML='';  // main clear

    movies.forEach((movie) => {
        const {poster_path, title, vote_average, overview} = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML =
        `<img src="${IMGPATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class='${getClassByRate(vote_average)}'>${vote_average}</span>
        </div>
        <div class='overview'>
            <h4>줄거리</h4>
            ${overview}
        </div>`

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if(vote>=8) {
        return 'green';
    } else if(vote >=5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const searchItem = search.value;

    if(searchItem) {
        getMovies(SEARCHAPI + searchItem);

        search.value='';
    }
});