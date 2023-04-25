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

  })
})

document.querySelector('.catalog__btn').onclick = function() {
  document.querySelectorAll('.catalog__item--hide').forEach(function(el){
    el.classList.toggle('catalog__item--show');
  })
}