import {
  getResults, showResults
} from './filmresults';

import showError from './showerror'

export default async function formSubmitted(event) {
  const input = document.querySelector('#searchTerm');
    event.preventDefault();
    const searchTerm = input.value;
  try {
  const results = await getResults(searchTerm)
  showResults(results);
  } catch(error) {
    showError(error);
  }

  
}
