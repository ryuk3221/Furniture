$(function(){
  var mixer = mixitup('.catalog__inner', {
    animation: {
        duration: 300
    }
  });
  $(".rateyo").rateYo({
    starWidth: '20px',
    ratedFill: '#F6DE00',
    spacing: '10px',
    starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"/></svg>'
  });
  $('.reviews__inner').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.png"></button>',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
})



let x = true;

document.querySelector('#burger').onclick = function() {
  document.querySelector('.burger-span1').classList.toggle('burger-span1--active');
  document.querySelector('.burger-span3').classList.toggle('burger-span2--active');
  if (x === true) {
    document.querySelector('.burger-span2').style.width = '0';
    document.querySelector('.header-top__box').style.transform = 'translateX(0)';
    x = false;
  }
  else {
    document.querySelector('.burger-span2').style.width = '40px';
    document.querySelector('.header-top__box').style.transform = 'translateX(-100%)';
    x = true; 
  }
}

document.querySelectorAll('.menu__link').forEach(function(el) {
  el.onclick = function() {
    document.querySelector('.burger-span2').style.width = '40px';
    document.querySelector('.burger-span1').classList.toggle('burger-span1--active');
    document.querySelector('.burger-span3').classList.toggle('burger-span2--active');
    document.querySelector('.header-top__box').style.transform = 'translateX(-100%)';
    x = true;
  }
})

const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  slidesPerView: 6,
  freeMode: true,
  mousewheel: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    475: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 6,
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  },
})