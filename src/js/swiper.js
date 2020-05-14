/* eslint-disable import/no-cycle */
import Swiper from 'swiper';
import {
  slideNextPage
} from './formsubmit';

const mySwiper = new Swiper('.swiper-container', {
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
    1366: {
      slidesPerView: 4,
      spaceBetween: 50,
    }
  }
})
let pageNumber = 1;
mySwiper.on('slideChange', function () {
  const swiperLastIndexforTablets = 6;
  const swiperLasIndexforMobiles = 9;
  if (mySwiper.activeIndex === swiperLastIndexforTablets || mySwiper.activeIndex === swiperLasIndexforMobiles) {
    slideNextPage(pageNumber += 1)
  }
})
export default mySwiper