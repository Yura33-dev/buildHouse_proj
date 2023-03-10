window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.promo-gallery__container'),
          layout = document.querySelector('.layout');
    
    let div;

    container.addEventListener('click', function (e) {
        if(e.target) {
            const image = e.target.closest('.promo-gallery__item').firstElementChild;

            div = document.createElement('div');
            div.classList.add('promo-gallery__full-item');
            div.style.top = `${window.pageYOffset}px`;
            div.addEventListener('click', () => closePhoto());
            
            const img = document.createElement('img');
            img.src = image.getAttribute('src');
            img.alt = image.getAttribute('alt');

            div.appendChild(img);
            document.body.appendChild(div);

            layout.style.display = 'block';
        }
    });

    const closePhoto =  () => {
        div.style.animation = 'fadeOut .2s';
        setTimeout(() => div.remove(), 180);
        layout.style.display = 'none';
    };
    
    layout.addEventListener('click', (e) => {
        if(e.target) {
            closePhoto();
        }
    });
});