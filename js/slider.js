const swiper1 = new Swiper(".slider-1", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,

  },

  grapbCursor: true,
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  }
}
)

/*SWIPER-2*/

const swiper2 = new Swiper(".slider-2", {
 

  grapbCursor: true,
  spaceBetween: 30,
  
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    }

  }
}
)