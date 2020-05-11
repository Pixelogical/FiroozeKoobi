$(document).ready(function () {
  if ($("#home").length) {
    $('#scroll').on('click', function () {
      $('html, body').animate({
        scrollTop: $("#other").offset().top
      }, 1200);
    });
  }

  // SUBMIT BUTTON AT FOOTER
  $(function () {
    $(".submit").click(function () {
      $(".submit").addClass("onclic");
      setTimeout(function () {
        validate()
      }, 1250);
    });

    function validate() {
      setTimeout(function () {
        $(".submit").removeClass("onclic");
        $(".submit").addClass("validate");
      }, 2250);
      setTimeout(function () {
        callback()
      }, 2250);
    }

    function callback() {
      setTimeout(function () {
        $(".submit").removeClass("validate");
      }, 1250);
    }
  });


  //Home Page features select topic:
  $(".features .description ul li").on('click', function (e) {
    e.preventDefault();
    var i = $('.features .description ul li').index(this);
    var desc = $('.features .description h5');
    desc.addClass('off');
    desc.eq(i).removeClass('off');
  });

  // //Export Page topic select:
  // $(".artco-bio .topics ul li").on('click', function (e) {
  //   e.preventDefault();
  //   var i = $('.artco-bio .topics ul li').index(this);
  //   var desc = $('.artco-bio p');
  //   desc.addClass('off');
  //   desc.eq(i).removeClass('off');
  // });

  // Export scroll cotrol
  $('.topics ul li').on('click', function (e) {
    e.preventDefault();
    var i = $('.topics ul li').index(this);
    var myElement = $("#export-resume");
    if (i === 1)
      myElement = $("#export-quality");
    if (i === 2)
      myElement = $("#export-gallery");
    if (i === 3)
      myElement = $("#export-description");
    $('html, body').animate({
      scrollTop: myElement.offset().top
    }, 1000);
  });


  // LANGUAGE DROP DOWN
  $('select[data-menu]').each(function () {

    let select = $(this),
      options = select.find('option'),
      menu = $('<div />').addClass('select-menu'),
      button = $('<div />').addClass('button'),
      list = $('<ul />'),
      arrow = $('<em />').prependTo(button);

    options.each(function (i) {
      let option = $(this);
      list.append(
        $('<li />').append($('<a href="#"/>').text(option.text()))
      );
    });

    menu.css('--t', select.find(':selected').index() * -41 + 'px');

    select.wrap(menu);

    button.append(list).insertAfter(select);

    list.clone().insertAfter(button);

  });

  $(document).on('click', '.select-menu', function (e) {

    let menu = $(this);

    if (!menu.hasClass('open')) {
      menu.addClass('open');
    }

  });
  $(document).on('click', '.select-menu > ul > li', function (e) {

    let li = $(this),
      menu = li.parent().parent(),
      select = menu.children('select'),
      selected = select.find('option:selected'),
      index = li.index();

  });
  $(document).click(e => {
    e.stopPropagation();
    if ($('.select-menu').has(e.target).length === 0) {
      $('.select-menu').removeClass('open');
    }
  });
  var mySelectMenu = $('.select-menu').eq(0);
  mySelectMenu.find('.button').find('ul').find('li').eq(0).find('a').attr("href", "http://aparat.com")
  mySelectMenu.find('.button').find('ul').find('li').eq(1).find('a').attr("href", "http://varzesh3.com")
  mySelectMenu.find('ul').eq(1).find('li').eq(0).find('a').attr("href", "http://aparat.com");
  mySelectMenu.find('ul').eq(1).find('li').eq(1).find('a').attr("href", "http://varzesh3.com");


  /* shop details */

  $shop_items = $(".product-preview .details .images .image");
  $shop_preview = $(".product-preview .product img");
  $shop_title = $(".product-preview .details .title");
  $shop_items.on('click', function (e) {
    $prev = $shop_preview.attr('src');
    $clicked = $(this).children('img').attr('src');
    $alt = $(this).children('img').attr('alt');
    $shop_preview.attr('src', $clicked);
    $shop_title.html($alt);


  });

  // good design change background and content
  $(".gooddesign .titles ul li").on('click', function (e) {
    e.preventDefault();
    var i = $('.gooddesign .titles ul li').index(this);
    var desc = $('.gooddesign .description .text-wrapper h1');
    var text = $('.gooddesign .description .text-wrapper h6');
    var button = $('.gooddesign .description .text-wrapper button');
    desc.addClass('off');
    text.addClass('off');
    button.addClass('off');
    desc.eq(i).removeClass('off');
    text.eq(i).removeClass('off');
    button.eq(i).removeClass('off');

    //change background:
    // var image = desc.eq(i).data("image");
    // $(".gooddesign").css("background-image", `url(img/${image})`);

    $(".gooddesign img").animate({opacity: '0'}, {duration: 400, queue: false})
    $(".gooddesign img").eq(i).animate({opacity: '1'}, {duration: 600, queue: false})

  });


  // generalshop categories selection
  var catDOM = $(".categories-noback .cats-title ul li");
  catDOM.on('click', function (e) {
    e.preventDefault();
    catDOM.each(function () {
      $(this).removeClass('selected');
    });
    $(this).addClass('selected');
    var category = $(this).data('category');
    $(".categories-noback .items-wrapper .item").each(function (i) {
      if (category === 'all')
        $(this).show();
      else {
        if ($(this).data('category') === category)
          $(this).show();
        else
          $(this).hide();
      }
    });
  });

  //about us slider slideshow
  var $slider = $(".slider"),
    $slideBGs = $(".slide__bg"),
    diff = 0,
    curSlide = 0,
    numOfSlides = $(".slide").length - 1,
    animating = false,
    animTime = 500,
    autoSlideTimeout,
    autoSlideDelay = 6000,
    $pagination = $(".slider-pagi");

  function createBullets() {
    for (var i = 0; i < numOfSlides + 1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-" + i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };

  createBullets();

  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };

  function autoSlide() {
    autoSlideTimeout = setTimeout(function () {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };

  autoSlide();

  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-" + curSlide).addClass("active");
      setTimeout(function () {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-" + curSlide).addClass("active");
    $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
    $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function (e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
      winW = $(window).width();
    diff = 0;

    $(document).on("mousemove touchmove", function (e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)");
      $slideBGs.css("transform", "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)");
    });
  });

  $(document).on("mouseup touchend", function (e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-control", function () {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-pagi__elem", function () {
    curSlide = $(this).data("page");
    changeSlides();
  });


});

