$(document).ready(function() {
	
//Scroll magic part
var controller = new ScrollMagic.Controller();
var tween = TweenMax.from(".teaser__tile i", 3,{ opacity: 0, scale: 0, rotate: 45});
var scene = new ScrollMagic.Scene({
		triggerElement: ".teaser__tiles",
		offset: 200,
		duration: 300
	}).setTween(tween).addIndicators().addTo(controller);

var tl = TweenMax.staggerFrom(".header__main img", 1,{opacity: 0, delay: 2}, 0.2);
var menu = TweenMax.staggerFrom(".header__topline li", 0.5, {y:-100, delay: 1}, 0.25)

var tween_form = TweenMax.from(".join__form", 1,{opacity: 0, x: -300});
var scene = new ScrollMagic.Scene({
	triggerElement: ".join__form",
	offset: -50
}).setTween(tween_form).addIndicators().addTo(controller);


var footer = TweenMax.from(".footer", 3,{opacity: 0});
var scene = new ScrollMagic.Scene({
	triggerElement: ".join__form",
	offset: 100,
}).setTween(footer).addIndicators().addTo(controller);

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
// Отмена перетаскивания изображений
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
// Preloader
$(window).load(function() { 
	$(".loader_Inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

