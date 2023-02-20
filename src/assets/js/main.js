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

	if(window.screen.width > 768) {
		items.forEach(item => {

			item.addEventListener('mouseenter',  function () {
				this.parentNode.classList.toggle('active');
			});

			item.addEventListener('mouseleave', function () {
				this.parentNode.classList.toggle('active');
			});
		});
	} 
	else {

		document.querySelector('.steps__item_decorize').remove();
		items.forEach((item, i) => {

			item.addEventListener('touchend',  function () {
				if(this.parentElement.getAttribute('data-order') !== '6') {
					

					if(this.parentElement.classList.contains('active')) {
						this.parentElement.classList.remove('active');
						try {
							this.parentElement.nextElementSibling.style.marginTop = '0px';
							// this.parentElement.nextElementSibling.classList.add('mt_20');
						} catch(e) {}
						
					}
					else {

						items.forEach((inner) => {
							inner.parentElement.classList.remove('active');
							try {
								inner.parentElement.nextElementSibling.style.marginTop = '0px';
							} catch(e) {}
							
						});
						
						const heightHoverElem = window.getComputedStyle(this.lastElementChild).height;
						try {
							if(i === 4) {
								this.parentElement.nextElementSibling.style.transition = 'margin-top .5s';
							} else {
								this.parentElement.nextElementSibling.style.transition = 'margin-top .2s';
							}
							this.parentElement.nextElementSibling.style.marginTop = +heightHoverElem.slice(0, -2) + 10 + 'px';
						} catch (e){}
						
						this.parentElement.classList.add('active');

					}
				}
				else {
					if(this.parentElement.classList.contains('active')) {

						this.parentElement.closest('.steps').style.transition = 'padding-bottom .3s';
						this.parentElement.closest('.steps').style.paddingBottom = '84px';
						this.parentElement.classList.remove('active');
					} 
					else {

						items.forEach((inner) => {
							inner.parentElement.classList.remove('active');
							try {
								inner.parentElement.nextElementSibling.style.marginTop = '0px';
							} catch(e) {}
							
						});
						
						const heightHoverElem = window.getComputedStyle(this.lastElementChild).height;
						this.parentElement.closest('.steps').style.paddingBottom = +heightHoverElem.slice(0,-2) + 84 + 'px';
						this.parentElement.classList.add('active');
					}
					
				}
			});
		});
	}


});