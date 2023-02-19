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

		
	const items = document.querySelectorAll('.steps__item');

		items.forEach(item => {

			item.addEventListener('mouseenter',  function () {
				this.classList.toggle('active');
				if(window.screen.width <= 576) {
					const heightChildElem = window.getComputedStyle(item.querySelector('.steps__hover-item')).height;
					this.style.alignItems = 'flex-start';

          this.style.height = +heightChildElem.slice(0, -2) + 70 + 'px';
          this.style.transform = 'translateY(-10px)';
          this.style.transition = 'transform .4s';
				}
			});

			item.addEventListener('mouseleave', function () {

				this.classList.toggle('active');
				if(window.screen.width <= 576) {
					this.style.height = '50px';
					this.style.alignItems = 'center';
          this.style.transform = 'translateY(0px)';
          this.style.transition = 'transform .4s';
				}
			});
	});
  
});