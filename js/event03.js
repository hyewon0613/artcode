const swiper = new Swiper(".swiper_my", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 30,
  freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  autoplay: {
    delay: 1500,
    duration: 4000,
  },

  //slidepreview
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    481: {
      slidesPerView: 2,
      spaceBetween: 10,
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
