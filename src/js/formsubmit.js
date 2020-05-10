import {
  getResults, showResults
} from './filmresults';

import showError,{hideError} from './showerror'


function showPreload () {
  const preloadContainer = document.getElementById('preload');
    preloadContainer.style.display = "block"
}
function hidePreload () {
  const preloadContainer = document.getElementById('preload');
    preloadContainer.style.display = "none"
}
export default async function formSubmitted(event) {
  const input = document.querySelector('#searchTerm');
    event.preventDefault();
    const searchTerm = input.value;
  try {
  await showPreload();
  hideError();
  const results = await getResults(searchTerm);
  showResults(results);
  await hidePreload();
  } catch(error) {
    showError(error);
  }
}
