// Application Scripts:

// Покажем-спрячем форму поиска и блок для пользователей
// Сообщения об отправке формы
// Кнопка скролла страницы
// Если браузер не знает о svg-картинках
// Главный слайдер 

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html=$('html'),
        $body = $('body');


    //
    // Покажем-спрячем форму поиска и блок для пользователей
    //---------------------------------------------------------------------------------------
    function slideHeaderBlocks() {
        $body.append('<div id="overlay" class="overlay"></div>');//добавили оверлей
        var $form = $('.js-search'),
            $formBtn = $('.js-search-toggle'),
            $block = $('.js-userinfo'),
            $blockBtn = $('.js-userinfo-toggle'),
            $overlay = $('#overlay');

        $('.b-header__controls').on('click', '.js-search-toggle', function () {//покажем форму поиска
            if ($(this).hasClass('active')) {
                hideTarget($form, $formBtn);
            } else {
                hideTarget($block, $blockBtn);
                showTarget($form, $formBtn);
            }
        });

        $('.b-header__controls').on('click', '.js-userinfo-toggle', function () {//покажем блок для полбзователей
            if ($(this).hasClass('active')) {
                hideTarget($block, $blockBtn);
            } else {
                hideTarget($form, $formBtn);
                showTarget($block, $blockBtn);
            }
        });

        $overlay.on('click', function () {//будем закрывать активные блоки по клику на оверлей
            hideTarget($form, $formBtn);
            hideTarget($block, $blockBtn);
        });

        function showTarget(el, btn) {
            el.addClass('active');
            btn.addClass('active');
            $overlay.show();
        }


        function hideTarget(el, btn) {
            el.removeClass('active');
            btn.removeClass('active');
            $overlay.hide();
        }
    }
    slideHeaderBlocks();


    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    function initMobileMenu() {
        var $menu = $('.js-mm'),
            $btn = $('.js-mm-toggle'),
            $overlay = $('#overlay'); //оверлей уже добавлен в документ

        $('.b-header__controls').on('click', '.js-mm-toggle', function () {
            if ($(this).hasClass('active')) {
                hideMenu();
            } else {
                showMenu();
            }
        });

        $overlay.on('click', function () {
            hideMenu();
        });

        function showMenu() {
            $btn.addClass('active');
            $menu.addClass('active');
            $overlay.show();
            $html.css('overflow', 'hidden');
        }

        function hideMenu() {
            $btn.removeClass('active');
            $menu.removeClass('active');
            $overlay.hide();
            $html.css('overflow', 'auto');
        }

        
        $('.js-mm').on('click', '.m-menu__label', function () {
            hideMenu();
        });
    }

    initMobileMenu();

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

    if ($('.js-mainslider').length) { initMainSlider();}
    
});
