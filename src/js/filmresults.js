const resultsSection = document.querySelector('#results');
const API_URL = 'https://www.omdbapi.com/?apikey=339cac3&?type=movie&s=';

export async function showResults(results) {
  resultsSection.innerHTML = '';
  let htmlTemplate = '';
    results.forEach(movie => {
      htmlTemplate += `<div class="card text-white bg-dark col-2">
      <a href="https://www.imdb.com/title/${movie.imdbID}"><img class="card-img-top" src=${movie.Poster==='N/A'? 'img/image-not-found.gif':movie.Poster} alt="${movie.Title}" onerror="this.src = 'img/image-not-found.gif' "></a>
          <div class="card-body">
            <h5 class="card-title text-center"><a href="https://www.imdb.com/title/${movie.imdbID}" class="card-title">${movie.Title}</a></h5>
              <p class="card-text text-center">${movie.Year}</p>
          </div>
      </div>`;
    })
    resultsSection.innerHTML = htmlTemplate;
  
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
  const url = `${API_URL}${arrayOfRandomWords[itemInarrayOfRandomWords]}`;
  const response = await fetch(url)
  const data = await response.json();
  if (data.Error) {
    throw new Error (data.Error)
  }
  return data.Search;
}