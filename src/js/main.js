// Application Scripts:

// Покажем-спрячем форму поиска и блок для пользователей
// Сообщения об отправке формы
// Кнопка скролла страницы
// Главный слайдер
// Слайдер акционных предложений
// Слайдер цитат
// Модальное окно
// Выбор цвета (чекбокс colorbox)
// Слайдер (фильтр) цен в каталоге
// Иконка лоадера на время аякс-закрузки контента
// Лайтбокс
// Степперы (кол-во товара)
// Корзина покупок - считаем итоговые суммы
// Сообщения об отправке формы
// Если браузер не знает о svg-картинках
// Если браузер не знает о красивых чекбоксах

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
                        slideWidth: 298,
                        slideMargin: 23,
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
            pager: false,
            infiniteLoop: false,
            hideControlOnEnd: true
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
    

    //
    // Выбор цвета (чекбокс colorbox)
    //---------------------------------------------------------------------------------------
    function initColorbox() {
        var $colorbox = $('.js-colorbox .colorbox');
        $colorbox.each(function () {
            var $el = $(this),
                $check = $el.find('input');
            $el.append('<i class="icon-ok colorbox__icon"></i>');
            if ($el.data('color') != '') { //передадим цвет через data-атрибут
                $el.css('background-color', $(this).data('color'));
            }
            if ($check.is(':checked')) {//если чекбокс включен - покажем галочку
                $el.addClass('active');
            }
        });
        $colorbox.on('click', function () {
            var $el = $(this),
                $target = $el.find('input');
            if ($target.prop('type') == 'radio') { //если кликаем по радио-кнопке
                if ($el.hasClass('active')) {
                    return false; //кликнули по активной кнопке - ничего не делаем
                } else {
                    var $ul = $el.parents('ul');
                    $ul.find('.colorbox').removeClass('active');
                    $el.addClass('active').find('input').prop('checked', true);
                }
            } else { //если кликаем на чекбокс
                if ($el.hasClass('active')) {
                    $el.removeClass('active').find('input').prop('checked', false);
                } else {
                    $el.addClass('active').find('input').prop('checked', true);
                }
            }
        });
    };
    if ($('.js-colorbox').length) { initColorbox(); };

    //
    // Слайдер (фильтр) цен в каталоге
    //---------------------------------------------------------------------------------------
    function initPriceSlider() {
        var $slider = document.getElementById('priceslider'),
            low_price = Math.floor($('#low_price').val()),
            high_price = Math.floor($('#high_price').val());

        noUiSlider.create($slider, {
            start: [low_price, high_price],
            step: 100,
            connect: true,
            range: {
                'min': low_price,
                'max': high_price
            }
        });

        var $low_price = document.getElementById('low_price'),
            $high_price = document.getElementById('high_price');

        $slider.noUiSlider.on('update', function (values, handle) {//меняем значения в полях ввода когда двигаем ползунки
            var value = values[handle];

            if (handle) {
                $high_price.value = Math.floor(value);
            } else {
                $low_price.value = Math.floor(value);
            }
        });

        $('.js-priceinput').keydown(function (e) { //разрешим вводить только цифры в поле
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });

        $low_price.addEventListener('change', function () {
            $slider.noUiSlider.set([this.value, null]);
        });

        $high_price.addEventListener('change', function () {
            $slider.noUiSlider.set([null, this.value]);
        });
    };
    if ($('.js-priceslider').length && !$html.hasClass('lt-ie9')) {
        initPriceSlider();
    };

    //
    // Иконка лоадера на время аякс-закрузки контента
    //---------------------------------------------------------------------------------------
    var contentLoader = (function () {
        $loader = $('<span class="loader"></span>');

        var method = {};

        method.showIcon = function () {
            $body.append($loader);
            $overlay.addClass('full').show();
            $loader.show();
        }
        method.hideIcon = function () {
            $loader.hide();
            $overlay.removeClass('full').hide();
            $loader.remove();
        }
        return method;
    })();

    $('button[data-loader]').on('click', function () {//// ДЛЯ ПРИМЕРА - УДАЛИТЬ ИЗ РЕАЛЬНОГО ПРИЛОЖЕНИЯ !!!!
        contentLoader.showIcon();
        setTimeout(contentLoader.hideIcon, 600);
    });

    //
    // Лайтбокс
    //---------------------------------------------------------------------------------------
    $('.js-popup').lightbox({ blur: false });

    //
    // Степперы (кол-во товара)
    //---------------------------------------------------------------------------------------
    function initStepper() {
        $('.js-stepper').stepper({
            'incrementButton': '<i class="icon-plus"></i>',
            'decrementButton': '<i class="icon-minus"></i>',
            'limit': [1, ],
            'allowWheel': false,
            'allowArrows': false
        });

        $('.js-stepper').on('change', function () {//костыль
            var val = $(this).val();
            if (val == "0" || val == "") {
                $(this).val(1);
            }
        });
    };

    if ($('.js-stepper').length) { initStepper(); }

    //
    // Корзина покупок - считаем итоговые суммы
    //---------------------------------------------------------------------------------------
    function calcOrderSum() {
        var $count = $('.js-cart-count'),//кол-во позиций
            $total = $('.js-cart-total'),
            $order_total = $('.js-order-total'),
            $list = $('.js-cart-list'),
            total=0,
            method = {};

        method.recalc = function () {//пересчет корзины
            var price,
                item_count,
                subtotal,
                count = 0;

            total = 0;

            $list.find('li').each(function () {
                price = +$(this).find('.js-price').text();
                item_count = +$(this).find('.js-stepper').val();
                subtotal = price * item_count;
                count = count + item_count;
                total = total + subtotal;
                $(this).find('.js-cart-subtotal').text(subtotal);
            });

            $count.text(count);
            $total.text(total);

            method.calcOrder();
        }

        method.emptyCart = function () {
            $('.f-order').hide();
            $('.cart-empty').removeClass('g-hidden');
        }

        method.calcOrder = function () {//с учетом стоимости доставки
            var delivery = +$('.js-delivery:checked').val(),
                order_total;
            if (total > 0) {
                order_total = total + delivery;
            } else {
                order_total = 0;
                method.emptyCart();
            }
            $order_total.text(order_total);
        }

        

        method.recalc();//пробежали на старте, получили total

        $list.on('change', '.js-stepper', method.recalc);
        $list.on('click', '.stepper-btn-wrap a', method.recalc);
        $('.js-delivery').on('change', method.calcOrder);
        $list.on('click', '.js-cart-del', function () {
            $(this).parents('li').remove();
            method.recalc();
        });
    }
    if ($('.js-cart-count').length){calcOrderSum()}


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
    // Если браузер не знает о svg-картинках
    //---------------------------------------------------------------------------------------
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    //
    // Если браузер не знает о красивых чекбоксах
    //---------------------------------------------------------------------------------------
    if ($html.hasClass('lt-ie9')) {
        $('input[type="checkbox"]').removeClass('css-checkbox');
        $('input[type="radio"]').removeClass('css-radio');
        $('.product-grid__item:nth-child(3n)').addClass('last');
    }
});
