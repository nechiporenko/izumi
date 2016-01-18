// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 * bxSlider v4.2.4
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function(a){var b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};a.fn.bxSlider=function(c){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).bxSlider(c)}),this;var d={},e=this,f=a(window).width(),g=a(window).height();if(!a(e).data("bxSlider")){var h=function(){a(e).data("bxSlider")||(d.settings=a.extend({},b,c),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=e.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=d.settings.minSlides>1||d.settings.maxSlides>1?!0:!1,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"===d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!==d.settings.mode&&function(){for(var a=document.createElement("div"),b=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],c=0;c<b.length;c++)if(void 0!==a.style[b[c]])return d.cssPrefix=b[c].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"===d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),e.data("origStyle",e.attr("style")),e.children(d.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),i())},i=function(){var b=d.children.eq(d.settings.startSlide);e.wrap('<div class="'+d.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),d.viewport=e.parent(),d.settings.ariaLive&&!d.settings.ticker&&d.viewport.attr("aria-live","polite"),d.loader=a('<div class="bx-loading" />'),d.viewport.prepend(d.loader),e.css({width:"horizontal"===d.settings.mode?1e3*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?e.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:m()}),d.settings.pager||d.settings.controls||d.viewport.parent().css({margin:"0 auto 0px"}),d.children.css({"float":"horizontal"===d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",n()),"horizontal"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginRight",d.settings.slideMargin),"vertical"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginBottom",d.settings.slideMargin),"fade"===d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=a('<div class="bx-controls" />'),d.settings.captions&&x(),d.active.last=d.settings.startSlide===p()-1,d.settings.video&&e.fitVids(),("all"===d.settings.preloadImages||d.settings.ticker)&&(b=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.controls&&v(),d.settings.auto&&d.settings.autoControls&&w(),d.settings.pager&&u(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),j(b,k)},j=function(b,c){var d=b.find('img:not([src=""]), iframe').length,e=0;return 0===d?void c():void b.find('img:not([src=""]), iframe').each(function(){a(this).one("load error",function(){++e===d&&c()}).each(function(){this.complete&&a(this).load()})})},k=function(){if(d.settings.infiniteLoop&&"fade"!==d.settings.mode&&!d.settings.ticker){var b="vertical"===d.settings.mode?d.settings.minSlides:d.settings.maxSlides,c=d.children.slice(0,b).clone(!0).addClass("bx-clone"),f=d.children.slice(-b).clone(!0).addClass("bx-clone");d.settings.ariaHidden&&(c.attr("aria-hidden",!0),f.attr("aria-hidden",!0)),e.append(c).prepend(f)}d.loader.remove(),r(),"vertical"===d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(l()),e.redrawSlider(),d.settings.onSliderLoad.call(e,d.active.index),d.initialized=!0,d.settings.responsive&&a(window).bind("resize",R),d.settings.auto&&d.settings.autoStart&&(p()>1||d.settings.autoSlideForOnePage)&&H(),d.settings.ticker&&I(),d.settings.pager&&D(d.settings.startSlide),d.settings.controls&&G(),d.settings.touchEnabled&&!d.settings.ticker&&M(),d.settings.keyboardEnabled&&!d.settings.ticker&&a(document).keydown(L)},l=function(){var b=e.outerHeight(),c=null,f=a();if("vertical"===d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){c=1===d.settings.moveSlides?d.active.index:d.active.index*q(),f=d.children.eq(c);for(var g=1;g<=d.settings.maxSlides-1;g++)f=c+g>=d.children.length?f.add(d.children.eq(c+g-d.children.length)):f.add(d.children.eq(c+g))}else f=d.children.eq(d.active.index);else f=d.children;return"vertical"===d.settings.mode?(f.each(function(c){b+=a(this).outerHeight()}),d.settings.slideMargin>0&&(b+=d.settings.slideMargin*(d.settings.minSlides-1))):b=Math.max.apply(Math,f.map(function(){return a(this).outerHeight(!1)}).get()),"border-box"===d.viewport.css("box-sizing")?b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))+parseFloat(d.viewport.css("border-top-width"))+parseFloat(d.viewport.css("border-bottom-width")):"padding-box"===d.viewport.css("box-sizing")&&(b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))),b},m=function(){var a="100%";return d.settings.slideWidth>0&&(a="horizontal"===d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),a},n=function(){var a=d.settings.slideWidth,b=d.viewport.width();if(0===d.settings.slideWidth||d.settings.slideWidth>b&&!d.carousel||"vertical"===d.settings.mode)a=b;else if(d.settings.maxSlides>1&&"horizontal"===d.settings.mode){if(b>d.maxThreshold)return a;b<d.minThreshold?a=(b-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides:d.settings.shrinkItems&&(a=Math.floor((b+d.settings.slideMargin)/Math.ceil((b+d.settings.slideMargin)/(a+d.settings.slideMargin))-d.settings.slideMargin))}return a},o=function(){var a=1,b=null;return"horizontal"===d.settings.mode&&d.settings.slideWidth>0?d.viewport.width()<d.minThreshold?a=d.settings.minSlides:d.viewport.width()>d.maxThreshold?a=d.settings.maxSlides:(b=d.children.first().width()+d.settings.slideMargin,a=Math.floor((d.viewport.width()+d.settings.slideMargin)/b)):"vertical"===d.settings.mode&&(a=d.settings.minSlides),a},p=function(){var a=0,b=0,c=0;if(d.settings.moveSlides>0)if(d.settings.infiniteLoop)a=Math.ceil(d.children.length/q());else for(;b<d.children.length;)++a,b=c+o(),c+=d.settings.moveSlides<=o()?d.settings.moveSlides:o();else a=Math.ceil(d.children.length/o());return a},q=function(){return d.settings.moveSlides>0&&d.settings.moveSlides<=o()?d.settings.moveSlides:o()},r=function(){var a,b,c;d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop?"horizontal"===d.settings.mode?(b=d.children.last(),a=b.position(),s(-(a.left-(d.viewport.width()-b.outerWidth())),"reset",0)):"vertical"===d.settings.mode&&(c=d.children.length-d.settings.minSlides,a=d.children.eq(c).position(),s(-a.top,"reset",0)):(a=d.children.eq(d.active.index*q()).position(),d.active.index===p()-1&&(d.active.last=!0),void 0!==a&&("horizontal"===d.settings.mode?s(-a.left,"reset",0):"vertical"===d.settings.mode&&s(-a.top,"reset",0)))},s=function(b,c,f,g){var h,i;d.usingCSS?(i="vertical"===d.settings.mode?"translate3d(0, "+b+"px, 0)":"translate3d("+b+"px, 0, 0)",e.css("-"+d.cssPrefix+"-transition-duration",f/1e3+"s"),"slide"===c?(e.css(d.animProp,i),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),E())})):"reset"===c?e.css(d.animProp,i):"ticker"===c&&(e.css("-"+d.cssPrefix+"-transition-timing-function","linear"),e.css(d.animProp,i),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),s(g.resetValue,"reset",0),J())}))):(h={},h[d.animProp]=b,"slide"===c?e.animate(h,f,d.settings.easing,function(){E()}):"reset"===c?e.css(d.animProp,b):"ticker"===c&&e.animate(h,f,"linear",function(){s(g.resetValue,"reset",0),J()}))},t=function(){for(var b="",c="",e=p(),f=0;e>f;f++)c="",d.settings.buildPager&&a.isFunction(d.settings.buildPager)||d.settings.pagerCustom?(c=d.settings.buildPager(f),d.pagerEl.addClass("bx-custom-pager")):(c=f+1,d.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+c+"</a></div>";d.pagerEl.html(b)},u=function(){d.settings.pagerCustom?d.pagerEl=a(d.settings.pagerCustom):(d.pagerEl=a('<div class="bx-pager" />'),d.settings.pagerSelector?a(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),t()),d.pagerEl.on("click touchend","a",C)},v=function(){d.controls.next=a('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=a('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click touchend",y),d.controls.prev.bind("click touchend",z),d.settings.nextSelector&&a(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&a(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=a('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},w=function(){d.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=a('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",A),d.controls.autoEl.on("click",".bx-stop",B),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?a(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),F(d.settings.autoStart?"stop":"start")},x=function(){d.children.each(function(b){var c=a(this).find("img:first").attr("title");void 0!==c&&(""+c).length&&a(this).append('<div class="bx-caption"><span>'+c+"</span></div>")})},y=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToNextSlide())},z=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToPrevSlide())},A=function(a){e.startAuto(),a.preventDefault()},B=function(a){e.stopAuto(),a.preventDefault()},C=function(b){var c,f;b.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),c=a(b.currentTarget),void 0!==c.attr("data-slide-index")&&(f=parseInt(c.attr("data-slide-index")),f!==d.active.index&&e.goToSlide(f)))},D=function(b){var c=d.children.length;return"short"===d.settings.pagerType?(d.settings.maxSlides>1&&(c=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(b+1+d.settings.pagerShortSeparator+c)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(c,d){a(d).find("a").eq(b).addClass("active")}))},E=function(){if(d.settings.infiniteLoop){var a="";0===d.active.index?a=d.children.eq(0).position():d.active.index===p()-1&&d.carousel?a=d.children.eq((p()-1)*q()).position():d.active.index===d.children.length-1&&(a=d.children.eq(d.children.length-1).position()),a&&("horizontal"===d.settings.mode?s(-a.left,"reset",0):"vertical"===d.settings.mode&&s(-a.top,"reset",0))}d.working=!1,d.settings.onSlideAfter.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)},F=function(a){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[a]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+a+")").addClass("active"))},G=function(){1===p()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0===d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index===p()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},H=function(){if(d.settings.autoDelay>0){setTimeout(e.startAuto,d.settings.autoDelay)}else e.startAuto(),a(window).focus(function(){e.startAuto()}).blur(function(){e.stopAuto()});d.settings.autoHover&&e.hover(function(){d.interval&&(e.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(e.startAuto(!0),d.autoPaused=null)})},I=function(){var b,c,f,g,h,i,j,k,l=0;"next"===d.settings.autoDirection?e.append(d.children.clone().addClass("bx-clone")):(e.prepend(d.children.clone().addClass("bx-clone")),b=d.children.first().position(),l="horizontal"===d.settings.mode?-b.left:-b.top),s(l,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&(d.usingCSS?(g="horizontal"===d.settings.mode?4:5,d.viewport.hover(function(){c=e.css("-"+d.cssPrefix+"-transform"),f=parseFloat(c.split(",")[g]),s(f,"reset",0)},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(f))),J(j)})):d.viewport.hover(function(){e.stop()},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(e.css(i)))),J(j)})),J()},J=function(a){var b,c,f,g=a?a:d.settings.speed,h={left:0,top:0},i={left:0,top:0};"next"===d.settings.autoDirection?h=e.find(".bx-clone").first().position():i=d.children.first().position(),b="horizontal"===d.settings.mode?-h.left:-h.top,c="horizontal"===d.settings.mode?-i.left:-i.top,f={resetValue:c},s(b,"ticker",g,f)},K=function(b){var c=a(window),d={top:c.scrollTop(),left:c.scrollLeft()},e=b.offset();return d.right=d.left+c.width(),d.bottom=d.top+c.height(),e.right=e.left+b.outerWidth(),e.bottom=e.top+b.outerHeight(),!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom)},L=function(a){var b=document.activeElement.tagName.toLowerCase(),c="input|textarea",d=new RegExp(b,["i"]),f=d.exec(c);if(null==f&&K(e)){if(39===a.keyCode)return y(a),!1;if(37===a.keyCode)return z(a),!1}},M=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart MSPointerDown pointerdown",N),d.viewport.on("click",".bxslider a",function(a){d.viewport.hasClass("click-disabled")&&(a.preventDefault(),d.viewport.removeClass("click-disabled"))})},N=function(a){if(d.controls.el.addClass("disabled"),d.working)a.preventDefault(),d.controls.el.removeClass("disabled");else{d.touch.originalPos=e.position();var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b];d.touch.start.x=c[0].pageX,d.touch.start.y=c[0].pageY,d.viewport.get(0).setPointerCapture&&(d.pointerId=b.pointerId,d.viewport.get(0).setPointerCapture(d.pointerId)),d.viewport.bind("touchmove MSPointerMove pointermove",P),d.viewport.bind("touchend MSPointerUp pointerup",Q),d.viewport.bind("MSPointerCancel pointercancel",O)}},O=function(a){s(d.touch.originalPos.left,"reset",0),d.controls.el.removeClass("disabled"),d.viewport.unbind("MSPointerCancel pointercancel",O),d.viewport.unbind("touchmove MSPointerMove pointermove",P),d.viewport.unbind("touchend MSPointerUp pointerup",Q),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},P=function(a){var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],e=Math.abs(c[0].pageX-d.touch.start.x),f=Math.abs(c[0].pageY-d.touch.start.y),g=0,h=0;3*e>f&&d.settings.preventDefaultSwipeX?a.preventDefault():3*f>e&&d.settings.preventDefaultSwipeY&&a.preventDefault(),"fade"!==d.settings.mode&&d.settings.oneToOneTouch&&("horizontal"===d.settings.mode?(h=c[0].pageX-d.touch.start.x,g=d.touch.originalPos.left+h):(h=c[0].pageY-d.touch.start.y,g=d.touch.originalPos.top+h),s(g,"reset",0))},Q=function(a){d.viewport.unbind("touchmove MSPointerMove pointermove",P),d.controls.el.removeClass("disabled");var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],f=0,g=0;d.touch.end.x=c[0].pageX,d.touch.end.y=c[0].pageY,"fade"===d.settings.mode?(g=Math.abs(d.touch.start.x-d.touch.end.x),g>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto())):("horizontal"===d.settings.mode?(g=d.touch.end.x-d.touch.start.x,f=d.touch.originalPos.left):(g=d.touch.end.y-d.touch.start.y,f=d.touch.originalPos.top),!d.settings.infiniteLoop&&(0===d.active.index&&g>0||d.active.last&&0>g)?s(f,"reset",200):Math.abs(g)>=d.settings.swipeThreshold?(0>g?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto()):s(f,"reset",200)),d.viewport.unbind("touchend MSPointerUp pointerup",Q),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},R=function(b){if(d.initialized)if(d.working)window.setTimeout(R,10);else{var c=a(window).width(),h=a(window).height();(f!==c||g!==h)&&(f=c,g=h,e.redrawSlider(),d.settings.onSliderResize.call(e,d.active.index))}},S=function(a){var b=o();d.settings.ariaHidden&&!d.settings.ticker&&(d.children.attr("aria-hidden","true"),d.children.slice(a,a+b).attr("aria-hidden","false"))};return e.goToSlide=function(b,c){var f,g,h,i,j=!0,k=0,m={left:0,top:0},n=null;if(!d.working&&d.active.index!==b){if(d.working=!0,d.oldIndex=d.active.index,0>b?d.active.index=p()-1:b>=p()?d.active.index=0:d.active.index=b,j=d.settings.onSlideBefore.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);if("next"===c?d.settings.onSlideNext.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1):"prev"===c&&(d.settings.onSlidePrev.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1)),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);d.active.last=d.active.index>=p()-1,(d.settings.pager||d.settings.pagerCustom)&&D(d.active.index),d.settings.controls&&G(),"fade"===d.settings.mode?(d.settings.adaptiveHeight&&d.viewport.height()!==l()&&d.viewport.animate({height:l()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){a(this).css("zIndex",d.settings.slideZIndex),E()})):(d.settings.adaptiveHeight&&d.viewport.height()!==l()&&d.viewport.animate({height:l()},d.settings.adaptiveHeightSpeed),!d.settings.infiniteLoop&&d.carousel&&d.active.last?"horizontal"===d.settings.mode?(n=d.children.eq(d.children.length-1),m=n.position(),k=d.viewport.width()-n.outerWidth()):(f=d.children.length-d.settings.minSlides,m=d.children.eq(f).position()):d.carousel&&d.active.last&&"prev"===c?(g=1===d.settings.moveSlides?d.settings.maxSlides-q():(p()-1)*q()-(d.children.length-d.settings.maxSlides),n=e.children(".bx-clone").eq(g),m=n.position()):"next"===c&&0===d.active.index?(m=e.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1):b>=0&&(i=b*q(),m=d.children.eq(i).position()),void 0!==typeof m&&(h="horizontal"===d.settings.mode?-(m.left-k):-m.top,s(h,"slide",d.settings.speed))),d.settings.ariaHidden&&S(d.active.index*q())}},e.goToNextSlide=function(){if(d.settings.infiniteLoop||!d.active.last){var a=parseInt(d.active.index)+1;e.goToSlide(a,"next")}},e.goToPrevSlide=function(){if(d.settings.infiniteLoop||0!==d.active.index){var a=parseInt(d.active.index)-1;e.goToSlide(a,"prev")}},e.startAuto=function(a){d.interval||(d.interval=setInterval(function(){"next"===d.settings.autoDirection?e.goToNextSlide():e.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&a!==!0&&F("stop"))},e.stopAuto=function(a){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&a!==!0&&F("start"))},e.getCurrentSlide=function(){return d.active.index},e.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},e.getSlideElement=function(a){return d.children.eq(a)},e.getSlideCount=function(){return d.children.length},e.isWorking=function(){return d.working},e.redrawSlider=function(){d.children.add(e.find(".bx-clone")).outerWidth(n()),d.viewport.css("height",l()),d.settings.ticker||r(),d.active.last&&(d.active.index=p()-1),d.active.index>=p()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(t(),D(d.active.index)),d.settings.ariaHidden&&S(d.active.index*q())},e.destroySlider=function(){d.initialized&&(d.initialized=!1,a(".bx-clone",this).remove(),d.children.each(function(){void 0!==a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!==a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&!d.settings.pagerCustom&&d.pagerEl.remove(),a(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&a(window).unbind("resize",R),d.settings.keyboardEnabled&&a(document).unbind("keydown",L),a(this).removeData("bxSlider"))},e.reloadSlider=function(b){void 0!==b&&(c=b),e.destroySlider(),h(),a(e).data("bxSlider",this)},h(),a(e).data("bxSlider",this),this}}}(jQuery);

