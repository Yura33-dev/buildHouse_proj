import './../../../main.js';
import './about.scss';

import './../../components/swiper/swiper-bundle.min.scss';
import Swiper from './../../components/swiper/swiper-bundle.min.js';

window.addEventListener('DOMContentLoaded', () => {
    console.log('Hello from About page!');

	//  Swiper
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
});