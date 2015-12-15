// Application Scripts:

// Покажем-спрячем форму поиска и блок для пользователей
// Сообщения об отправке формы
// Кнопка скролла страницы
// Если браузер не знает о svg-картинках
// Главный слайдер
// Слайдер акционных предложений
// Слайдер цитат
// Модальное окно

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html = $('html'),
        $body = $('body');
        
    $body.append('<div id="overlay" class="overlay"></div>');//добавили оверлей
    var $overlay = $('#overlay');

    

    //
    // Покажем-спрячем форму поиска и блок для пользователей
    //---------------------------------------------------------------------------------------
    var slideHeaderBlocks = (function () {
        var $form = $('.js-search'),
            $formBtn = $('.js-search-toggle'),
            $block = $('.js-userinfo'),
            $blockBtn = $('.js-userinfo-toggle'),
            method = {};

        $('.b-header__controls').on('click', '.js-search-toggle', function () {//покажем форму поиска
            if ($(this).hasClass('active')) {
                method.hideSearch();
            } else {
                method.showSearch();
            }
        });

        $('.b-header__controls').on('click', '.js-userinfo-toggle', function () {//покажем блок для пользователей
            if ($(this).hasClass('active')) {
                method.hideBlock();
            } else {
                method.showBlock();
            }
        });

        method.showSearch = function () {
            hideUserBlock();//если открыт блок - скроем
            mobileMenu.hideMenu();//если открыто моб.меню - скроем
            $form.addClass('active');
            $formBtn.addClass('active');
            $overlay.show().bind('click', hideSearchForm);
        }

        method.hideSearch = function () {
            $form.removeClass('active');
            $formBtn.removeClass('active');
            $overlay.hide().unbind('click', hideSearchForm);
        }

        method.showBlock = function () {
            hideSearchForm();//если открыта форма поиска - спрячем
            mobileMenu.hideMenu();//если открыто моб.меню - скроем
            $block.addClass('active');
            $blockBtn.addClass('active');
            $overlay.show().bind('click', hideUserBlock);
        }

        method.hideBlock = function () {
            $block.removeClass('active');
            $blockBtn.removeClass('active');
            $overlay.hide().unbind('click', hideUserBlock);
        }

        function hideSearchForm() {//хелпер (чтобы не подключать - отключать отслеживание клика на оверлей)
            method.hideSearch();
        }

        function hideUserBlock() {//хелпер
            method.hideBlock();
        }

        return method;
    })();


    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    var mobileMenu = (function () {
        var $menu = $('.js-mm'),
            $btn = $('.js-mm-toggle'),
            method = {};


        $('.b-header__controls').on('click', '.js-mm-toggle', function () {
            if ($(this).hasClass('active')) {
                method.hideMenu();
            } else {
                method.showMenu();
            }
        });

        $('.js-mm').on('click', '.m-menu__label', function () {//закроем по клику на заголовок меню
            method.hideMenu();
        });

        method.showMenu = function () {
            slideHeaderBlocks.hideSearch(); //если была открыта форма поиска - спрятали
            slideHeaderBlocks.hideBlock(); //если был открыт блок для пользователей - спрятали
            $btn.addClass('active');
            $menu.addClass('active');
            $overlay.show().bind('click', hideMobileMenu);
            $html.css('overflow', 'hidden');
            
        }

        method.hideMenu = function () {
            $btn.removeClass('active');
            $menu.removeClass('active');
            $html.css('overflow', 'auto');
            $overlay.hide().unbind('click', hideMobileMenu);
        }

        function hideMobileMenu() {//хелпер
            method.hideMenu();
        }

        return method;
    })();
    

    //
    // Сообщения об отправке формы
    //---------------------------------------------------------------------------------------
    // после аякс-отправки формы ($form), если все ок - $form.find('.g-notice--ok').fadeIn();
    // если вернуло ошибку - $form.find('.g-notice--bad').fadeIn();
    var showFormNotice = (function () {
        var $notice = $('.js-notice');
        $notice.append('<a class="g-notice__close"><i class="icon-cancel"></i></a>'); //иконка закрытия
        $notice.on('click', '.g-notice__close', function (e) {//закроем блок по клику на иконку
            e.preventDefault();
            $(this).parent('div').fadeOut();
        });
    }());

    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    var initPageScroller = (function () {
        var $scroller = $('<div class="scroll-up-btn"><i class="icon-up-open-big"></i></div>');
        $body.append($scroller);
        $window.on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $scroller.show();
            } else {
                $scroller.hide();
            }
        });
        $scroller.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }());


    

    //
    // Если браузер не знает о svg-картинках
    //---------------------------------------------------------------------------------------
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    
    //
    // Главный слайдер 
    //---------------------------------------------------------------------------------------
    function initMainSlider() {
        var $slider = $('.js-mainslider').children('ul');

        $slider.bxSlider({
            auto: true,
            mode: 'fade',
            pause: 8000,
            autoHover: true
        });      
    }
    if ($('.js-mainslider').length) { initMainSlider(); }

    //
    // Слайдер акционных предложений
    //---------------------------------------------------------------------------------------
    function initPromoSlider() {
        var $slider = $('.js-promo-slider'),
            getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
                var setting,
                    settings1 = {
                        maxSlides: 1,
                    },
                    settings2 = {
                        maxSlides: 2,
                    },
                    settings3 = {
                        maxSlides: 3,
                    },
                    common = {
                        minSlides: 1,
                        moveSlides: 1,
                        slideWidth: 300,
                        slideMargin: 20,
                        auto:false,
                        pager: false,
                        infiniteLoop: false,
                        hideControlOnEnd: true
                    },
                    winW = $window.width();
                if (winW < 700) {
                    setting = $.extend(settings1, common);
                }
                if(winW>=700 && winW<990){
                    setting = $.extend(settings2, common);
                }
                if (winW >= 990) {
                    setting = $.extend(settings3, common);
                }
                return setting;
            }
        $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

        $window.on('resize', function () {
            setTimeout(recalcSliderSettings, 500);
        });

        function recalcSliderSettings() {
            $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }
    }
    if ($('.js-promo-slider').length) { initPromoSlider(); }

    //
    // Слайдер цитат
    //---------------------------------------------------------------------------------------
    function initQuoteSlider() {
        var $slider = $('.js-quote-slider').bxSlider({
            auto: false,
            pager:false,
        });
    }
    if ($('.js-quote-slider').length) { initQuoteSlider();}
    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $modal,
        $close;

        // добавим в документ
        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть


        $close.on('click', function (e) {
            e.preventDefault();
            closeModal();
        });

        function closeModal() {
            method.close();
        }

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $window.bind('resize.modal', method.center);
            $modal.fadeIn();
            $overlay.addClass('full').show().bind('click', closeModal);
        };

        // закрываем
        method.close = function () {
            $modal.fadeOut('fast');
            $overlay.removeClass('full').hide().unbind('click', closeModal);
            $window.unbind('resize.modal');
        };

        return method;
    }());

    // клик по кнопке с атрибутом data-modal - открываем модальное окно
    $('[data-modal]').on('click', function (e) {//передаем айди модального окна
        e.preventDefault();
        var link = $(this).data('modal');
        if (link) { showModal.open(link); }
    });
    
});