/* nouislider - 8.0.2 - 2015-07-06 13:22:09 */
/* http://refreshless.com/nouislider */

!function (a) { if ("function" == typeof define && define.amd) define([], a); else if ("object" == typeof exports) { var b = require("fs"); module.exports = a(), module.exports.css = function () { return b.readFileSync(__dirname + "/nouislider.min.css", "utf8") } } else window.noUiSlider = a() }(function () { "use strict"; function a(a) { return a.filter(function (a) { return this[a] ? !1 : this[a] = !0 }, {}) } function b(a, b) { return Math.round(a / b) * b } function c(a) { var b = a.getBoundingClientRect(), c = a.ownerDocument, d = c.defaultView || c.parentWindow, e = c.documentElement, f = d.pageXOffset; return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f = 0), { top: b.top + d.pageYOffset - e.clientTop, left: b.left + f - e.clientLeft } } function d(a) { return "number" == typeof a && !isNaN(a) && isFinite(a) } function e(a) { var b = Math.pow(10, 7); return Number((Math.round(a * b) / b).toFixed(7)) } function f(a, b, c) { j(a, b), setTimeout(function () { k(a, b) }, c) } function g(a) { return Math.max(Math.min(a, 100), 0) } function h(a) { return Array.isArray(a) ? a : [a] } function i(a) { var b = a.split("."); return b.length > 1 ? b[1].length : 0 } function j(a, b) { a.classList ? a.classList.add(b) : a.className += " " + b } function k(a, b) { a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ") } function l(a, b) { a.classList ? a.classList.contains(b) : new RegExp("(^| )" + b + "( |$)", "gi").test(a.className) } function m(a, b) { return 100 / (b - a) } function n(a, b) { return 100 * b / (a[1] - a[0]) } function o(a, b) { return n(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]) } function p(a, b) { return b * (a[1] - a[0]) / 100 + a[0] } function q(a, b) { for (var c = 1; a >= b[c];) c += 1; return c } function r(a, b, c) { if (c >= a.slice(-1)[0]) return 100; var d, e, f, g, h = q(c, a); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + o([d, e], c) / m(f, g) } function s(a, b, c) { if (c >= 100) return a.slice(-1)[0]; var d, e, f, g, h = q(c, b); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], p([d, e], (c - f) * m(f, g)) } function t(a, c, d, e) { if (100 === e) return e; var f, g, h = q(e, a); return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : c[h - 1] ? a[h - 1] + b(e - a[h - 1], c[h - 1]) : e } function u(a, b, c) { var e; if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider: 'range' contains invalid value."); if (e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !d(e) || !d(b[0])) throw new Error("noUiSlider: 'range' value isn't numeric."); c.xPct.push(e), c.xVal.push(b[0]), e ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]) } function v(a, b, c) { return b ? void (c.xSteps[a] = n([c.xVal[a], c.xVal[a + 1]], b) / m(c.xPct[a], c.xPct[a + 1])) : !0 } function w(a, b, c, d) { this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.snap = b, this.direction = c; var e, f = []; for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]); for (f.sort(function (a, b) { return a[0] - b[0] }), e = 0; e < f.length; e++) u(f[e][1], f[e][0], this); for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) v(e, this.xNumSteps[e], this) } function x(a, b) { if (!d(b)) throw new Error("noUiSlider: 'step' is not numeric."); a.singleStep = b } function y(a, b) { if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider: 'range' is not an object."); if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'."); a.spectrum = new w(b, a.snap, a.dir, a.singleStep) } function z(a, b) { if (b = h(b), !Array.isArray(b) || !b.length || b.length > 2) throw new Error("noUiSlider: 'start' option is incorrect."); a.handles = b.length, a.start = b } function A(a, b) { if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider: 'snap' option must be a boolean.") } function B(a, b) { if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider: 'animate' option must be a boolean.") } function C(a, b) { if ("lower" === b && 1 === a.handles) a.connect = 1; else if ("upper" === b && 1 === a.handles) a.connect = 2; else if (b === !0 && 2 === a.handles) a.connect = 3; else { if (b !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); a.connect = 0 } } function D(a, b) { switch (b) { case "horizontal": a.ort = 0; break; case "vertical": a.ort = 1; break; default: throw new Error("noUiSlider: 'orientation' option is invalid.") } } function E(a, b) { if (!d(b)) throw new Error("noUiSlider: 'margin' option must be numeric."); if (a.margin = a.spectrum.getMargin(b), !a.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.") } function F(a, b) { if (!d(b)) throw new Error("noUiSlider: 'limit' option must be numeric."); if (a.limit = a.spectrum.getMargin(b), !a.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.") } function G(a, b) { switch (b) { case "ltr": a.dir = 0; break; case "rtl": a.dir = 1, a.connect = [0, 2, 1, 3][a.connect]; break; default: throw new Error("noUiSlider: 'direction' option was not recognized.") } } function H(a, b) { if ("string" != typeof b) throw new Error("noUiSlider: 'behaviour' must be a string containing options."); var c = b.indexOf("tap") >= 0, d = b.indexOf("drag") >= 0, e = b.indexOf("fixed") >= 0, f = b.indexOf("snap") >= 0; a.events = { tap: c || f, drag: d, fixed: e, snap: f } } function I(a, b) { if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0; throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.") } function J(a) { var b, c = { margin: 0, limit: 0, animate: !0, format: U }; b = { step: { r: !1, t: x }, start: { r: !0, t: z }, connect: { r: !0, t: C }, direction: { r: !0, t: G }, snap: { r: !1, t: A }, animate: { r: !1, t: B }, range: { r: !0, t: y }, orientation: { r: !1, t: D }, margin: { r: !1, t: E }, limit: { r: !1, t: F }, behaviour: { r: !0, t: H }, format: { r: !1, t: I } }; var d = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal" }; return Object.keys(d).forEach(function (b) { void 0 === a[b] && (a[b] = d[b]) }), Object.keys(b).forEach(function (d) { var e = b[d]; if (void 0 === a[d]) { if (e.r) throw new Error("noUiSlider: '" + d + "' is required."); return !0 } e.t(c, a[d]) }), c.pips = a.pips, c.style = c.ort ? "top" : "left", c } function K(a, b, c) { var d = a + b[0], e = a + b[1]; return c ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [g(d), g(e)]) : [d, e] } function L(a) { a.preventDefault(); var b, c, d = 0 === a.type.indexOf("touch"), e = 0 === a.type.indexOf("mouse"), f = 0 === a.type.indexOf("pointer"), g = a; return 0 === a.type.indexOf("MSPointer") && (f = !0), d && (b = a.changedTouches[0].pageX, c = a.changedTouches[0].pageY), (e || f) && (b = a.clientX + window.pageXOffset, c = a.clientY + window.pageYOffset), g.points = [b, c], g.cursor = e || f, g } function M(a, b) { var c = document.createElement("div"), d = document.createElement("div"), e = ["-lower", "-upper"]; return a && e.reverse(), j(d, T[3]), j(d, T[3] + e[b]), j(c, T[2]), c.appendChild(d), c } function N(a, b, c) { switch (a) { case 1: j(b, T[7]), j(c[0], T[6]); break; case 3: j(c[1], T[6]); case 2: j(c[0], T[7]); case 0: j(b, T[6]) } } function O(a, b, c) { var d, e = []; for (d = 0; a > d; d += 1) e.push(c.appendChild(M(b, d))); return e } function P(a, b, c) { j(c, T[0]), j(c, T[8 + a]), j(c, T[4 + b]); var d = document.createElement("div"); return j(d, T[1]), c.appendChild(d), d } function Q(b, d) { function e(a, b, c) { if ("range" === a || "steps" === a) return M.xVal; if ("count" === a) { var d, e = 100 / (b - 1), f = 0; for (b = []; (d = f++ * e) <= 100;) b.push(d); a = "positions" } return "positions" === a ? b.map(function (a) { return M.fromStepping(c ? M.getStep(a) : a) }) : "values" === a ? c ? b.map(function (a) { return M.fromStepping(M.getStep(M.toStepping(a))) }) : b : void 0 } function m(b, c, d) { var e = M.direction, f = {}, g = M.xVal[0], h = M.xVal[M.xVal.length - 1], i = !1, j = !1, k = 0; return M.direction = 0, d = a(d.slice().sort(function (a, b) { return a - b })), d[0] !== g && (d.unshift(g), i = !0), d[d.length - 1] !== h && (d.push(h), j = !0), d.forEach(function (a, e) { var g, h, l, m, n, o, p, q, r, s, t = a, u = d[e + 1]; if ("steps" === c && (g = M.xNumSteps[e]), g || (g = u - t), t !== !1 && void 0 !== u) for (h = t; u >= h; h += g) { for (m = M.toStepping(h), n = m - k, q = n / b, r = Math.round(q), s = n / r, l = 1; r >= l; l += 1) o = k + l * s, f[o.toFixed(5)] = ["x", 0]; p = d.indexOf(h) > -1 ? 1 : "steps" === c ? 2 : 0, !e && i && (p = 0), h === u && j || (f[m.toFixed(5)] = [h, p]), k = m } }), M.direction = e, f } function n(a, b, c) { function e(a) { return ["-normal", "-large", "-sub"][a] } function f(a, b, c) { return 'class="' + b + " " + b + "-" + h + " " + b + e(c[1]) + '" style="' + d.style + ": " + a + '%"' } function g(a, d) { M.direction && (a = 100 - a), d[1] = d[1] && b ? b(d[0], d[1]) : d[1], i.innerHTML += "<div " + f(a, "noUi-marker", d) + "></div>", d[1] && (i.innerHTML += "<div " + f(a, "noUi-value", d) + ">" + c.to(d[0]) + "</div>") } var h = ["horizontal", "vertical"][d.ort], i = document.createElement("div"); return j(i, "noUi-pips"), j(i, "noUi-pips-" + h), Object.keys(a).forEach(function (b) { g(b, a[b]) }), i } function o(a) { var b = a.mode, c = a.density || 1, d = a.filter || !1, f = a.values || !1, g = a.stepped || !1, h = e(b, f, g), i = m(c, b, h), j = a.format || { to: Math.round }; return I.appendChild(n(i, d, j)) } function p() { return G["offset" + ["Width", "Height"][d.ort]] } function q(a, b) { void 0 !== b && (b = Math.abs(b - d.dir)), Object.keys(R).forEach(function (c) { var d = c.split(".")[0]; a === d && R[c].forEach(function (a) { a(h(B()), b, r(Array.prototype.slice.call(Q))) }) }) } function r(a) { return 1 === a.length ? a[0] : d.dir ? a.reverse() : a } function s(a, b, c, e) { var f = function (b) { return I.hasAttribute("disabled") ? !1 : l(I, T[14]) ? !1 : (b = L(b), a === S.start && void 0 !== b.buttons && b.buttons > 1 ? !1 : (b.calcPoint = b.points[d.ort], void c(b, e))) }, g = []; return a.split(" ").forEach(function (a) { b.addEventListener(a, f, !1), g.push([a, f]) }), g } function t(a, b) { var c, d, e = b.handles || H, f = !1, g = 100 * (a.calcPoint - b.start) / p(), h = e[0] === H[0] ? 0 : 1; if (c = K(g, b.positions, e.length > 1), f = y(e[0], c[h], 1 === e.length), e.length > 1) { if (f = y(e[1], c[h ? 0 : 1], !1) || f) for (d = 0; d < b.handles.length; d++) q("slide", d) } else f && q("slide", h) } function u(a, b) { var c = G.getElementsByClassName(T[15]), d = b.handles[0] === H[0] ? 0 : 1; c.length && k(c[0], T[15]), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener)); var e = document.documentElement; e.noUiListeners.forEach(function (a) { e.removeEventListener(a[0], a[1]) }), k(I, T[12]), q("set", d), q("change", d) } function v(a, b) { var c = document.documentElement; if (1 === b.handles.length && (j(b.handles[0].children[0], T[15]), b.handles[0].hasAttribute("disabled"))) return !1; a.stopPropagation(); var d = s(S.move, c, t, { start: a.calcPoint, handles: b.handles, positions: [J[0], J[H.length - 1]] }), e = s(S.end, c, u, { handles: b.handles }); if (c.noUiListeners = d.concat(e), a.cursor) { document.body.style.cursor = getComputedStyle(a.target).cursor, H.length > 1 && j(I, T[12]); var f = function () { return !1 }; document.body.noUiListener = f, document.body.addEventListener("selectstart", f, !1) } } function w(a) { var b, e, g = a.calcPoint, h = 0; return a.stopPropagation(), H.forEach(function (a) { h += c(a)[d.style] }), b = h / 2 > g || 1 === H.length ? 0 : 1, g -= c(G)[d.style], e = 100 * g / p(), d.events.snap || f(I, T[14], 300), H[b].hasAttribute("disabled") ? !1 : (y(H[b], e), q("slide", b), q("set", b), q("change", b), void (d.events.snap && v(a, { handles: [H[h]] }))) } function x(a) { var b, c; if (!a.fixed) for (b = 0; b < H.length; b += 1) s(S.start, H[b].children[0], v, { handles: [H[b]] }); a.tap && s(S.start, G, w, { handles: H }), a.drag && (c = [G.getElementsByClassName(T[7])[0]], j(c[0], T[10]), a.fixed && c.push(H[c[0] === H[0] ? 1 : 0].children[0]), c.forEach(function (a) { s(S.start, a, v, { handles: H }) })) } function y(a, b, c) { var e = a !== H[0] ? 1 : 0, f = J[0] + d.margin, h = J[1] - d.margin, i = J[0] + d.limit, l = J[1] - d.limit; return H.length > 1 && (b = e ? Math.max(b, f) : Math.min(b, h)), c !== !1 && d.limit && H.length > 1 && (b = e ? Math.min(b, i) : Math.max(b, l)), b = M.getStep(b), b = g(parseFloat(b.toFixed(7))), b === J[e] ? !1 : (a.style[d.style] = b + "%", a.previousSibling || (k(a, T[17]), b > 50 && j(a, T[17])), J[e] = b, Q[e] = M.fromStepping(b), q("update", e), !0) } function z(a, b) { var c, e, f; for (d.limit && (a += 1), c = 0; a > c; c += 1) e = c % 2, f = b[e], null !== f && f !== !1 && ("number" == typeof f && (f = String(f)), f = d.format.from(f), (f === !1 || isNaN(f) || y(H[e], M.toStepping(f), c === 3 - d.dir) === !1) && q("update", e)) } function A(a) { var b, c, e = h(a); for (d.dir && d.handles > 1 && e.reverse(), d.animate && -1 !== J[0] && f(I, T[14], 300), b = H.length > 1 ? 3 : 1, 1 === e.length && (b = 1), z(b, e), c = 0; c < H.length; c++) q("set", c) } function B() { var a, b = []; for (a = 0; a < d.handles; a += 1) b[a] = d.format.to(Q[a]); return r(b) } function C() { T.forEach(function (a) { a && k(I, a) }), I.innerHTML = "", delete I.noUiSlider } function D() { var a = J.map(function (a, b) { var c = M.getApplicableStep(a), d = i(String(c[2])), e = Q[b], f = 100 === a ? null : c[2], g = Number((e - c[2]).toFixed(d)), h = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1; return [h, f] }); return r(a) } function E(a, b) { R[a] = R[a] || [], R[a].push(b), "update" === a.split(".")[0] && H.forEach(function (a, b) { q("update", b) }) } function F(a) { var b = a.split(".")[0], c = a.substring(b.length); Object.keys(R).forEach(function (a) { var d = a.split(".")[0], e = a.substring(d.length); b && b !== d || c && c !== e || delete R[a] }) } var G, H, I = b, J = [-1, -1], M = d.spectrum, Q = [], R = {}; if (I.noUiSlider) throw new Error("Slider was already initialized."); return G = P(d.dir, d.ort, I), H = O(d.handles, d.dir, G), N(d.connect, I, H), x(d.events), d.pips && o(d.pips), { destroy: C, steps: D, on: E, off: F, get: B, set: A } } function R(a, b) { if (!a.nodeName) throw new Error("noUiSlider.create requires a single element."); var c = J(b, a), d = Q(a, c); d.set(c.start), a.noUiSlider = d } var S = window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" }, T = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"]; w.prototype.getMargin = function (a) { return 2 === this.xPct.length ? n(this.xVal, a) : !1 }, w.prototype.toStepping = function (a) { return a = r(this.xVal, this.xPct, a), this.direction && (a = 100 - a), a }, w.prototype.fromStepping = function (a) { return this.direction && (a = 100 - a), e(s(this.xVal, this.xPct, a)) }, w.prototype.getStep = function (a) { return this.direction && (a = 100 - a), a = t(this.xPct, this.xSteps, this.snap, a), this.direction && (a = 100 - a), a }, w.prototype.getApplicableStep = function (a) { var b = q(a, this.xPct), c = 100 === a ? 2 : 1; return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]] }, w.prototype.convert = function (a) { return this.getStep(this.toStepping(a)) }; var U = { to: function (a) { return a.toFixed(2) }, from: Number }; return { create: R } });

