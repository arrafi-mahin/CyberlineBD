(function($) {
    'use strict';

    var popupVideo = function() {
        if ( $().magnificPopup ) {
            $('.popup-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: true
            });
        }
    };

    var inViewport =  function() {
        $('.elementor-invisible').each(function () {
            var $el = $(this);
            var data = $(this).data('settings');
            if ( (data !== undefined) && (data !== 'undefined') && (data !== null) ) {
                if (!data.hasOwnProperty('_animation') && !data.hasOwnProperty('animation')) {
                    $el.addClass('no-animate');
                } else {
                    var 
                    animation = '',
                    delay = 0;

                    if ( data.hasOwnProperty('_animation') ) {
                        animation = data._animation;
                        delay = data._animation_delay;
                    } else {
                        animation = data.animation;
                        delay = data.animation_delay;
                    }

                    if (!delay) { 
                        delay = 0 
                    } 
                    $el.removeAttr('data-settings').addClass('master-animation');
                    $el.appear(function(e) {
                        if ($el.is('.elementor-element-3c5883f'))
                        setTimeout(function() {
                            if ( !$el.hasClass('animated') ) {
                                if ($el.is('.elementor-element-3c5883f'))
                                    console.log('bb', animation, delay);
                                e.preventDefault();
                                $el.removeClass('elementor-invisible').addClass('animated ' + animation);
                                setTimeout(function() { $el.addClass('animate'); }, 1000)
                                if ($el.is('.elementor-element-3c5883f'))
                                    console.log($el);
                            }
                        }, delay + 300)
                    })
                }
            } else {
                $el.addClass('no-animate');
            }
        })
    };

    var groupIconBox = function() {
        $('.group-icon-box').each(function () {
            var t = $(this),
            boxes = t.find('.master-icon-box');

            boxes.each(function (idx, el) {
                if ( $(el).parents('.active').length ) {
                    $(el).addClass('active');
                }

                $(el).on('mouseenter', function() {
                    boxes.removeClass('active');
                    $(el).addClass('active');
                })
            })
        })
    };

    var groupHoverBox = function() {
        var w = $('.elementor-container');
        w.each(function(i, e) {
            var items = $(e).find('.master-hover-box');

            if (items.length > 1) {
                var tl = [];
                var currentActive = 0;
                items.each(function(idx, el) {
                    $(el).on('mouseenter', function() {
                        if (!$(el).is('.active')) {
                            items.each(function(id2, el2) {
                                $(el2).removeClass('active')
                            })
                            $(el).addClass('active')
                        }
                    })
                })
            }
        })  
    };

    /**
     * Elementor JS Hooks
     */
    $(window).on("elementor/frontend/init", function() {
        // 
        elementorFrontend.hooks.addAction("frontend/element_ready/mae-image-box.default", 
            function( $scope ) { 
                var imgs = $scope.find('.thumb').addClass('reveal');
                $scope.appear(function () { imgs.addClass('master-animation revealBottom2'); }) 
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-pie-chart.default", 
            function( $scope ) { $scope.find('.master-pie-chart').masterPieChart(); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-counter.default", 
            function( $scope ) { $scope.appear(function() { $scope.find('.number').countTo(); }); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-tabs.default", 
            function( $scope ) { 
                var number = $scope.find('.tab-link').length;

                $scope.find('.tab-link-wrap li').css('max-width', (100 / number) + '%').first().addClass('active');
                $scope.find('.tab-content').first().addClass('active');

                $scope.find('.tab-link-wrap li').on('click', function() {
                    var
                    t = $(this),
                    id = t.attr('data-tab');

                    t.addClass('active')
                        .siblings().removeClass('active')
                        .closest('.master-tabs')
                        .find('.tab-content').removeClass('active').hide();
                    $("#" + id).addClass('active').fadeIn("slow");
                });
            }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-accordion.default", 
            function( $scope ) { 
                var args = {easing:'easeOutExpo', duration:300};
                var t = $scope.find('.master-accordions');

                var items = t.find('.item');

                items.each(function(idx, el) {
                    if ( $(el).is('.active') ) $(el).children('.content').show();

                    var btn = $(el).find('.title');
                    btn.on('click', function() {
                        var currentItem = items.eq(idx);

                        if ( !currentItem.is('.active') ) {
                            currentItem.siblings('.active').removeClass('active')
                                .children('.content').slideToggle(args);
                            currentItem.addClass('active')
                                .children('.content').slideToggle(args);
                        }
                    })
                })
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-progress-bar.default", 
            function( $scope ) {  
                var
                t = $scope,
                v = t.find(".progress"),
                c = t.find(".percent"),
                p = v.data('percent');

                t.appear(function() {
                    v.css({ 'width': p }, "slow");
                    c.css({ 'width': p }, "slow");
                });
            });

        // Carousel & Cube & Slider
        elementorFrontend.hooks.addAction("frontend/element_ready/mae-testimonial-slider.default", 
            function( $scope ) { $scope.find('.master-testimonial-slider').masterSlick(); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-slider.default", 
            function( $scope ) { $scope.find('.master-slider').masterSlider(); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-creative-slider.default", 
            function( $scope ) { $scope.find('.master-creative-slider').masterSlider(); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-project-carousel.default", 
            function( $scope ) { 
                $scope.find('.master-carousel-box').masterCarouselBox(); 

                var imgs = $scope.find('.thumb').addClass('master-animation');
                $scope.appear(function () { imgs.addClass('reveal revealBottom2'); })
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-testimonial-carousel.default", 
            function( $scope ) { 
                $scope.find('.master-carousel-box').masterCarouselBox(); 
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-carousel-box.default", 
            function( $scope ) { 
                $scope.find('.master-carousel-box').masterCarouselBox(); 
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-svg-drawing.default", 
            function( $scope ) { 
                var paths = $scope.find('path');
                var clip = $scope.find('clipPath');
                if (clip.length) {
                    paths = $scope.find('svg > path');
                }

                var duration = $scope.find('.master-svg-drawing').data('duration');
                var delay = $scope.find('.master-svg-drawing').data('delay');
                var totalLength = 0;

                duration ? duration = duration / 1000 : duration = 1,
                delay ? delay = delay / 1000 : delay = 0.3

                var tl = gsap.timeline({ paused: true, delay: delay });
                paths.each(function(idx, el) {
                    var a = el.getTotalLength();
                    totalLength += a;
                    gsap.set(el, {strokeDasharray: a, strokeDashoffset: a, opacity: 0});
                })

                paths.each(function(idx, el) {
                    var a = el.getTotalLength();
                    var time = a / totalLength * duration;
                    tl.set(el, { opacity: 1 });
                    tl.to(el, time, {strokeDashoffset: 0} )
                })

                $scope.appear(function() { tl.play(); })
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-team-carousel.default", 
            function( $scope ) { 
                $scope.find('.master-carousel-box').masterCarouselBox(); 
                var imgs = $scope.find('.thumb').addClass('master-animation');
                $scope.appear(function () { imgs.addClass('reveal revealBottom2'); }, {accTop: -50})
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-gallery-carousel.default", 
            function( $scope ) { $scope.find('.master-carousel-box').masterCarouselBox(); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-news-carousel.default", 
            function( $scope ) { 
                $scope.find('.master-carousel-box').masterCarouselBox(); 
                var imgs = $scope.find('.image-wrap').addClass('master-animation');
                $scope.appear(function () { imgs.addClass('reveal revealBottom2'); })
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-partner-carousel.default", 
            function( $scope ) { $scope.find('.master-carousel-box').masterCarouselBox(); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-news-grid.default", 
            function( $scope ) { $scope.find('.master-portfolio').masterPortfolio(); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-project-grid.default", 
            function( $scope ) { $scope.find('.master-portfolio').masterPortfolio(); }
            );

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-news-block.default", 
            function( $scope ) { 
                var items = $scope.find('.master-news');
                items.each(function(idx, el) {
                    $(el).on('mouseenter', function() {
                        items.removeClass('active');
                        $(el).addClass('active')
                    })
                })
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-text-box-grid.default", 
            function( $scope ) { 
                var active = $scope.find('.grid-container').data('active');
                var items = $scope.find('.master-text-box');

                if ( active !== 'none' && !isNaN(active) ) {
                    items.eq(active - 1).addClass('active');
                }

                items.each(function(idx, el) {
                    $(el).on('mouseenter', function() {
                        items.removeClass('active');
                        $(el).addClass('active')
                    })

                    if (active == 'none') {
                        $(el).on('mouseleave', function() { $(el).removeClass('active'); })
                    }
                })
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-gallery-stack.default", 
            function( $scope ) { 
                var calcHeight = function() {
                    $scope.waitForImages(function() {
                        var 
                        arr = [],
                        wrap = $scope.find('.master-gallery-stack'),
                        items = wrap.find('.master-fancy-image');

                        items.each(function(idx, item) {
                            var 
                            img = $(item).find('img'),
                            top = $(item).data('top');
                            if (!top) top = '0px';

                            if (img.length) {
                                if (top.indexOf("%") >= 0) {
                                    var height = $(item).height()/(100 - parseFloat(top))*100;
                                    isNaN(height) && (height = 0)
                                    arr.push(height);
                                } else {
                                    arr.push(parseInt(top) + $(img).height());
                                }
                            }
                        })

                        wrap.css("min-height", Math.max.apply(null, arr));
                    }) 
                }
                
                calcHeight();

                $(window).on('resize', function() {
                    calcHeight();
                })

                // Entrance Animation
                if ($scope.find('.master-animation').length) {
                    $scope.find('.master-animation').appear(function() {
                        $(this).addClass($(this).data('animation'));
                    }, {accTop: 50});
                }

                if ($scope.find('.parallax-hover').length) {
                    $scope.on('mousemove', function(e) {
                        var items = $scope.find('.parallax-hover');
                        items.each(function(idx, el) {
                            var 
                            r = $(el).data('range'),
                            d = $(el).data('direction'),
                            w = el.getBoundingClientRect(),
                            ox = e.clientX - w.x - w.width/2,
                            oy = e.clientY - w.y - w.height/2;
                            !r ? r = 0 : r = r / 10;
                            (d == 'opposite') && (r = r * -1)

                            gsap.to(el, 1, { x: ox * r, y: oy * r, ease: 'Expo.easeOut', overwrite: 'all' })
                        })
                    })

                    $scope.on('mouseleave', function(e) {
                        var items = $scope.find('.parallax-hover');
                        gsap.to(items, 1, {x: 0, y: 0, ease: 'Expo.easeOut', overwrite: 'all' })
                    })
                }
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-png-dots.default", 
            function( $scope ) { 
                // disable on mobile for better performance
                if ( !matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                    $scope.find('.master-png-dots').masterPngDots(); 
                }
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-globe.default", 
            function( $scope ) { 
                // disable on mobile for better performance
                if ( !matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                    $scope.find('.master-globe').masterGlobe();
                }
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/mae-particles.default", 
            function( $scope ) {
                $scope.css('position', 'static'); 
                // disable on mobile for better performance
                if ( !matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                    $scope.find('.master-particles').masterParticles();
                }
            });

        elementorFrontend.hooks.addAction("frontend/element_ready/section", 
            function( $scope ) {
                if ( $scope.is('.elementor-top-section') && $scope.not('.elementor-section-stretched') ) {
                    var c = $scope.find('> .elementor-container'),
                    w1 = parseInt( c.css('max-width') ) - 30;
                    
                    var calcWidth = function() {
                        if (w1 && (w1 > 1170) ) {
                            $scope.addClass('custom-section');
                            var w2 = $('.izeetak-container').width(),
                            w3 = $(window).width() - 30,
                            left = ((w3 - w2) - (w3 - w1))/-2;

                            if ( w1 > w2 ) {
                                if (w3 > w1) {
                                    $scope.css({'width': w1, 'left': left + 'px'})
                                } else {
                                    left = (w3 - w2)/-2
                                    $scope.css({'width': w3, 'left': left + 'px'})
                                }
                            } else {
                                $scope.css({'width': w3, 'left': '15px'})
                            }
                        }
                    }
                    
                    calcWidth();
                    $(window).on('resize', function() { calcWidth(); })
                }
            });

        inViewport();
        popupVideo();
        groupHoverBox();
        groupIconBox();
        
    });


})(jQuery);


