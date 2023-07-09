//Галерея

new Swiper(`.image-slider`, {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  autoHeight: true,

  slidesPerView: 2.2,

  spaceBetween: 15,

  slidesPerGroup: 1,

  centeredSlides: true,

  autoplay: {
    delay: 1500,
    stopOnLastSide: true,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },

  zoom: {
    maxRatio: 5,
    minRatio: 1,
  },
});

//Preloader
window.onload = setTimeout(function () {
  const preloaderEl = document.querySelector(`.mask-loader`);
  const mainEl = document.querySelector(`main`);
  mainEl.style.display = `flex`;
  preloaderEl.style.display = `none`;
}, 4000);

//Map

let map;

DG.then(function () {
  map = DG.map("map", {
    center: [43.243789, 76.92896],
    zoom: 13,
  });

  let myIcon = DG.icon({
    iconUrl: `img/marker.png`,
    iconSize: [26, 36],
  });

  DG.marker([43.243789, 76.92866], { icon: myIcon })
    .addTo(map)
    .bindPopup("Beauty street Kate Kotelnikova Nails");
});

//Scroll

const animItems = document.querySelectorAll(`._anim-items`);

if (animItems.length > 0) {
  window.addEventListener(`scroll`, animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - window.innerHeight / animStart;
      if (animItemHeight > window.Height) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove(`_active`);
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

//burger

(() => {
  window.onload = () => {
    let header__burger = document.querySelector(".header__burger");
    let footer__nav = document.querySelector(".footer__nav");
    let body = document.querySelector("body");
    header__burger.addEventListener("click", (e) => {
      header__burger.classList.toggle("active");
      footer__nav.classList.toggle("active");
      body.classList.toggle("lock");
    });
  };
})();

let header__burger = document.querySelectorAll(".header__burger,.lis");
let footer__nav = document.querySelector(".footer__nav");
let back = document.querySelector("body");

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    footer__nav.classList.toggle("active");
    back.classList.toggle("lock");
  };
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .footer__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".lis").click(function (event) {
    $(".header__burger, .footer__nav").removeClass("active");
    $("body").removeClass("lock");
  });
});
