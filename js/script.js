//Меню

var menu = $('.side-menu');
var burger = $('.hamburger-hill');
// var exit = $('.head-nav-close');
var links = $(".side-menu").find("a")

burger.on('click', function(event) {
	// menu.removeClass('burger-settings');
	// menu.css({'display':'flex'});
	menu.toggleClass('side-menu-active');
	event.preventDefault();
});

$(document).mouseup(function (e){
	if (!menu.is(e.target) && menu.has(e.target).length === 0) {
		// menu.css({'display':'flex'});
		menu.removeClass('side-menu-active');
		event.preventDefault();
	}
});


links.click(function() {
	menu.removeClass('side-menu-active');
});


//навигация

$(document).ready(function() {
	$(".navpoints-inner-in a").mPageScroll2id({
		offset : 120
	});
	$(".side-menu a").mPageScroll2id({
		offset : 80
	});
	$(".button-up").mPageScroll2id();
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.button-up').css('display', 'block');
		} else {
			$('.button-up').css('display', 'none');
		}
	});
});

// условия и охрана труда

var pfi = $(".protocol-files-item");
var pp20 = $(".protocol .protocol-years-20");

pfi.not(":first").hide();
pp20.click(function() {
	pp20.removeClass("blue").eq($(this).index()).addClass("blue");
	pfi.hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("blue");

// переключение продукции 

var p_desi = $(".product-description-item");
var p_pt = $(".product .product-type-tab");

p_desi.not(":first").hide();
p_pt.click(function() {
	p_pt.removeClass("blue").eq($(this).index()).addClass("blue");
	p_desi.hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("blue");