//Numeric Stepper
//Licensed under MIT
// https://github.com/xFlatlinex/Numeric-Stepper
!function (e) { e.fn.stepper = function (n) { var t = { type: "float", floatPrecission: 2, ui: !0, allowWheel: !0, allowArrows: !0, arrowStep: 1, wheelStep: 1, limit: [null, null], preventWheelAcceleration: !0, incrementButton: "&blacktriangle;", decrementButton: "&blacktriangledown;", onStep: null, onWheel: null, onArrow: null, onButton: null, onKeyUp: null }; return e(this).each(function () { function o(e) { e.preventDefault(); var n, t = e.originalEvent; if (t.wheelDelta ? n = t.wheelDelta / 120 : t.detail && (n = -t.detail / 3), n) { i.preventWheelAcceleration && (n = 0 > n ? -1 : 1); var o = r(i.wheelStep * n); a("Wheel", [o, n > 0]) } } function r(e) { c.val() || c.val(0); var n = "int" == i.type ? parseInt : parseFloat, t = l(n(c.val()) + e); return c.val(t), a("Step", [t, e > 0]), t } function a(e, n) { var t = i["on" + e]; "function" == typeof t && t.apply(c, n) } function l(e) { var n = i.limit[0], t = i.limit[1]; return null !== n && n > e ? e = n : null !== t && e > t && (e = t), p(e) } function p(e, n) { "undefined" == typeof n && (n = i.floatPrecission); var t = Math.pow(10, n); return e = Math.round(e * t) / t } var u = e(this).data(); delete u.stepper; var i = e.extend({}, t, n, u), c = e(this), f = e('<div class="stepper-wrap"/>'); if (!c.data("stepper")) { if (f.insertAfter(c), c.appendTo(f), c.stepper = function () { return { limit: l, decimalRound: p, onStep: function (e) { i.onStep = e }, onWheel: function (e) { i.onWheel = e }, onArrow: function (e) { i.onArrow = e }, onButton: function (e) { i.onButton = e }, onKeyUp: function (e) { i.onKeyUp = e } } }(), c.data("stepper", c.stepper), i.ui) { var s, w = e('<div class="stepper-btn-wrap"/>').appendTo(f), v = e('<a class="button stepper-btn-up">' + i.incrementButton + "</a>").appendTo(w), d = e('<a class="button stepper-btn-dwn">' + i.decrementButton + "</a>").appendTo(w); v.mousedown(function (e) { e.preventDefault(); var n = r(i.arrowStep); a("Button", [n, !0]) }), d.mousedown(function (e) { e.preventDefault(); var n = r(-i.arrowStep); a("Button", [n, !1]) }), e(document).mouseup(function () { clearInterval(s) }) } i.allowWheel && (f.bind("DOMMouseScroll", o), f.bind("mousewheel", o)), f.keydown(function (n) { var t = n.which, o = c.val(); if (i.allowArrows) switch (t) { case 38: o = r(i.arrowStep), a("Arrow", [o, !0]); break; case 40: o = r(-i.arrowStep), a("Arrow", [o, !1]) } (37 > t && t > 40 || t > 57 && 91 > t || t > 105 && 110 != t && 190 != t) && n.preventDefault(), "float" == i.type && -1 != e.inArray(t, [110, 190]) && -1 != o.indexOf(".") && n.preventDefault() }).keyup(function () { a("KeyUp", [c.val()]) }) } }) } }(jQuery);

