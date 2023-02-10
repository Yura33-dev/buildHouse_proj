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

  const stepsItems = document.querySelectorAll('.steps__item');
 

    stepsItems.forEach(item => {

      // item.lastElementChild.addEventListener('mouseenter', function (e) {
      //   const target = e.target;
 
      //     if(target) {
      //      target.firstElementChild.classList.add('show-flex');
      //     }
      // });

      // item.lastElementChild.addEventListener('mouseleave', function (e) {
      //   const target = e.target;
 
      //     if(target) {
      //       console.log(e.relatedTarget);
      //       if (e.relatedTarget.closest('.steps__hover-item')) {
      //         e.relatedTarget.style.display = 'flex';
      //       } else {
      //         target.firstElementChild.classList.remove('show-flex');
      //       }
      //     }
      // });

      

      // item.addEventListener('mouseout', function (event) {
      //   const target = event.target;
      //   const relTarget = event.relatedTarget;

      //   if(!relTarget.classList.contains('.steps__hover-item') ||
      //   !relTarget.parentElement.classList.contains('.steps__hover-item') ) {

      //     setTimeout(() => {
      //       target.parentElement.firstElementChild.classList.remove('show-flex');
      //     }, 600);
      //   }
              
      //   // console.log(relTarget);
      // });

    });

    // wrapper.addEventListener('mouseover', function (e) {
    //   const target = e.target;

    //   if (target.parentElement.classList.contains('steps__main')) {
    //     this.parentElement.firstElementChild.classList.toggle('show-flex');
    //   }

  //   item.addEventListener('mouseout', (e) => {
  //     const target = e.target;

  //     if (target.parentElement.classList.contains('steps__main')) {
  //       showItem.classList.toggle('show-flex');
  //     }
    // });

  // }); 


});