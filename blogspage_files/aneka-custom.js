/*
aneka - Multipurpose Business Startup WordPress Theme
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Isotope
3.Masonry
4.Progress Bar
5.Counter
6.Tab Features
7.Back To Top
8.Accordion
9.Header
10.Magnific Popup
11.Owl Carousel
12.Wow Animation
13.Skrollr
14.Screenshot

------------------------------------------------
Index Of Script
----------------------------------------------*/
(function(jQuery) {

    "use strict";
    jQuery(document).ready(function() {

        jQuery(window).on('load', function(e) {

            jQuery('ul.page-numbers').addClass('justify-content-center');

            /*------------------------
            Page Loader
            --------------------------*/
            jQuery("#load").fadeOut();
            jQuery("#loading").delay(0).fadeOut("slow");



            /*------------------------
            Background images  Effect
            --------------------------*/
            jQuery('.feature-box-effect').mouseenter(function() {
                jQuery('.selected').removeClass('selected').addClass('feature-box-effect');
                jQuery(this).removeClass('feature-box-effect').addClass('selected');
            });



            /*------------------------
            Isotope
            --------------------------*/
            jQuery('.isotope').isotope({
                itemSelector: '.iq-grid-item',
            });

            /*------------------------------
            filter items on button click
            -------------------------------*/
            jQuery('.isotope-filters').on('click', 'button', function() {
                var filterValue = jQuery(this).attr('data-filter');
                jQuery('.isotope').isotope({
                    resizable: true,
                    filter: filterValue
                });
                jQuery('.isotope-filters button').removeClass('active');
                jQuery(this).addClass('active');
            });

            /*------------------------
        Button effect
        --------------------------*/

            var floatTextMenuLinks = document.querySelectorAll("a.button");
            floatTextMenuLinks.forEach(function(link) {
                var letters = link.textContent.split("");
                link.textContent = "";
                letters.forEach(function(letter, i) {
                    var span = document.createElement("span");
                    span.textContent = letter;
                    span.style.transitionDelay = i / 20 + "s";
                    span.dataset.text = letter;
                    link.append(span);
                });
            });



            /*------------------------
                    Swiper style -1
             --------------------------*/


            var swiper = new Swiper('.swiper-style-two', {
                slidesPerView: '3',
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loopFillGroupWithBlank: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false,
                },

                breakpoints: {
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    }
                }
            });

            /*------------------------
            Tabs
            --------------------------*/
            jQuery(window).on('scroll', function(e) {
                var nav = jQuery('#pills-tab');
                if (nav.length) {
                    var contentNav = nav.offset().top - window.outerHeight;
                    if (jQuery(window).scrollTop() >= (contentNav)) {
                        e.preventDefault();
                        jQuery('#pills-tab li a').removeClass('active');
                        jQuery('#pills-tab li a[aria-selected=true]').addClass('active');
                    }
                }
            });
            jQuery(window).on('scroll', function(e) {
                var nav = jQuery('#features');
                if (nav.length) {
                    var contentNav = nav.offset().top - window.outerHeight;
                    if (jQuery(window).scrollTop() >= (contentNav)) {
                        e.preventDefault();
                        jQuery('#features .row li a').removeClass('active');
                        jQuery('#features .row li a[aria-selected=true]').addClass('active');
                    }
                }
            });


            jQuery(document).ready(function() {
                var a = jQuery('.nav.nav-pills').each(function() {
                    var b = jQuery(this).find('a.active').attr('href');
                    activaTab(b);
                })
            });

            function activaTab(pill) {
                jQuery(pill).addClass('active show');
            };


            /*------------------------
            Masonry
            --------------------------*/
            var jQuerymsnry = jQuery('.iq-masonry-block .iq-masonry');
            if (jQuerymsnry) {
                var jQueryfilter = jQuery('.iq-masonry-block .isotope-filters');
                jQuerymsnry.isotope({
                    percentPosition: true,
                    resizable: true,
                    itemSelector: '.iq-masonry-block .iq-masonry-item',
                    masonry: {
                        gutterWidth: 0
                    }
                });
                // bind filter button click
                jQueryfilter.on('click', 'button', function() {
                    var filterValue = jQuery(this).attr('data-filter');
                    jQuerymsnry.isotope({
                        filter: filterValue
                    });
                });

                jQueryfilter.each(function(i, buttonGroup) {
                    var jQuerybuttonGroup = jQuery(buttonGroup);
                    jQuerybuttonGroup.on('click', 'button', function() {
                        jQuerybuttonGroup.find('.active').removeClass('active');
                        jQuery(this).addClass('active');
                    });
                });
            }



            /*------------------------
            Progress Bar
            --------------------------*/
            jQuery('.iq-progress-bar > span').each(function() {
                var jQuerythis = jQuery(this);
                var width = jQuery(this).data('percent');
                jQuerythis.css({
                    'transition': 'width 2s'
                });
                setTimeout(function() {
                    jQuerythis.appear(function() {
                        jQuerythis.css('width', width + '%');
                    });
                }, 500);
            });


            /*----------------
            Counter
            ---------------------*/
            jQuery('.timer').countTo();

            /*----------------
            Coming soon
            ---------------------*/
            var $expire_dates = jQuery('.expire_date').attr('id');

            jQuery('.example').countdown({

                date: $expire_dates,
                offset: -8,
                date: '10/01/2020 23:59:59',
                day: 'Day',
                days: 'Days'
            }, function() {

            });

            /*----------------
            Timer
            ---------------------*/
            if (jQuery(".expire_date").length) {
                var $l;
                var $i;
                var $j;
                $l = jQuery(".expire_date").length;

                $i = 1;
                jQuery('.expire_date').each(function() {
                    jQuery(this).addClass('expire_date_' + $i);
                    $i++;
                });

                $i = 1;
                jQuery('.example').each(function() {
                    jQuery(this).addClass('example_' + $i);
                    $i++;
                });

                for ($i = 1; $i <= $l; $i++) {

                    var $expire_dates = jQuery('.expire_date_' + $i).attr('id');

                    jQuery('.example_' + $i).countdown({
                        date: $expire_dates,
                        offset: -8,
                        day: 'Day',
                        days: 'Days'
                    }, function() {

                    });
                }
            }


            /*------------------------
            Tab Features
            --------------------------*/
            jQuery('#myTab li a').on('click', function() {
                jQuery('#myTab li a').attr('aria-selected', false);
                jQuery(this).attr('aria-selected', true);
            });

            jQuery(window).on('scroll', function(e) {

                var nav = jQuery('#features');
                if (nav.length) {
                    var contentNav = nav.offset().top - 250;
                    if (jQuery(this).scrollTop() >= (contentNav)) {
                        e.preventDefault();
                        jQuery('#features .row #myTab li a').removeClass('active');
                        jQuery('#features .row #myTab li').children('a[aria-selected=true]').addClass('active');
                    }
                }
            });



            /*------------------------
            Back To Top
            --------------------------*/
            jQuery('#back-to-top').fadeOut();
            jQuery(window).on("scroll", function() {
                if (jQuery(this).scrollTop() > 250) {
                    jQuery('#back-to-top').fadeIn(1400);
                } else {
                    jQuery('#back-to-top').fadeOut(400);
                }
            });

            // scroll body to 0px on click
            jQuery('#top').on('click', function() {
                jQuery('top').tooltip('hide');
                jQuery('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

            /*------------------------
            Accordion
            --------------------------*/
            jQuery('.iq-accordion .iq-ad-block .ad-details').hide();
            jQuery('.iq-accordion .iq-ad-block:first').addClass('ad-active').children().slideDown('slow');
            jQuery('.iq-accordion .iq-ad-block').on("click", function() {
                if (jQuery(this).children('div').is(':hidden')) {
                    jQuery('.iq-accordion .iq-ad-block').removeClass('ad-active').children('div').slideUp('slow');
                    jQuery(this).toggleClass('ad-active').children('div').slideDown('slow');
                }
            });

            /*------------------------
            Header
            --------------------------*/
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > 10) {
                    jQuery('header').addClass('menu-sticky');
                } else {
                    jQuery('header').removeClass('menu-sticky');
                }
            });

            /*------------------------
            Magnific Popup
            --------------------------*/
            jQuery('.popup-gallery').magnificPopup({
                delegate: 'a.popup-img',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });


            jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });

            /*------------------------
            Owl Carousel
            --------------------------*/
            jQuery('.owl-carousel').each(function() {
                var jQuerycarousel = jQuery(this);
                jQuerycarousel.owlCarousel({
                    items: jQuerycarousel.data("items"),
                    loop: jQuerycarousel.data("loop"),
                    margin: jQuerycarousel.data("margin"),
                    nav: jQuerycarousel.data("nav"),
                    dots: jQuerycarousel.data("dots"),
                    autoplay: jQuerycarousel.data("autoplay"),
                    autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
                    navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
                    responsiveClass: true,
                    responsive: {
                        // breakpoint from 0 up
                        0: {
                            items: jQuerycarousel.data("items-mobile-sm"),
                            nav: false,
                            dots: true
                        },
                        // breakpoint from 480 up
                        480: {
                            items: jQuerycarousel.data("items-mobile"),
                            nav: false,
                            dots: true
                        },
                        // breakpoint from 786 up
                        786: {
                            items: jQuerycarousel.data("items-tab")
                        },
                        // breakpoint from 1023 up
                        1023: {
                            items: jQuerycarousel.data("items-laptop")
                        },
                        1199: {
                            items: jQuerycarousel.data("items")
                        }
                    }
                });
            });

            /*------------------------
            Wow Animation
            --------------------------*/
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true
            });
            wow.init();


            /*------------------------
                skrollr
            --------------------------*/
            if (jQuery(window).width() > 992) {
                skrollr.init({
                    forceHeight: false
                });
            }


            jQuery('.sub-menu').css('display', 'none');
            jQuery('.sub-menu').prev().addClass('isubmenu');
            jQuery(".sub-menu").before('<i class="fa fa-angle-down toggledrop" aria-hidden="true"></i>');


            jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function() {
                jQuery(this).next('.children, .sub-menu').slideToggle();
            });

            jQuery("#top-menu .menu-item .toggledrop").off("click");
            if (jQuery(window).width() < 992) {
                jQuery('#top-menu .menu-item .toggledrop').on('click', function(e) {
                    e.preventDefault();
                    jQuery(this).next('.children, .sub-menu').slideToggle();
                });
            }
        });

        jQuery(window).on('resize', function() {
            "use strict";
            jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function() {
                jQuery(this).next('.children, .sub-menu').slideToggle();
            });

            jQuery("#top-menu .menu-item .toggledrop").off("click");
            if (jQuery(window).width() < 992) {
                jQuery('#top-menu .menu-item .toggledrop').on('click', function(e) {
                    e.preventDefault();
                    jQuery(this).next('.children, .sub-menu').slideToggle();
                });
            }
        });


        /*------------------------
        Screenshots silder
        --------------------------*/
        var slide = jQuery('.slider-single');
        var slideTotal = slide.length - 1;
        var slideCurrent = -1;

        function slideInitial() {
            slide.addClass('proactivede');
            setTimeout(function() {
                slideRight();
            }, 500);
        }

        function slideRight() {
            if (slideCurrent < slideTotal) {
                slideCurrent++;
            } else {
                slideCurrent = 0;
            }

            if (slideCurrent > 0) {
                var preactiveSlide = slide.eq(slideCurrent - 1);
            } else {
                var preactiveSlide = slide.eq(slideTotal);
            }
            var activeSlide = slide.eq(slideCurrent);
            if (slideCurrent < slideTotal) {
                var proactiveSlide = slide.eq(slideCurrent + 1);
            } else {
                var proactiveSlide = slide.eq(0);
            }

            slide.each(function() {
                var thisSlide = jQuery(this);
                if (thisSlide.hasClass('preactivede')) {
                    thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
                }
                if (thisSlide.hasClass('preactive')) {
                    thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
                }
            });
            preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
            activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
            proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
        }

        function slideLeft() {
            if (slideCurrent > 0) {
                slideCurrent--;
            } else {
                slideCurrent = slideTotal;
            }

            if (slideCurrent < slideTotal) {
                var proactiveSlide = slide.eq(slideCurrent + 1);
            } else {
                var proactiveSlide = slide.eq(0);
            }
            var activeSlide = slide.eq(slideCurrent);
            if (slideCurrent > 0) {
                var preactiveSlide = slide.eq(slideCurrent - 1);
            } else {
                var preactiveSlide = slide.eq(slideTotal);
            }
            slide.each(function() {
                var thisSlide = jQuery(this);
                if (thisSlide.hasClass('proactivede')) {
                    thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
                }
                if (thisSlide.hasClass('proactive')) {
                    thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
                }
            });
            preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
            activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
            proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
        }

        var left = jQuery('.slider-left');
        var right = jQuery('.slider-right');
        left.on('click', function() {
            slideLeft();
        });
        right.on('click', function() {
            slideRight();
        });
        slideInitial();

    });
})(jQuery);