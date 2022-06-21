/* jshint esnext: true */
var jQuery, setInterval, document, window;
(function ($) {
    "use strict";
    const stylish = {
        sub_menu: $('.sub-menu'),
        win_wid: $(window).width()
    };

    stylish.plugin = () => {
        
        if($.fn.magnificPopup){
            //global--video--popup
            stylish.st_video_popup = $('.st--pop-video');
            stylish.st_video_popup.magnificPopup({
                disableOn: 0,
                type: 'iframe',
                mainClass: 'mfp-zoom',
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false
            }); 
        }

        if($.fn.slicknav){
            stylish.main_menu = $('.main_menu');
            stylish.main_menu.slicknav();
        }
        
        stylish.nw_ticker1 = $('.st--news--ticker--1');
        if(stylish.nw_ticker1.length && $.fn.webTicker){
            stylish.nw_ticker1.webTicker();
        }
        
    };

    stylish.sliders = () => {
        const heroSlider = {};
        const stCarousel = {};

        if($.fn.slick){
            // heroSlider_1;
            heroSlider.slider_1 = $('.home--carousel--1');
            if(heroSlider.slider_1.length){
                heroSlider.slider_1.slick({
                    slidesToShow: 3,
                    variableWidth: true,
                    centerMode: true,
                    prevArrow: '<div class="slick--prev"></div>',
                    nextArrow: '<div class="slick--next"></div>',
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    swipe: false,
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                autoplay: true,
                                autoplaySpeed: 2000
                            }
                        }
                    ]
                });
                heroSlider.slider_1_settings = () => {
                    // slider_width_configuration
                    stylish.otherItemWidth = ( stylish.win_wid / 100 ) * 55;
                    // tablet device
                    if(stylish.win_wid < 992){
                        stylish.otherItemWidth =  stylish.win_wid - 300;
                    }
                    // tablet device
                    if(stylish.win_wid < 768){
                        stylish.otherItemWidth =  stylish.win_wid;
                    }
                    stylish.getOtherItem = heroSlider.slider_1.find('.slick-slide');
                    stylish.getOtherItem.css('width', stylish.otherItemWidth + 'px');
                    // arrow_width_configuration
                    stylish.getSlickArrow = heroSlider.slider_1.find('.slick-arrow');
                    stylish.arrowWidth = stylish.win_wid - stylish.otherItemWidth;
                    stylish.getSlickArrow.css('width', stylish.arrowWidth + 'px');
                };
                heroSlider.slider_1_settings();
                // extraClass add
                heroSlider.slider_2_addClass = () => {
                    heroSlider.slider_1.find('.slick-slide').removeClass('prevSlide nextSlide');
                    heroSlider.getSliderCurrent = heroSlider.slider_1.find('.slick-current');
                    heroSlider.getPrevSlide = heroSlider.getSliderCurrent.prev('.slick-slide').addClass('prevSlide');
                    heroSlider.getNextSlide = heroSlider.getSliderCurrent.next('.slick-slide').addClass('nextSlide');
                };
                heroSlider.slider_2_addClass();

                heroSlider.slider_1.on('beforeChange', function() {
                    heroSlider.slider_1.find('.slick-slide .st--inner > *, .slick-slide .st--vdo--btn')
                    .removeClass('fadeIn animated')
                    .css('opacity', '0');
                });
                heroSlider.slider_1.on('afterChange', function() {
                    heroSlider.slider_2_addClass();
                    heroSlider.slider_1.find('.slick-active .st--inner > *, .slick-slide .st--vdo--btn')
                    .css('opacity', '1')
                    .addClass('fadeIn animated');
                });
            }

            // heroSlider_2;
            heroSlider.slider_2 = $('.home--carousel--2');
            if(heroSlider.slider_2.length){
                if($('.feature1--and--home2--connection').length){
                    stCarousel.st_feature_carousel_1_nv = '.st--feature--carousel--1';
                }else{
                    stCarousel.st_feature_carousel_1_nv = false;
                }
                heroSlider.slider_2.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    asNavFor: stCarousel.st_feature_carousel_1_nv,
                    swipe: false
                });

                heroSlider.slider_2.on('beforeChange', function() {
                    heroSlider.animName = $(this).find('[data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation');
                        $(this).removeClass(animVal).css('opacity','0');
                    });
                });
                heroSlider.slider_2.on('afterChange', function() {
                    heroSlider.animName = $(this).find('.slick-current [data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation'),
                            animDur = $(this).attr('data-delay');
                        $(this).css('opacity', '1').addClass(animVal).css('animation-delay', animDur);
                    });
                });
            }

            // heroSlider_9;
            heroSlider.slider_2 = $('.home--carousel--9');
            if(heroSlider.slider_2.length){
                heroSlider.slider_2.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    swipe: false
                });

                heroSlider.slider_2.on('beforeChange', function() {
                    heroSlider.animName = $(this).find('[data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation');
                        $(this).removeClass(animVal).css('opacity','0');
                    });
                });
                heroSlider.slider_2.on('afterChange', function() {
                    heroSlider.animName = $(this).find('.slick-current [data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation'),
                            animDur = $(this).attr('data-delay');
                        $(this).css('opacity', '1').addClass(animVal).css('animation-delay', animDur);
                    });
                });
            }

            // heroSlider_3
            heroSlider.slider_3 = $('.home--carousel--3');
            if(heroSlider.slider_3.length){
                heroSlider.slider_3.slick({
                    variableWidth: true,
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    infinite: true,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
                });

                // slider width cofiguration
                heroSlider.slider_3_width = () => {
                    heroSlider.slider_3_sm_width = heroSlider.slider_3.width() / 3;
                    heroSlider.slider_3_sm_height = heroSlider.slider_3.height() / 2;
                    heroSlider.slider_3_lg_width = heroSlider.slider_3_sm_width * 2;
                    heroSlider.getLgItem = heroSlider.slider_3.find('.st--big--block');
                    heroSlider.getSmItem = heroSlider.slider_3.find('.st--small--block');
                    
                    // mobile device
                    if(stylish.win_wid < 768){
                        heroSlider.slider_3_lg_width = heroSlider.slider_3_sm_width * 3;
                        heroSlider.slider_3_sm_width = heroSlider.slider_3.width();
                    }

                    heroSlider.getLgItem.width(heroSlider.slider_3_lg_width);
                    heroSlider.getLgItem.height(heroSlider.slider_3.height());
                    heroSlider.getSmItem.width(heroSlider.slider_3_sm_width);
                    heroSlider.getSmItem.height(heroSlider.slider_3_sm_height);
                    
                    
                    
                    

                };
                heroSlider.slider_3_width();
            }


            // heroSlider_4;
            heroSlider.slider_4 = $('.home--carousel--4');
            if(heroSlider.slider_4.length){
                heroSlider.slider_4.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    fade: true,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    swipe: false
                    
                });

                heroSlider.slider_4.on('beforeChange', function() {
                    heroSlider.animName = $(this).find('[data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation');
                        $(this).removeClass(animVal).css('opacity','0');
                    });
                });
                heroSlider.slider_4.on('afterChange', function() {
                    heroSlider.animName = $(this).find('.slick-current [data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation'),
                        animDur = $(this).attr('data-delay');
                        $(this).css('opacity', '1').addClass(animVal).css('animation-delay', animDur);
                    });
                });
            }
            
            // heroSlider_5 
            heroSlider.slide_5 = $('.home--carousel--5');
            if(heroSlider.slide_5.length){
                heroSlider.slide_5.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    asNavFor: '.st--post--carousel--1',
                    autoplay: true,
                    autoplaySpeed: 4000,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    swipe: false
                });

                heroSlider.slide_5.on('beforeChange', function() {
                    heroSlider.animName = $(this).find('[data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation');
                        $(this).removeClass(animVal).css('opacity','0');
                    });
                });
                heroSlider.slide_5.on('afterChange', function() {
                    heroSlider.animName = $(this).find('.slick-current [data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation'),
                            animDur = $(this).attr('data-delay');
                        $(this).css('opacity', '1').addClass(animVal).css('animation-delay', animDur);
                    });
                });
            }
            
            // home--carousel--6
            heroSlider.slide_6 = $('.home--carousel--6');
            if(heroSlider.slide_6.length){
                heroSlider.slide_6.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    slidesToShow: 4,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3
                            }
                        }
                    ]
                });
            }
            
            // home--carousel--6
            heroSlider.post_4 = $('.post--carousel--4');
            if(heroSlider.post_4.length){
                heroSlider.post_4.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    slidesToShow: 3,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
                });
            }
            
            // home--carousel--7
            heroSlider.slide_7 = $('.home--carousel--7');
            if(heroSlider.slide_7.length){
                heroSlider.slide_7.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    slidesToShow: 1,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    dots: true,
                    swipe: false
                    
                });
                
                heroSlider.slide_7.on('beforeChange', function() {
                    heroSlider.animName = $(this).find('[data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation');
                        $(this).removeClass(animVal).css('opacity','0');
                    });
                });
                
                heroSlider.slide_7.on('afterChange', function() {
                    heroSlider.animName = $(this).find('.slick-current [data-slide-animation]');
                    heroSlider.animName.addClass('animated');
                    heroSlider.animName.each(function () {
                        var animVal = $(this).attr('data-slide-animation'),
                            animDur = $(this).attr('data-delay');
                        $(this).css('opacity', '1').addClass(animVal).css('animation-delay', animDur);
                    });
                });
            }

            // heroSlider_8
            heroSlider.slider_8 = $('.home--carousel--8');
            if(heroSlider.slider_8.length){
                heroSlider.slider_8.slick({
                    variableWidth: true,
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-arrow-right"></i></div>',
                    infinite: true,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
                });

                // slider width cofiguration
                heroSlider.slider_8_width = () => {
                    heroSlider.slider_8_sm_width = heroSlider.slider_8.width() / 3;
                    heroSlider.slider_8_sm_height = heroSlider.slider_8.height() / 2;
                    heroSlider.slider_8_lg_width = heroSlider.slider_8_sm_width * 2;
                    heroSlider.getLgItem = heroSlider.slider_8.find('.st--big--block');
                    heroSlider.getSmItem = heroSlider.slider_8.find('.st--small--block');

                    heroSlider.getLgItem.width(heroSlider.slider_8_lg_width);
                    heroSlider.getLgItem.height(heroSlider.slider_8.height());
                    heroSlider.getSmItem.width(heroSlider.slider_8_sm_width);
                    heroSlider.getSmItem.height(heroSlider.slider_8_sm_height);

                };
                heroSlider.slider_8_width();
            }
            
            // st--cat--carousel--1
            stCarousel.catCarousel_1 = $('.st--cat--carousel--1');
            if(stCarousel.catCarousel_1.length){
                stCarousel.catCarousel_1.slick({
                    slidesToShow: 3,
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-chevron-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-chevron-right"></i></div>',
                    infinite: true,
                    autoplay: true,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 450,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                    ]
                });
            }
            
            // st--widget--carousel--1
            stCarousel.widCarousel_1 = $('.st--widget--carousel--1');
            if(stCarousel.widCarousel_1.length){
                stCarousel.widCarousel_1.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    fade: true,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
                });
            }
            
            // st--post--carousel--1
            stCarousel.stPostCarousel_1 = $('.st--post--carousel--1');
            if(stCarousel.stPostCarousel_1.length){
                stCarousel.stPostCarousel_1.slick({
                    slidesToShow: 3,
                    infinite: true,
                    asNavFor: '.home--carousel--5',
                    centerMode: true,
                    focusOnSelect: true,
                    prevArrow: false,
                    nextArrow: false,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    swipe: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                    ]
                });
            }
            
            // st--post--carousel--2
            stCarousel.stPostCarousel_2 = $('.st--post--carousel--2');
            stCarousel.stPostCarousel_2_inner = $('.st--post--carousel--2 > div');
            
            if(stCarousel.stPostCarousel_2.length && stCarousel.stPostCarousel_2_inner.length > 1){
                stCarousel.stPostCarousel_2.slick({
                    slidesToShow: 1,
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                });
            }
            
            // st--post--carousel--3
            stCarousel.stPostCarousel_3 = $('.st--post--carousel--3');
            stCarousel.stPostCarousel_3_inner = $('.st--post--carousel--3 > div');
            
            if(stCarousel.stPostCarousel_3.length && stCarousel.stPostCarousel_3_inner.length > 1){
                stCarousel.stPostCarousel_3.slick({
                    slidesToShow: 1,
                    fade: true,
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                });
            }
            
            // st_feature_carousel_1
            stCarousel.st_feature_carousel_1 = $('.st--feature--carousel--1');
            if(stCarousel.st_feature_carousel_1.length){
                if($('.feature1--and--home2--connection').length){
                    stCarousel.st_hom_carousel_nv2 = '.home--carousel--2';
                }else{
                    stCarousel.st_hom_carousel_nv2 = false;
                }
                stCarousel.st_feature_carousel_1.slick({
                    slidesToShow: 3,
                    infinite: true,
                    vertical: true,
                    focusOnSelect: true,
                    asNavFor: stCarousel.st_hom_carousel_nv2,
                    centerMode: true,
                    prevArrow: false,
                    nextArrow: false,
                    verticalSwiping: true,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
                });
            }
            
            //st--video--carousel--1
            stCarousel.st_video_carousel_1 = $('.st--video--carousel--1');
            if(stCarousel.st_video_carousel_1.length){
                stCarousel.st_video_carousel_1.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                    slidesToShow: 4,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            }
            
            //st--video--carousel--2
            stCarousel.st_video_carousel_2 = $('.st--video--carousel--2');
            if(stCarousel.st_video_carousel_2.length){
                stCarousel.st_video_carousel_2.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                    slidesToShow: 1,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
                });
            }
            
            //st--video--carousel--3
            stCarousel.st_video_carousel_3 = $('.st--video--carousel--3');
            if(stCarousel.st_video_carousel_3.length){
                stCarousel.st_video_carousel_3.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                    slidesToShow: 2,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
                });
            }
            
            //st--tab--2--slider
            stCarousel.st_tab_2_slider = $('.st--tab--2--slider');
            if(stCarousel.st_tab_2_slider.length){
                stCarousel.st_tab_2_slider.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                    slidesToShow: 1,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
                });
            }
            
            //st--feature--slide--left
            stCarousel.st_tab_2_slider = $('.st--feature--slide--left');
            if(stCarousel.st_tab_2_slider.length){
                stCarousel.st_tab_2_slider.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                    slidesToShow: 1,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    asNavFor: '.st--feature--slide--right',
                    infinite: true
                });
            }
            
            //st--feature--slide--right
            stCarousel.st_tab_2_slider = $('.st--feature--slide--right');
            if(stCarousel.st_tab_2_slider.length){
                stCarousel.st_tab_2_slider.slick({
                    prevArrow: '<div class="slick--prev"><i class="zmdi zmdi-long-arrow-left"></i></div>',
                    nextArrow: '<div class="slick--next"><i class="zmdi zmdi-long-arrow-right"></i></div>',
                    slidesToShow: 4,
                    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                    vertical: true,
                    asNavFor: '.st--feature--slide--left',
                    infinite: true
                });
            }
            
        }

    };

    stylish.sync = () => {
        //home-area height configuration
        stylish.cta_height_1 = -1;
        stylish.get_cta_height_1 = $('.cta--height--1');
        stylish.get_cta_height_1.each(function () {
           if ($(this).height() > stylish.cta_height_1) {
               stylish.cta_height_1 = $(this).height();
           }
        });
        stylish.get_cta_height_1.height(stylish.cta_height_1);

        //post height configuration
        stylish.post_height_2 = -1;
        stylish.get_post_height_2 = $('.post--height--2');
        stylish.get_post_height_2.each(function () {
           if ($(this).height() > stylish.post_height_2) {
               stylish.post_height_2 = $(this).height();
           }
        });
        stylish.get_post_height_2.height(stylish.post_height_2);
        
        
        
        
        //eqal height & width
        stylish.eq_height = $('.st--eq--height');
        stylish.eq_height.height(stylish.eq_height.width());

        stylish.eq_width = $('.st--eq--width');
        stylish.eq_width.height(stylish.eq_width.height());
        
        
        // st--center--middle
        stylish.centerMiddle = $('.st--center--middle');
        stylish.centerMiddle.each(function() {
            stylish.marginMinusTop = $(this).height() / 2;
            stylish.marginMinusLeft = $(this).width() / 2;

            $(this).css({
                marginLeft : '-' + stylish.marginMinusLeft + 'px',
                marginTop : '-' + stylish.marginMinusTop + 'px'
            });
        });
        
    };

    stylish.custom_code = () => {
        if (stylish.sub_menu.length) {
            stylish.sub_menu.each(function () {
                $(this).closest('li').addClass('has-dropdown');
            });
        }
        
        // search-icon header--4
        stylish.search_icon_2 = $('.st--search--icon--2');
        stylish.search_box_2 = $('.st--search--box--2');
        stylish.search_close_2 = $('.st--search--close--2');
        stylish.main_menu = $('.main_menu');
        
        if(stylish.search_icon_2.length && stylish.search_box_2){
            stylish.search_icon_2.on('click', () => {
                stylish.search_box_2.addClass('active');
                stylish.main_menu.css({
                    opacity: '0',
                    visibility: 'hidden'
                });
            });
            stylish.search_close_2.on('click', () => {
                stylish.search_box_2.removeClass('active');
                stylish.main_menu.css({
                    opacity: '1',
                    visibility: 'visible'
                });
            });
        }
        
        
    };

    stylish.preloaderr = () => {
        stylish.preloader = $('.preloader');
        stylish.preloader.delay(1000).fadeOut(1000);
    };

    stylish.preloader_main = () => {
        stylish.preloader = $('.preloader--main');
        stylish.preloader.fadeOut(1000);
    };



    stylish.masonry = () => {
        // st--common--masonry
        stylish.common_masonry = $('.st--common--masonry');
        if(stylish.common_masonry.length){
            if($.fn.masonry){
                stylish.common_masonry.masonry({
                    itemSelector: '.st--common--masonry > div'
                });
            }
        }
    };

    stylish.consl_txt = () => {
        stylish.console_styles = [
            'font-size: 10px',
            'color: #ffffff',
            'background-color: #2e7d32',
            'display: block',
            'text-align: left',
            'font-weight: bold',
            'display: inline-block'
        ].join(';');
        console.log('%c SITE LOADED 100%, -crazycafe ', stylish.console_styles);
    };
    
    
    // functions calling
    
    stylish.init =  () => {
        stylish.plugin();
        stylish.custom_code();
        setInterval(stylish.sync, 1);
        stylish.sliders();
        stylish.preloader_main();
    };
    
    stylish.wl_init = () => {
        stylish.masonry();
        stylish.consl_txt();
        stylish.preloaderr();
    };

    $(document).ready(stylish.init);
    $(window).on("load", stylish.wl_init);

})(jQuery);
