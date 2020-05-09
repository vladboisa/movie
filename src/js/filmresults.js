import mySwiper from './swiper';
import showError from './showerror'

const API_URL = 'https://www.omdbapi.com/?apikey=339cac3&?type=movie&s=';

export async function showResults(results) {
  mySwiper.removeAllSlides();
    results.forEach(movie => {
      mySwiper.appendSlide([`<div class="swiper-slide"><div class="card text-white bg-dark">
      <a href="https://www.imdb.com/title/${movie.imdbID}"><img class="card-img-top" src=${movie.Poster==='N/A'? 'img/image-not-found.gif':movie.Poster} width="295" height="440" alt="${movie.Title}" onerror="this.src = 'img/image-not-found.gif' "></a>
          <div class="card-body">
            <h5 class="card-title text-center"><a href="https://www.imdb.com/title/${movie.imdbID}/videogallery" class="card-title">${movie.Title}</a></h5>
              <p class="card-text text-center">${movie.Year}</p>
          </div>
      </div>`])
      mySwiper.update();
    })

  
}
export async function getResults(searchTerm) {
  const url = `${API_URL}${searchTerm}`;
  const response = await fetch(url)
  const data = await response.json();
  if (data.Error) {
    throw new Error (data.Error)
  }
  return data.Search;
}
export async function onloadResults() {
  const arrayOfRandomWords = ['Flower', 'Rings', 'Dog', 'Bill', 'Kill', 'Time', 'Hello', 'Some', 'terms', 'with', 'spaces', 'between', 'Clothes', 'Emotions', 'Products', 'Happy', 'Cry']
  const itemInarrayOfRandomWords = Math.floor(Math.random() * arrayOfRandomWords.length);
  mySwiper.removeAllSlides();
  try {
    const results = await getResults(arrayOfRandomWords[itemInarrayOfRandomWords])
    showResults(results);
    } catch(error) {
      showError(error);
    }
}