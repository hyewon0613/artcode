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
    delay: 1000,
    duration: 2500,
  },
});
