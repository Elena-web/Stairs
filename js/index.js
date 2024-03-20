

/*//icon arrow
$(document).ready(function () {
    $('#list > li').click(function (event) {
        $(this).find('.arrow').toggleClass('active');
        $(this).children("ul").slideToggle();
        event.stopPropagation();
    });
});*/
document.addEventListener('DOMContentLoaded', () => {
    const main =document.querySelector('.main');
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let mainCenter = main.offsetHeight;

        if (scrollTop >= mainCenter) {
            header.classList.add('fixed')
            main.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed');
            main.style.marginTop = `0px`
        }
    });
});

//открытие "Калькулятор стоимости"
// btn = document.getElementById('calc');
// btnClose = document.querySelector('.modal_close');
// calc = document.getElementById('umodal1');

// btn.addEventListener('click', function () {
// 	calc.style.display = "flex";	
// });
// btnClose.addEventListener('click', function () {
// 	calc.style.display = "none";	
// });

//открытие "Вызов мастера"
// btnCall = document.getElementById('call');
// btnClose = document.querySelector('.modal_close');
// call = document.getElementById('umodal');

// btnCall.addEventListener('click', function () {
// 	call.style.display = "flex";	
// });
// btnClose.addEventListener('click', function () {
// 	call.style.display = "none";	
// });

// Slider
$('.configurations__wrap').slick({
  dots: false,  
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,  
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 641,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 605,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});


$('.reviews__wrapper').slick({
  dots: false,  
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 605,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});