/*
 * jquery.lightbox.js v1.3
 * https://github.com/duncanmcdougall/Responsive-Lightbox
 * Copyright 2015 Duncan McDougall and other contributors; @license Creative Commons Attribution 2.5
 */
!function (a) { "use strict"; a.fn.lightbox = function (b) { var c = { margin: 50, nav: !0, blur: !0, minSize: 0 }, d = { items: [], lightbox: null, image: null, current: null, locked: !1, caption: null, init: function (b) { d.items = b; var e = "lightbox-" + Math.floor(1e5 * Math.random() + 1); d.lightbox || (d.lightbox = a("body").find(".bodyGlobalLightbox"), 0 === d.lightbox.length && (a("body").append('<div id="' + e + '" class="lightbox bodyGlobalLightbox" style="display:none;"><a href="#" class="lightbox__close lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--prev lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--next lightbox__button"></a><div href="#" class="lightbox__caption"><p></p></div></div>'), d.lightbox = a("#" + e)), d.caption = a(".lightbox__caption", d.lightbox)), d.items.length > 1 && c.nav ? a(".lightbox__nav", d.lightbox).show() : a(".lightbox__nav", d.lightbox).hide(), d.bindEvents() }, loadImage: function () { c.blur && a("body").addClass("blurred"), a("img", d.lightbox).remove(), d.lightbox.fadeIn("fast").append('<span class="lightbox__loading"></span>'); var b = a('<img src="' + a(d.current).attr("href") + '" draggable="false">'); a(b).load(function () { a(".lightbox__loading").remove(), d.lightbox.append(b), d.image = a("img", d.lightbox).hide(), d.resizeImage(), d.setCaption() }) }, setCaption: function () { var b = a(d.current).data("caption"); b && b.length > 0 ? (d.caption.fadeIn(), a("p", d.caption).text(b)) : d.caption.hide() }, resizeImage: function () { var b, e, f, g, h; e = a(window).height() - c.margin, f = a(window).outerWidth(!0) - c.margin, d.image.width("").height(""), g = d.image.height(), h = d.image.width(), h > f && (b = f / h, h = f, g = Math.round(g * b)), g > e && (b = e / g, g = e, h = Math.round(h * b)), d.image.width(h).height(g).css({ top: (a(window).height() - d.image.outerHeight()) / 2 + "px", left: (a(window).width() - d.image.outerWidth()) / 2 + "px" }).show(), d.locked = !1 }, getCurrentIndex: function () { return a.inArray(d.current, d.items) }, next: function () { return d.locked ? !1 : (d.locked = !0, void (d.getCurrentIndex() >= d.items.length - 1 ? a(d.items[0]).click() : a(d.items[d.getCurrentIndex() + 1]).click())) }, previous: function () { return d.locked ? !1 : (d.locked = !0, void (d.getCurrentIndex() <= 0 ? a(d.items[d.items.length - 1]).click() : a(d.items[d.getCurrentIndex() - 1]).click())) }, bindEvents: function () { a(d.items).click(function (b) { if (!d.lightbox.is(":visible") && (a(window).width() < c.minSize || a(window).height() < c.minSize)) return void a(this).attr("target", "_blank"); var e = a(this)[0]; b.preventDefault(), d.current = e, d.loadImage(), a(document).on("keydown", function (a) { 27 === a.keyCode && d.close(), 39 === a.keyCode && d.next(), 37 === a.keyCode && d.previous() }) }), d.lightbox.on("click", function (a) { this === a.target && d.close() }), a(d.lightbox).on("click", ".lightbox__nav--prev", function () { return d.previous(), !1 }), a(d.lightbox).on("click", ".lightbox__nav--next", function () { return d.next(), !1 }), a(d.lightbox).on("click", ".lightbox__close", function () { return d.close(), !1 }), a(window).resize(function () { d.image && d.resizeImage() }) }, close: function () { a(document).off("keydown"), a(d.lightbox).fadeOut("fast"), a("body").removeClass("blurred") } }; a.extend(c, b), d.init(this) } }(jQuery);

