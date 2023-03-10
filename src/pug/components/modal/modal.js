const layout = document.querySelector('.layout'),
      close = layout.querySelector('.modal__close');

const modals = document.querySelectorAll('[data-modal]')

close.addEventListener('click', (e) => {
    if(e.target) {
        modals.forEach(item => {
            item.style.display = 'none';
        });
        layout.style.display = 'none';
        document.body.style.overflow = 'auto';

        document.querySelectorAll('form').forEach(form => {
            if(form.getAttribute('data-active') === 'true') {
                form.style.display = 'block';
                form.style.animation = 'fadeIn .2s'
                form.setAttribute('data-active', false)
            }
        });
    }
});


