import '../css/style.css';
import '../css/style.scss';
import formSubmitted from './formsubmit';
import { onloadResults } from './filmresults';

const form = document.querySelector('form');
form.addEventListener('submit', formSubmitted)
window.addEventListener('onload', onloadResults())