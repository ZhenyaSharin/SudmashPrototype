// let slider_images = document.querySelectorAll('.slide'),
// 	arrow_left = document.querySelector('#arrow-left'),
// 	arrow_right = document.querySelector('#arrow-right'),
// 	current = 0;


// // убираем все изображения
// function reset() {
// 	for (let i = 0; i < slider_images.length; i++) {
// 		slider_images[i].style.display = 'none';
// 	}
// }
// // создание слайдера
// function startSlide(){
// 	reset();
// 	slider_images[0].style.display = 'block';
// }

// //Слайд вправо

// function slideRight(){
// 	reset();
// 	slider_images[current + 1].style.display = 'block';
// 	current++;
// }


// //слайд влево
// function slideLeft() {
// 	reset();
// 	slider_images[current - 1].style.display = 'block';
// 	current--;
// }

// //предыдущий слайд
// arrow_left.addEventListener('click', function(){
// 	if (current === 0) {
// 		current = slider_images.length;
// 	}
// 	slideLeft();
// });

// //следующий слайд
// arrow_right.addEventListener('click', function(){
// 	if (current === slider_images.length - 1) {
// 		current = -1;
// 	}
// 	slideRight();
// });



// startSlide();

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
		offset : 80
	});
	$(".side-menu a").mPageScroll2id({
		offset : 40
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


// var blue_p = $(".protocol-years-20-blue");
// var standart_p = $(".protocol-years-20");
// var ye_p = $(".years-p");

// standart_p.on('click', function(event) {
// 	ye_p.toggleClass("protocol-years-20-blue");
// 	event.preventDefault();
// });


$(".protocol-files-item").not(":first").hide();
$(".protocol .protocol-years-20").click(function() {
	$(".protocol .protocol-years-20").removeClass("blue").eq($(this).index()).addClass("blue");
	$(".protocol-files-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("blue");

