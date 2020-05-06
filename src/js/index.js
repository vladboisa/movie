import '../css/style.css';
import '../css/style.scss';
import formSubmitted from './formsubmit';
import mySwiper from './swiper';
import {
  onloadResults
} from './filmresults';
/* API translate
https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200502T162614Z.f5854060a41d5297.0db50115084ff69045b58e5008b2ec4fc0c6b3b7&text=мечта&lang=ru-en
 */
const form = document.querySelector('form');
form.addEventListener('submit', formSubmitted)
window.addEventListener('onload', onloadResults())