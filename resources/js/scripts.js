$(document).ready(function() {
     
    // 2 ways to define functions
    

    // seems to be the more appropriate way to do a function?
    $.fn.setNavUp = function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideUp(200);
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round'); 
    }

    // seems to be the awful way that is dirty
    function setNavDown() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideDown(200);
        icon.removeClass('ion-navicon-round');
        icon.addClass('ion-close-round'); 
    }
    
    
    // this was just a test to make sure that functions weren't immediately running
    function ruinEverything() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    }
    
    
    
    
    
    
    
    
    
    // when h1 element is clicked, change background color to red
    /*
    $('h1').click(function() {                  
         $(this).css('background-color', '#ff0000');
    })
    */
    
    
    
    
    /* when the screen scrolls past the point 60px before the heading, depending on the direction the user is scrolling, either add or remove the sticky navigation bar */
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {        
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }      
    }, {
        offset: '60px'
    });
    
    
    
    
    
    /* Button clicked scrolling */
    
    $('.js--scroll-to-plans').click(function() {
          
        /* take 1000ms (1 sec) to scroll to the top of the Plans section */
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    
    /* Navigation bar scrolling */
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
    
    
    /* Animations on scroll */
    
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%' /* half the page */
    });
    
    $('.js--wp-2').waypoint(function(direction) { 
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) { 
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) { 
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    
    
    /* Mobile navigation */
    
    $('.js--nav-icon').click(function() {
        
        /* oh wow this is kinda like a #define */
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        /* open/close a window, takes 200ms, or 0.2 seconds */
        //nav.slideToggle(200);
        
        //icon.toggleClass('ion-navicon-round');
        //icon.toggleClass('ion-close-round');
        
        if (icon.hasClass('ion-navicon-round')) {
            setNavDown();
            //nav.slideDown(200);
            //icon.removeClass('ion-navicon-round');
            //icon.addClass('ion-close-round'); 
        } else {
            $.fn.setNavUp();
            //nav.slideUp(200);
            //icon.addClass('ion-navicon-round');
            //icon.removeClass('ion-close-round'); 
        }
    });
    
    
    
    
    $('.js--main-nav a').click(function() {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        if ($('.main-nav').css("float") != "right"){
            $.fn.setNavUp();
            //nav.slideUp(200);
            //icon.addClass('ion-navicon-round');
            //icon.removeClass('ion-close-round');  
        }
    });
    
    
    
    
    //This works basically like a media query for jQuery, where we can take different actions depending on the screen width
    
    $(window).resize(function(){

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

//        if ($('window).width() > 767'){
        if ($('.main-nav').css("float") == "right"){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

    
});