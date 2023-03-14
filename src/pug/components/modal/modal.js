'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const layout = document.querySelector('.layout'),
          modalClose = layout.querySelectorAll('[data-close]'),
          scroll = calcScroll();

    const openModal = (modal) => {
        const modalConsult = layout.querySelector(modal);

        layout.style.display = 'block';
        layout.style.animation = 'fadeIn .2s';

        modalConsult.style.display = 'block';
        modalConsult.style.animation = 'fadeIn .2s';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    };

    const closeModal = () => {
        const modals = document.querySelectorAll('[data-modal]');
        modals.forEach(modal => modal.style.display = 'none');
        layout.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.marginRight = `0px`;

        //работа с формой, если юзер закрыл окно благодарности сам - форма возвращается (футер)
        //here is form section. If user closed window of grateful by yourself, form will come back immediately (especially for footer)
        document.querySelectorAll('form').forEach(form => {
            if(form.getAttribute('data-active') === 'true') {
                form.style.display = 'block';
                form.style.animation = 'fadeIn .2s'
                form.setAttribute('data-active', false)
            }
        });
        //
    };

    const bindButtons = (trigger, modalTitle) => {
        const btn = document.querySelector(trigger);

        btn.addEventListener('click', (e) => {
            if(e.target) {
                openModal(modalTitle);
            }
        });
    };
    try {
        bindButtons('.btn_smooth', '.popup');
    } catch(e) {}


    modalClose.forEach(close => {
        close.addEventListener('click', (e) => {
            if(e.target) {
                e.target.parentElement.style.animation = 'fadeOut .15s';
                layout.style.animation = 'fadeOut .15s';
                setTimeout(() => closeModal(), 130);
                // closeModal();
            }
        });
    });

    function calcScroll () {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    
});



    


