// Hamburger menu

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.menu').toggleClass('active');
  });
  $('.menu__close').click(function(event) {
    $('.menu').removeClass('active');
  });
  $('.menu__item a').click(function() {
    $('.menu').removeClass('active');
  });
})
///////////////////////
// $('.header__burger').click(function() {
//   $(this).hide();
//   $('.menu__close').show();
// });

// $('.menu__close').click(function() {
//   $('.header__burger').show();
//   $(this).hide();
// });

/////////////////



// Sticky-bar

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 200) {
    $(".header__sticky").removeClass("sticky-bar");
  } else {
    $(".header__sticky").addClass("sticky-bar");
  }
});


// Slider

 $('.slider').slick({
     arrows:false,
     dots:true,
     adaptiveHeight:true,
     slidesToShow:1,
     speed:1000,
    //   variableWidth: true,
 });





// Validate

$(function() {
    $(".form-contact__btn").click(function() {
      // validate and process form here
    });
  });
  
  $.validator.addMethod('regex', function(value, element, regexp){
    let regExsp = new RegExp(regexp);
    return this.optional(element) || regExsp.test(value)
  }, 'пожалуйста, проверьте свой ввод');
  
  
  $('#form-contact').validate({
    rules : {
        firstName: { 
            required: true,
            regex: "[A-я]{1,32}"
        },
        email : {
            required: true,
            regex: "[A-z]{1,32}"
        },
        message : {
            required: true,
        },
    },    
      messages : {
        firstName: {
          required: 'Поле обязательно',
          regex: 'Введите свое имя правильно'
        },
        email: {
          required: 'Поле обязательно',
          regex: 'Введите свой email правильно'
        },
        message: {
          required: 'Поле обязательно',
        },
      },
  });
  


// Sticky bar

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
    } else {
      $(".header-sticky").addClass("sticky-bar");
    }
  });


//плавний переход
  $(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});

/////////// modal-form

  $('.wrapper-form').on('submit', function(event) {
    event.preventDefault();
    $('.modal').addClass('show');
  })


