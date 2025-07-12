// HERO SLIDER

var swiper = new Swiper('.heroSwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 0,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// BRAND COM SLIDER

var swiper = new Swiper('.comSwiper', {
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints:{
    1400:{
      slidesPerView: 6,
    },
    1200:{
      slidesPerView: 3,
    },
    900:{
      slidesPerView: 4,
    },
    500:{
      slidesPerView: 2,
    },
    0:{
      slidesPerView: 2,
    }
  }
});

// ABOUT SLIDER

var swiper = new Swiper('.aboutSwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// TEAMS SLIDER

var swiper = new Swiper('.teamSwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    1400:{
      slidesPerView: 3,
    },
    1200:{
      slidesPerView: 3,
    },
    900:{
      slidesPerView: 2,
    },
    500:{
      slidesPerView: 1,
    },
    0:{
      slidesPerView: 1,
    }
  }
});

// TESTIMONIALS SLIDER

var swiper = new Swiper('.testSwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    1400:{
      slidesPerView: 3,
    },
    1200:{
      slidesPerView: 3,
    },
    900:{
      slidesPerView: 2,
    },
    500:{
      slidesPerView: 1,
    },
    0:{
      slidesPerView: 1,
    }
  }
});

// ABOUT PAGE ABPSWIPER SLIDER

var swiper = new Swiper('.abpSwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 500,
  },
  breakpoints:{
    1400:{
      slidesPerView: 3,
    },
    1200:{
      slidesPerView: 3,
    },
    900:{
      slidesPerView: 2,
    },
    500:{
      slidesPerView: 1,
    },
    0:{
      slidesPerView: 1,
    }
  }
});

// ABOUT PAGE CLIENT FEEDBACK SLIDER

var swiper = new Swiper('.cfbSwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1200,
});

// SERVICE PAGE SCSWIPER SLIDER

var swiper = new Swiper('.scSwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2000,
  },
  breakpoints:{
    1400:{
      slidesPerView: 4,
    },
    1200:{
      slidesPerView: 3,
    },
    900:{
      slidesPerView: 2,
    },
    500:{
      slidesPerView: 1,
    },
    0:{
      slidesPerView: 1,
    }
  }
});


// SHOW MENU

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () =>{
  menu.classList.toggle('show_menu');
  console.log('clicked');
})

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".services",
    start:"top bottom",
    end:"bottom top",
    scrub: true,
  }
});
tl.to(".service-element", {
  rotation: 360,
  y: 0,
  opacity: 1,
  stagger: .5,
})

let tl1 = gsap.timeline();

tl1.from(".section-title", {
  x: -100,
  opacity: 0,
  duration: 1,
})
tl1.to(".section-title", {
  x: 0,
  opacity: 1,
})

tl1.from(".service-wrapper", {
  x: 200,
  opacity: 0,
})
tl1.to(".service-wrapper", {
  x: 0,
  opacity: 1,
})

tl1.from(".service-bottom-content", {
  x: -200,
  opacity: 0,
})
tl1.to(".service-bottom-content", {
  x: 0,
  opacity: 1,
})

tl1.from(".process-top", {
  x: -200,
  opacity: 0,
})
tl1.to(".process-top", {
  x: 0,
  opacity: 1,
})



let tl2 = gsap.timeline();

tl2.from(".process-title", {
  x: -200,
  opacity: 0,
})
tl2.to(".process-title", {
  x: 0,
  opacity: 1,
})
tl2.from(".process-img", {
  scale: .2,
  opacity: 0,
})
tl2.to(".process-img", {
  scale: 1,
  opacity: 1,
})
tl2.from(".process-box1", {
  x: -200,
  opacity: 0,
})
tl2.to(".process-box1", {
  x: 0,
  opacity: 1,
})
tl2.from(".process-box2", {
  x: -200,
  opacity: 0,
})
tl2.to(".process-box2", {
  x: 0,
  opacity: 1,
})
tl2.from(".process-box3", {
  x: 200,
  opacity: 0,
})
tl2.to(".process-box3", {
  x: 0,
  opacity: 1,
})

let tl3 = gsap.timeline();

tl3.from(".teams-title", {
  x: -200,
  opacity: 0,
})
tl3.to(".teams-title", {
  x: 0,
  opacity: 1,
})
tl3.from(".teams-swiper", {
  y: 100,
  opacity: 0,
})
tl3.to(".teams-swiper", {
  y: 0,
  opacity: 1,
})

let tl4 = gsap.timeline();

tl4.from(".test-title", {
  x: -200,
  opacity: 0,
})
tl4.to(".test-title", {
  x: 0,
  opacity: 1,
})
tl4.from(".client-det", {
  x: -100,
  opacity: 0,
})
tl4.to(".client-det", {
  x: 0,
  opacity: 1,
})
tl4.from(".client-content", {
  x: 100,
  opacity: 0,
})
tl4.to(".client-content", {
  x: 0,
  opacity: 1,
})
tl4.from(".test-swiper", {
  y: 100,
  opacity: 0,
})
tl4.to(".test-swiper", {
  y: 0,
  opacity: 1,
})

let tl5 = gsap.timeline();

tl5.from(".footer-logo", {
  x: -100,
  opacity: 0,
})
tl5.to(".footer-logo", {
  x: 0,
  opacity: 1,
})
tl5.from(".footer-wrapper", {
  x: 100,
  opacity: 0,
})
tl5.to(".footer-wrapper", {
  x: 0,
  opacity: 1,
})
tl5.from(".footer-marquee", {
  x: 100,
  opacity: 0,
})
tl5.to(".footer-marquee", {
  x: 0,
  opacity: 1,
})
tl5.from(".footer-bottom", {
  y: -100,
  opacity: 0,
})
tl5.to(".footer-bottom", {
  y: 0,
  opacity: 1,
})

let testTl1 = gsap.timeline({
  scrollTrigger:{
    trigger:".choose-us",
    start:"top bottom",
    end:"bottom top",
    scrub: true,
  }
});
testTl1.to(".choose-shape", {
  rotation: 360,
  y: 0,
  opacity: 1,
  stagger: .5,
})

let testTl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".choose-us",
    start:"top bottom",
    end:"bottom top",
    scrub: true,
  }
});
testTl2.to(".choose-shape2", {
  rotation: -360,
  y: 0,
  opacity: 1,
  stagger: .5,
})

