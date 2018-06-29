let slider_images = document.querySelectorAll('.slide'),
	arrow_left = document.querySelector('#arrow-left'),
	arrow_right = document.querySelector('#arrow-right'),
	current = 0;


// убираем все изображения
function reset() {
	for (let i = 0; i < slider_images.length; i++) {
		slider_images[i].style.display = 'none';
	}
}

// создание слайдера
function startSlide(){
	reset();
	slider_images[0].style.display = 'block';
}

//Слайд вправо

function slideRight(){
	reset();
	slider_images[current + 1].style.display = 'block';
	current++;
}


//слайд влево
function slideLeft() {
	reset();
	slider_images[current - 1].style.display = 'block';
	current--;
}

//предыдущий слайд
arrow_left.addEventListener('click', function(){
	if (current === 0) {
		current = slider_images.length;
	}
	slideLeft();
});

//следующий слайд
arrow_right.addEventListener('click', function(){
	if (current === slider_images.length - 1) {
		current = -1;
	}
	slideRight();
});



startSlide();
