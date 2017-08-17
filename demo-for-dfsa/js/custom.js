$(document).ready(function() {
  //main slider
    $('.single-item').slick({
        autoplay:true,
        dots:true,
        arrows:false
    });

  //sidebar slider

    $('.single-item-slide').slick({
      autoplay:true
    });

  //home page list slider

    $('.featured-slider').slick({
      autoplay:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows:$(".slide-controller"),
       responsive: [
       {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow:1,
        slidesToScroll: 1
      }
    },]
    });
    $('ul.navbar-nav').find('a').click( function(){
      $(this).parent().addClass('active')
        .siblings().removeClass('active');
    });

    $('#menu').slinky({
      title: true,
    });

   $('.single-item').on('init', function(){
                $("article h1").addClass("animated fadeInDown");
                $("article p").addClass("animated fadeInLeft");
                $("article a").addClass("animated fadeInUp");
     });
      $('.single-item').on('beforeChange', function(){
                $("article h1").removeClass("animated fadeInDown");
                $("article p").removeClass("animated fadeInLeft");
                $("article a").removeClass("animated fadeInUp");
     });
    $('.single-item').on('afterChange', function(){
                $("article h1").addClass("animated fadeInDown");
                $("article p").addClass("animated fadeInLeft");
                $("article a").addClass("animated fadeInUp");
     });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('.go-to').fadeIn();
      } else {
        $('.go-to').fadeOut();
      }
    });

    $("a[href='#top']").click(function() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
     });

  });