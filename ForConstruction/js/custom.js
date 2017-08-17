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

    // $('.featured-slider').slick({
    //   autoplay:true,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   appendArrows:$(".slide-controller"),
    //    responsive: [
    //    {
    //   breakpoint: 768,
    //   settings: {
    //     arrows: false
    //   }
    // }],
    // {
    //   breakpoint: 767,
    //   settings: {
    //     arrows: false,
    //     slidesToShow:1,
    //     slidesToScroll: 1
    //   }
    // },]
    // });
    $('ul.navbar-nav').find('a').click( function(){
      $(this).parent().addClass('active')
        .siblings().removeClass('active');
    });

    
    $('ul.navbar-nav a').click(function() { 
    
    pageid=$(this).attr('href');
      pos=$(pageid).find('.content').offset();
      
    
   
  h=($(window).height()- $(pageid).find('.content').height())/2;
   
     $('html, body').animate({scrollTop: pos.top - h-50},500,function(){
      window.location="#!" +  pageid.substr(1, pageid.length);
     });
      return false;
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
      };

      if ($(this).scrollTop() > 400) {
        $('header').addClass('fixed').animate("slow");
      } else {
        $('header').removeClass('fixed').animate("slow");
      };

    });

    $("a[href='#top']").click(function() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
     });

    $(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
      $(this).addClass('active')
      $(this).siblings().removeClass('active');
    selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
    
      });
    });

  });