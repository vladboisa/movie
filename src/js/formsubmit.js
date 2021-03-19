/* eslint-disable import/no-cycle */
import {
    showResults,
    getResultsPageNumber
} from './filmresults';

import translateWords from './translateforwordsAPI';

import showError, { hideError, showErrorEmptyInput } from './showerror';

export function showPreload() {
    const preloadContainer = document.getElementById('preload');
    preloadContainer.style.display = "block"
}
export function hidePreload() {
    const preloadContainer = document.getElementById('preload');
    preloadContainer.style.display = "none"
}
export async function slideNextPage(pageNumber) {
    const input = document.querySelector('#searchTerm');
    const searchTerm = input.value;
    try {
        const translatedSearchTerm = await translateWords(searchTerm.length === 0 ? showError("Can't find empty movie title") : searchTerm);
        await showPreload();
        hideError();
        const results = await getResultsPageNumber(translatedSearchTerm, pageNumber)
        showResults(results);
        await hidePreload();
    } catch (error) {
        showError(error);
    }
}
export default async function formSubmitted(event) {
    const input = document.querySelector('#searchTerm');
    event.preventDefault();
    const searchTerm = input.value;
    try {
        /*     const translatedSearchTerm = await translateWords(searchTerm.length === 0 ? showErrorEmptyInput() : searchTerm);
         */
        await showPreload();
        hideError();
        const results = await getResultsPageNumber(searchTerm);
        showResults(results);
        await hidePreload();
    } catch (error) {
        showError(error);
    }
}