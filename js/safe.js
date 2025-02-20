const swiper = new Swiper(".swiper_meSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 50,
  freeMode: true,
  slidesOffsetBefore: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoplay: {
    delay: 1500,
    duration: 3500,
  },

  //slidepreview
  breakpoints: {
    1441: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 60,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    481: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