/*
 * Miniscroll small plugin of scrollbar desktop and mobile
 * @author Roger Luiz <http://rogerluizm.com.br/>
 *					  <http://miniscroll.rogerluizm.com.br>
 * @copyright (c) 2011, 2012 <http://rogerluizm.com.br/>
 *
 */
!function (t, s, i) { var e = { touchEvents: "ontouchstart" in s.documentElement }, h = function (t, s) { this.type = "", this.is = "static", this.target = this.getElement(t), this.container, this.tracker, this.thumb, this.thumb_delta = o(0, 0), this.thumb_pos = o(0, 0), this.touch = o(0, 0), this.settings = s, this.percent, this.keypos_thumb = o(0, 0), this.scrolling = !1, this.preventScrolling = !1, this.turnOffWheel = !0, this.initializing() }, o = function (t, s) { return this instanceof o ? (this.x = t ? t : 0, this.y = s ? s : 0, this) : new o(t, s) }; h[i].initializing = function () { this.buildScrollbar(), this.buildScrollbarTracker(), this.buildScrolbarThumb(), this.settings.isKeyEvent = "undefined" == typeof this.settings.isKeyEvent ? !0 : this.settings.isKeyEvent, this.turnOffWheel = "undefined" == typeof this.settings.turnOffWheel ? this.turnOffWheel : this.settings.turnOffWheel, this.settings.isKeyEvent && this.addKeyBoardEvent(), e.touchEvents ? this.setupTouchEvent() : this.setupEventHandler(); var s = this; t.setInterval(function () { s.update() }, 10) }, h[i].buildScrollbar = function () { var t = this.target.id ? this.target.id : this.target.className; this.container = this.create(this.target, "div", { "class": "miniscroll-container", id: "miniscroll-" + t }); var s = this.settings.scrollbarSize ? this.settings.scrollbarSize : this.offset(this.target).height, i = this.settings.scrollbarSize ? this.settings.scrollbarSize : this.offset(this.target).width, e = this.offset(this.target).left + (this.offset(this.target).width - this.settings.size), h = this.offset(this.target).top + (this.offset(this.target).height - this.settings.size); this.css(this.container, { position: "absolute", visibility: "hidden", width: ("x" === this.settings.axis ? i : this.settings.size) + "px", height: ("y" === this.settings.axis ? s : this.settings.size) + "px", top: ("y" === this.settings.axis ? this.offset(this.target).top : h) + "px", left: ("x" === this.settings.axis ? this.offset(this.target).left : e) + "px", zIndex: this.getZindex(this.target) }) }, h[i].buildScrollbarTracker = function () { this.tracker = this.create(this.container, "div", { "class": "miniscroll-tracker" }); var t = "x" === this.settings.axis ? this.offset(this.container).width : this.settings.size, s = "y" === this.settings.axis ? this.offset(this.container).height : this.settings.size; this.css(this.tracker, { width: t + "px", height: s + "px", backgroundColor: this.settings.trackerColor ? this.settings.trackerColor : "#067f41" }) }, h[i].buildScrolbarThumb = function () { this.thumb = this.create(this.container, "div", { "class": "miniscroll-thumb" }); var t = o(this.offset(this.container).width * this.offset(this.tracker).width / this.target.scrollWidth, this.offset(this.container).height * this.offset(this.tracker).height / this.target.scrollHeight), t = o(this.offset(this.container).width * this.offset(this.tracker).width / this.target.scrollWidth, this.offset(this.container).height * this.offset(this.tracker).height / this.target.scrollHeight), s = o(void 0 === this.settings.sizethumb || "auto" === this.settings.sizethumb ? t.x : this.settings.sizethumb, void 0 === this.settings.sizethumb || "auto" === this.settings.sizethumb ? t.y : this.settings.sizethumb); this.css(this.thumb, { position: "absolute", top: "0px", left: "0px", width: ("x" === this.settings.axis ? s.x : this.settings.size) + "px", height: ("y" === this.settings.axis ? s.y : this.settings.size) + "px", backgroundColor: this.settings.thumbColor ? this.settings.thumbColor : "#2AD47D" }) }, h[i].setupEventHandler = function () { this.bind(this.thumb, "mousedown", this.onScrollThumbPress), this.bind(this.tracker, "mousedown", this.onScrollTrackerPress), this.turnOffWheel && this.bind(this.target, "mousewheel", this.onScrollThumbWheel) }, h[i].setupTouchEvent = function () { this.bind(this.target, "touchstart", this.onScrollTouchStart), this.bind(this.target, "touchmove", this.onScrollTouchMove) }, h[i].updateContainerPosition = function () { this.is = this.getCss(this.target, "position"), "relative" === this.is || "absolute" === this.is ? "y" === this.settings.axis ? (this.container.style.top = this.target.scrollTop + "px", this.container.style.left = this.offset(this.target).width - this.settings.size + "px") : (this.container.style.top = this.offset(this.target).height - this.settings.size + "px", this.container.style.left = this.target.scrollLeft + "px") : "y" === this.settings.axis ? this.container.style.top = this.offset(this.target).top + "px" : this.container.style.left = this.offset(this.target).left + "px" }, h[i].setScrubPosition = function (t) { var s = this.offset(this.container).width, i = this.offset(this.container).height, e = this.offset(this.thumb).width, h = this.offset(this.thumb).height; this.thumb_pos = o(Math.round((s - e) * t), Math.round((i - h) * t)), "y" === this.settings.axis ? this.thumb.style.top = Math.round(this.thumb_pos.y) + "px" : this.thumb.style.left = Math.round(this.thumb_pos.x) + "px" }, h[i].addKeyBoardEvent = function () { this.target.setAttribute("tabindex", "-1"), this.css(this.target, { outline: "none" }), this.bind(this.target, "focus", function (t, i) { !("onkeydown" in i) && "onkeydown" in s && (i = s), this.bind(i, "keydown", function (t) { if (t.target == this.target) { var s, i = t.keyCode || t.which, e = { left: 37, up: 38, right: 39, down: 40 }, h = !0; switch (i) { case e.up: 0 !== this.percent && (this.keypos_thumb.y -= 10); break; case e.down: 1 !== this.percent && (this.keypos_thumb.y += 10); break; case e.left: 0 !== this.percent && (this.keypos_thumb.x -= 10); break; case e.right: 1 !== this.percent && (this.keypos_thumb.x += 10); break; default: h = !1 } "y" === this.settings.axis ? (this.percent = this.target.scrollTop / (this.target.scrollHeight - this.target.offsetHeight), this.setScrubPosition(this.percent), this.target.scrollTop = this.keypos_thumb.y, s = [38, 40]) : (this.percent = this.target.scrollLeft / (this.target.scrollWidth - this.target.offsetWidth), this.setScrubPosition(this.percent), this.target.scrollLeft = this.keypos_thumb.x, s = [37, 39]), this.preventScrolling = this.percent >= 1 && i == s[1] || this.percent <= 0 && i == s[0] ? !0 : !1, !this.preventScrolling && h && this.stopEvent(t), this.updateContainerPosition() } }) }), this.bind(this.target, "click", function (t, i) { if (t.target == this.target) { try { s.activeElement = i } catch (e) { } i.focus() } }) }, h[i].onScrollTouchStart = function (t) { var s = t.touches[0]; this.scrolling = !0, this.touch = o(s.pageX, s.pageY), this.bind(this.target, "touchend", this.onScrollTouchEnd) }, h[i].onScrollTouchMove = function (t) { var s = t.touches[0]; t.preventDefault(); var i = o(this.touch.x - s.pageX, this.touch.y - s.pageY); this.touch = o(s.pageX, s.pageY), "y" === this.settings.axis ? (this.percent = this.target.scrollTop / (this.target.scrollHeight - this.target.offsetHeight), this.setScrubPosition(this.percent), this.target.scrollTop = this.target.scrollTop + i.y) : (this.percent = this.target.scrollLeft / (this.target.scrollWidth - this.target.offsetWidth), this.setScrubPosition(this.percent), this.target.scrollLeft = this.target.scrollLeft + i.x), this.updateContainerPosition() }, h[i].onScrollTouchEnd = function () { this.scrolling = !1, this.unbind(this.target, "touchend", this.onScrollTouchEnd) }, h[i].onScrollThumbPress = function (i) { i = i ? i : t.event, this.stopEvent(i), this.scrolling = !0, this.thumb_delta = o(this.thumb_pos.x - this.mouse(i).x, this.thumb_pos.y - this.mouse(i).y), this.bind(s, "mousemove", this.onScrollThumbUpdate), this.bind(s, "mouseup", this.onScrollThumbRelease), this.updateContainerPosition() }, h[i].onScrollThumbUpdate = function (s) { return s = s ? s : t.event, this.stopEvent(s), this.scrolling ? (this.thumb_pos = o(this.mouse(s).x + this.thumb_delta.x, this.mouse(s).y + this.thumb_delta.y), this.thumb_pos = o(Math.max(0, Math.min(this.container.offsetWidth - this.thumb.offsetWidth, this.thumb_pos.x)), Math.max(0, Math.min(this.container.offsetHeight - this.thumb.offsetHeight, this.thumb_pos.y))), this.percent = o(this.thumb_pos.x / (this.container.offsetWidth - this.thumb.offsetWidth), this.thumb_pos.y / (this.container.offsetHeight - this.thumb.offsetHeight)), this.percent = o(Math.max(0, Math.min(1, this.percent.x)), Math.max(0, Math.min(1, this.percent.y))), "y" === this.settings.axis ? (this.thumb.style.top = Math.round(this.thumb_pos.y) + "px", this.target.scrollTop = Math.round((this.target.scrollHeight - this.target.offsetHeight) * this.percent.y)) : (this.thumb.style.left = Math.round(this.thumb_pos.x) + "px", this.target.scrollLeft = Math.round((this.target.scrollWidth - this.target.offsetWidth) * this.percent.x)), this.keypos_thumb = o(this.target.scrollLeft, this.target.scrollTop), void this.updateContainerPosition()) : !1 }, h[i].onScrollThumbWheel = function (i) { i = i ? i : t.event; var e, h = i || t.event, n = ([].slice.call(arguments, 1), 0), r = 0, a = 0; if (h.wheelDelta && (n = h.wheelDelta / 120), h.detail && (n = -h.detail / 3), a = n, r = n, h.deltaMode && (a = -h.deltaY / 3, r = -h.deltaX / 3), void 0 !== h.axis && h.axis === h.HORIZONTAL_AXIS && (a = 0, r = -1 * n), void 0 !== h.wheelDeltaY && (a = h.wheelDeltaY / 120), void 0 !== h.wheelDeltaX && (r = -1 * h.wheelDeltaX / 120), "y" === this.settings.axis ? (this.percent = this.target.scrollTop / (this.target.scrollHeight - this.target.offsetHeight), this.setScrubPosition(this.percent), this.target.scrollTop = Math.round(this.target.scrollTop - 10 * a), e = a) : (this.percent = this.target.scrollLeft / (this.target.scrollWidth - this.target.offsetWidth), this.setScrubPosition(this.percent), this.target.scrollLeft = Math.round(this.target.scrollLeft - 10 * r), e = r), this.preventScrolling = this.percent >= 1 && 0 > e || this.percent <= 0 && e > 0 || 0 == e ? !0 : !1, this.preventScrolling || this.stopEvent(i), this.keypos_thumb = o(this.target.scrollLeft, this.target.scrollTop), s.createEvent) { var l = s.createEvent("HTMLEvents"); l.initEvent("scroll", !0, !1), this.target.dispatchEvent(l) } else { var l = s.createEventObject(); this.target.fireEvent("onscroll", l) } this.updateContainerPosition() }, h[i].onScrollThumbRelease = function (i) { i = i ? i : t.event, this.stopEvent(i), this.scrolling = !1, this.unbind(s, "mousemove", this.onScrollThumbUpdate), this.unbind(s, "mouseup", this.onScrollThumbRelease) }, h[i].onScrollTrackerPress = function (t) { var s = this.mouse(t).y - this.offset(this.container).top; this.scrolling = !0, this.scrollTo(s) }, h[i].scrollTo = function (t) { var s = Math.max(0, Math.min(this.offset(this.target).height - this.offset(this.thumb).height, t)); "y" === this.settings.axis && (this.thumb_pos.y = s, this.thumb.style.top = Math.round(this.thumb_pos.y) + "px", this.target.scrollTop = s, this.scrolling = !1) }, h[i].update = function () { "y" === this.settings.axis ? this.target.scrollHeight === this.offset(this.target).height ? this.css(this.container, { visibility: "hidden" }) : this.css(this.container, { visibility: "visible" }) : this.target.scrollWidth === this.offset(this.target).width ? this.css(this.container, { visibility: "hidden" }) : this.css(this.container, { visibility: "visible" }); var t = this.settings.scrollbarSize ? this.settings.scrollbarSize : this.offset(this.target).height, s = this.settings.scrollbarSize ? this.settings.scrollbarSize : this.offset(this.target).width, i = this.offset(this.target).left + (this.offset(this.target).width - this.settings.size), e = this.offset(this.target).top + (this.offset(this.target).height - this.settings.size); this.css(this.container, { width: ("x" === this.settings.axis ? s : this.settings.size) + "px", height: ("y" === this.settings.axis ? t : this.settings.size) + "px", top: ("y" === this.settings.axis ? this.offset(this.target).top : e) + "px", left: ("x" === this.settings.axis ? this.offset(this.target).left : i) + "px" }); var h = "x" === this.settings.axis ? this.offset(this.container).width : this.settings.size, n = "y" === this.settings.axis ? this.offset(this.container).height : this.settings.size; this.css(this.tracker, { width: h + "px", height: n + "px" }); var r = o(this.offset(this.container).width * this.offset(this.tracker).width / this.target.scrollWidth, this.offset(this.container).height * this.offset(this.tracker).height / this.target.scrollHeight), a = o(void 0 === this.settings.sizethumb || "auto" === this.settings.sizethumb ? r.x : this.settings.sizethumb, void 0 === this.settings.sizethumb || "auto" === this.settings.sizethumb ? r.y : this.settings.sizethumb); this.css(this.thumb, { width: ("x" === this.settings.axis ? a.x : this.settings.size) + "px", height: ("y" === this.settings.axis ? a.y : this.settings.size) + "px" }), "y" === this.settings.axis ? (this.percent = this.target.scrollTop / (this.target.scrollHeight - this.target.offsetHeight), this.scrolling || this.setScrubPosition(this.percent)) : (this.percent = this.target.scrollLeft / (this.target.scrollWidth - this.target.offsetWidth), this.scrolling || this.setScrubPosition(this.percent)), this.updateContainerPosition() }, h[i].getElement = function (i) { var e; if (i === t || i === s || "body" === i || "body, html" === i) return s.body; if ("string" == typeof i || i instanceof String) { var e, h = i.replace(/^\s+/, "").replace(/\s+$/, ""); if (h.indexOf("#") > -1) { this.type = "id"; var o = h.split("#"); e = s.getElementById(o[1]) } if (h.indexOf(".") > -1) { this.type = "class"; for (var o = h.split("."), n = s.getElementsByTagName("*"), r = n.length, a = 0; r > a; a++) n[a].className && n[a].className.match(new RegExp("(^|\\s)" + o[1] + "(\\s|$)")) && (e = n[a]) } return e } return i }, h[i].create = function (t, i, e) { var h = s.createElement(i); if (e) { for (var o in e) e.hasOwnProperty(o) && h.setAttribute(o, e[o]); t.appendChild(h) } return h }, h[i].css = function (t, s) { for (var i in s) "opacity" === i ? (t.style.filter = "alpha(opacity=" + 100 * s[i] + ")", t.style.KhtmlOpacity = s[i], t.style.MozOpacity = s[i], t.style.opacity = s[i]) : t.style[i] = s[i] }, h[i].getCss = function (i, e) { var h; return h = t.getComputedStyle ? t.getComputedStyle(i).getPropertyValue(e) : s.defaultView && s.defaultView.getComputedStyle ? s.defaultView.getComputedStyle.getPropertyValue(e) : i.currentStyle ? i.currentStyle[e] : i.style[e] }, h[i].offset = function (t) { var s = t.offsetTop, i = t.offsetLeft, e = t.offsetHeight; "undefined" == typeof t.offsetHeight && (e = parseInt(this.getCss(t, "height"))); var h = t.offsetWidth; return "undefined" == typeof t.offsetWidth && (h = parseInt(this.getCss(t, "width"))), { top: s, left: i, width: h, height: e } }, h[i].getZindex = function (t) { for (var s = 0, i = 0, e = 0, h = t.getElementsByTagName("*"), o = 0; o < h.length; o++) e = this.getCss(h[o], "position"), h[o].style.position = "relative", i = Number(this.getCss(h[o], "z-index")), h[o].style.position = e, i > s && (s = i + 1); return s }, h[i].mouse = function (t) { var i = 0, e = 0; return t.pageX || t.pageY ? (i = t.pageX, e = t.pageY) : (t.clientX || t.clientY) && (i = t.clientX + s.body.scrollLeft + s.documentElement.scrollLeft, e = t.clientY + s.body.scrollTop + s.documentElement.scrollTop), { x: i, y: e } }, h[i].bind = function (t, i, e) { var h = "onwheel" in s.createElement("div") ? "wheel" : void 0 !== s.onmousewheel ? "mousewheel" : "DOMMouseScroll", o = this; t.addEventListener ? "mousewheel" === i ? t.addEventListener(h, function (t) { e.call(o, t, this) }, !1) : t.addEventListener(i, function (t) { e.call(o, t, this) }, !1) : t.attachEvent ? t.attachEvent("on" + i, function (t) { e.call(o, t, this) }) : t["on" + i] = function (t) { e.call(o, t, this) } }, h[i].unbind = function (t, i, e) { var h = "onwheel" in s.createElement("div") ? "wheel" : void 0 !== s.onmousewheel ? "mousewheel" : "DOMMouseScroll"; t.addEventListener ? "mousewheel" === i ? t.removeEventListener(h, function (t) { e.call(_this, t, this) }, !1) : t.removeEventListener(i, function (t) { e.call(_this, t, this) }, !1) : t.attachEvent ? t.detachEvent("on" + i, function (t) { e.call(_this, t, this) }) : t["on" + i] = null }, h[i].stopEvent = function (t) { t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1 }, t.Miniscroll = h }(window, document, "prototype");

