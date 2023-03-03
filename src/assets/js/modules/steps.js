const stepsSection = (trigger) => {
    const items = document.querySelectorAll(trigger);

    if(window.screen.width > 768) {
		items.forEach(item => {

			item.addEventListener('mouseenter',  function () {
				this.parentNode.classList.toggle('active');
			});

			item.addEventListener('mouseleave', function () {
				this.parentNode.classList.toggle('active');
			});
		});
	} else {
		document.querySelector('.steps__item_decorize').remove();
		items.forEach((item, i) => {

			item.addEventListener('click',  function () {
				if(this.parentElement.getAttribute('data-order') !== '6') {
					

					if(this.parentElement.classList.contains('active')) {
						this.parentElement.classList.remove('active');
						try {
							this.parentElement.nextElementSibling.style.marginTop = '0px';
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
}

export default stepsSection;