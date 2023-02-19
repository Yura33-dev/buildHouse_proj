// imports

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //call modules
    
    //

  const swiper = new Swiper('.swiper', {
      // Optional parameters
      slidesPerView: 3,
      spaceBetween: 60,
      direction: 'horizontal',
      loop: false,
      allowTouchMove: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },

      breakpoints: {
        // when window width is >= 320px
        1: {
          slidesPerView: 1,
          spaceBetween: 60
        },
        // when window width is >= 640px
        769: {
          slidesPerView: 2,
          spaceBetween: 60
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 60
        }
      }
  });

		
	const items = document.querySelectorAll('.steps__main');

	if(window.screen.width > 576) {
		items.forEach(item => {

			item.addEventListener('mouseenter',  function () {
				this.parentNode.classList.toggle('active');
			});

			item.addEventListener('mouseleave', function () {
				this.parentNode.classList.toggle('active');
			});
		});
	} else {
		items.forEach(item => {

			item.addEventListener('click',  function () {

				if(this.parentNode.classList.contains('active')) {

					this.parentNode.classList.toggle('active');
					this.parentNode.style.height = '50px';
					this.parentNode.style.alignItems = 'center';
					this.parentNode.style.transform = 'translateY(0px)';
					this.parentNode.style.transition = 'transform .4s';
				} else {
					this.parentNode.classList.toggle('active');
					const heightChildElem = window.getComputedStyle(item.nextElementSibling).height;

					this.parentNode.style.alignItems = 'flex-start';

					this.parentNode.style.height = +heightChildElem.slice(0, -2) + 70 + 'px';
					this.parentNode.style.transform = 'translateY(-10px)';
					this.parentNode.style.transition = 'transform .4s';
				}
			});
		});
	}


});