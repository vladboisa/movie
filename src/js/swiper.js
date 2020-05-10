import Swiper from 'swiper';
import {
  getResults, showResults
} from './filmresults';

const mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 50,
    autoHeight: true,
    centerInsufficientSlides: true, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        320: {
         slidesPerView: 1,
         centeredSlides: true,
         centerInsufficientSlides: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1366 :{
            slidesPerView: 4,
            spaceBetween: 50,  
        }
      }
  })
  mySwiper.on('reachEnd', async function () {
    console.log(1);
  })
  export default mySwiper