/**
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function (a, b, c) { "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c() }(this, "verge", function () { function a() { return { width: k(), height: l() } } function b(a, b) { var c = {}; return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c } function c(a, c) { return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1 } function d(b) { b = null == b ? a() : 1 === b.nodeType ? c(b) : b; var d = b.height, e = b.width; return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d } var e = {}, f = "undefined" != typeof window && window, g = "undefined" != typeof document && document, h = g && g.documentElement, i = f.matchMedia || f.msMatchMedia, j = i ? function (a) { return !!i.call(f, a).matches } : function () { return !1 }, k = e.viewportW = function () { var a = h.clientWidth, b = f.innerWidth; return b > a ? b : a }, l = e.viewportH = function () { var a = h.clientHeight, b = f.innerHeight; return b > a ? b : a }; return e.mq = j, e.matchMedia = i ? function () { return i.apply(f, arguments) } : function () { return {} }, e.viewport = a, e.scrollX = function () { return f.pageXOffset || h.scrollLeft }, e.scrollY = function () { return f.pageYOffset || h.scrollTop }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) { var d = c(a, b); return !!d && d.right >= 0 && d.left <= k() }, e.inY = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.top <= l() }, e.inViewport = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k() }, e });
jQuery.extend(verge);
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
// Страница Новости - ломаная сетка
// Скроллер
// Показать / скрыть фильтры в каталоге
// Переключатель языка в хидере
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
    // Страница Новости - ломаная сетка - ВАЖНО - ПОДКЛЮЧИ ДОП.СКРИПТЫ В ФУТЕРЕ СТРАНИЦЫ!!!
    //---------------------------------------------------------------------------------------
    function initMasonry() {
        var $list = $('.js-masonry');
        $list.imagesLoaded(function () {
            $list.masonry({
                itemSelector: '.news-list__item'
            });
        });
    }
    if ($('.js-masonry').length) { initMasonry() }


    //
    // Скроллер
    //---------------------------------------------------------------------------------------
    function initScroller() {
        new Miniscroll('.js-scroller', {
            axis: 'y',
            size: 10,
            sizethumb: 36,
            onScroll: function (percent, offset) { }
        });
        
        new Miniscroll('.js-scroll', {
            axis: 'y',
            size: 10,
            sizethumb: 36,
            onScroll: function (percent, offset) { }
        });
        
    }
    if ($('.js-scroller, .js-scroll').length) { initScroller() }

    //
    // Показать / скрыть фильтры в каталоге
    //---------------------------------------------------------------------------------------
    function initFilter() {
        var $filter = $('.js-filter'),
            $target = $filter.find('.b-filter__inner'),
            $btn = $filter.find('.js-filter-toggle'),
            BREAKPOINT = 992,
            winW,
            method = {};

        method.showFilter = function () {
            $btn.addClass('active');
            $target.addClass('active').show();
        }

        method.hideFilter = function () {
            $btn.removeClass('active');
            $target.removeClass('active').hide();
        }

        method.checkSize = function () {
            winW = verge.viewportW();
            if (winW >= BREAKPOINT) {
                method.showFilter();
            } else {
                method.hideFilter();
            }
        }

        method.checkSize();//если сразу открыли на десктопе - добавим фильтру и кнопке активные классы (т.к. на мобильных фильтр скрыт по умолчанию)

        $filter.on('click', '.js-filter-toggle', function () {//переключение по клику на кнопку
            if ($(this).hasClass('active')) {
                method.hideFilter();
            } else {
                method.showFilter();
            }
        });
    }
    if ($('.js-filter').length) { initFilter() }

    //
    // Переключатель языка в хидере
    //---------------------------------------------------------------------------------------
    var langSwitcherInit = (function () {
        var $switcher=$('.js-lang'),
            $btn = $switcher.find('.b-lang__link--current').parent('li'),
            $list=$switcher.find('.b-lang__list'),
            BREAKPOINT = 992,
            winW,
            method = {};

        method.hoverSwitcherOn = function () {
            $list.stop(true, true).fadeIn('fast');
        }

        method.hoverSwitcherOff = function () {
            $list.stop(true, true).fadeOut('slow');
        }


        method.showSwitcher = function () {
            $btn.addClass('active');
            $list.slideDown();
            $switcher.on({
                mouseleave: function () {
                    $body.bind('click', method.hideSwitcher);
                },
                mouseenter: function () {
                    $body.unbind('click', method.hideSwitcher);
                }
            });
        }

        method.hideSwitcher = function () {
            $btn.removeClass('active');
            $list.hide();
            $body.unbind('click', method.hideSwitcher);
        }

        method.checkWinSize = function () {
            winW = verge.viewportW();
            if (winW >= BREAKPOINT) {
                $btn.removeClass('active');
                $list.hide();
            }
        }

        method.checkWinSize();


        $btn.on({
            mouseenter: function () {
                if (winW >= BREAKPOINT) {
                    method.hoverSwitcherOn();
                }
            },
            mouseleave: function () {
                if (winW >= BREAKPOINT) {
                    method.hoverSwitcherOff();
                }
            }
        });

        $btn.on('click', function () {
            if (winW < BREAKPOINT) {
                if ($btn.hasClass('active')) {
                    method.hideSwitcher();
                } else {
                    method.showSwitcher();
                }
            }
        });

        $window.on('resize', function () {
            setTimeout(method.checkWinSize, 500);
        });

    })();


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
