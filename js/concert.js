const swiper = new Swiper(".swiper_mySwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 30,
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
    delay: 3000,
  },
});
