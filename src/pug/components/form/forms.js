import { postData } from "./_data";

const forms = () => {

    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          layout = document.querySelector('.layout'),
          grateful = layout.querySelector('.grateful'),
          popup = layout.querySelector('.popup'),
          popupLayout = popup.querySelector('.popup__layout'),
          popupThanks = popup.querySelector('.popup__thanks');

    const modals = document.querySelectorAll('[data-modal]');

    const messageform = {
        'success': 'Спасибо за Ваше обращение. <br>Оно успешно отправлено.',
        'failure': 'При отправке формы произошла ошибка.<br> Пожалуйста, позвоните нам по телефону:',
        'addSuccess': 'Наш специалист перезвонит вам в близжайшее время!',
        'addFailure': '+38 (098) 501 - 14 - 14',

        'spinner': 'assets/image/icons/forms/spinner.svg'
    };

    forms.forEach(form => {

        form.addEventListener('submit', function (e) {
            if (e.target) {

                e.preventDefault();

                const spinnerImg = document.createElement('div');
                spinnerImg.classList.add('spinner');
                // spinnerImg.style.marginTop = '50px';
                let spinnerColor;
                form.classList.contains('footer__fields') ? spinnerColor = '#ffffff' : spinnerColor = '#23324C';
                
                spinnerImg.innerHTML = `
                    <?xml version="1.0" encoding="utf-8"?>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="${spinnerColor}" stroke-width="7" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.639344262295082s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                `;
                if(form.classList.contains('popup__fields')) { // форма с модального окна form from modal window (.popup)
                    popupLayout.style.display = 'block';

                    // spinnerImg.style.position = 'relative';
                    // spinnerImg.style.zIndex = '2';

                    //form.style.animation = 'fadeOut .2s';
                    form.setAttribute('data-active', true);
                    setTimeout(() => {
                        form.parentNode.appendChild(spinnerImg);
                        //form.style.display = 'none';
                    }, 190);
                }
                else { // (форма с футера) form from footer
                    spinnerImg.style.marginTop = '50px';
                    form.style.animation = 'fadeOut .2s';
                    form.setAttribute('data-active', true);
                    setTimeout(() => {
                        form.parentNode.appendChild(spinnerImg);
                        form.style.display = 'none';
                    }, 190);
                }
                

                const token = '5811485739:AAEfMBvi8eEbBdCbwPnVVA3Bf12NX_KFSnI';
                const chatID = '-1001786328558';
                const api = `https://api.telegram.org/bot${ token }/sendMessage`;

                const message = `
                    *Заявка с сайта!*\n
                *Имя клиента:* ${form.name.value}
                *Телефон клиента:* ${form.phone.value}
                *Почта клиента:* ${form.mail.value}
                `;
                const ourData = {
                    text: message,
                    chat_id: chatID,
                    parse_mode: 'Markdown'
                };


                postData(api, ourData)
                .then(() => {
                    setTimeout(() => {

                        if(form.classList.contains('popup__fields')) { // форма с модального окна form from modal window (.popup)
                            popupLayout.style.display = 'none';

                            popupThanks.innerHTML = `${messageform.success}`;
                            popupThanks.classList.add('popup__succesful');
                            popupThanks.style.display = 'flex';
                            popupThanks.style.animation = 'fadeIn .2s';

                            // form.style.animation = 'fadeIn .2s';
                            // form.style.display = 'block';
                        }
                        else {
                            layout.style.display = 'block';
                            layout.style.animation = 'fadeIn .2s'

                            modals.forEach(modal => modal.style.display = 'none');

                            grateful.querySelector('.grateful__main-message').innerHTML = `${messageform.success}`;
                            grateful.querySelector('.grateful__message').textContent = messageform.addSuccess;
                            grateful.style.animation = 'fadeIn .2s';
                            grateful.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                    }, 2000);
                })
                .catch(() => {
                    setTimeout(() => {

                        if(form.classList.contains('popup__fields')) { // форма с модального окна form from modal window (.popup)
                            popupLayout.style.display = 'none';
                            popupThanks.innerHTML = `${messageform.failure} <br> ${messageform.addFailure}`;
                            popupThanks.classList.add('popup__error');
                            // popup.style.display = 'block';
                            // popup.style.animation = 'fadeIn .2s';
                        } 
                        else {
                            layout.style.display = 'block';
                            grateful.querySelector('.grateful__main-message').innerHTML = `${messageform.failure}`;
                            grateful.querySelector('.grateful__message').textContent = messageform.addFailure;
                            grateful.style.animation = 'fadeIn .2s';
                            grateful.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                        
                    }, 2000);
                })
                .finally(() => {

                    setTimeout(() => {
                        if(layout.getAttribute('data-openedPhoto') === 'false') {
                            console.log('проверка дисплея выполнилась вот сейчас');
                            layout.style.animation = 'fadeOut .2s';
                            setTimeout(() => layout.style.display = 'none', 190);
                            document.body.style.overflow = 'auto';
                            document.body.style.marginRight = '0px';
                        }
                    }, 8000);

                    setTimeout(() => {
                        spinnerImg.remove();
                        inputs.forEach(input => input.value = input.value = "");
                    }, 2000);

                    if(form.classList.contains('popup__fields')) {
                        setTimeout(() => {
                            popupThanks.style.animation = 'fadeOut .2s';
                            setTimeout(() => popupThanks.style.display = 'none', 190);
                        }, 5000);
                        setTimeout(() => {
                            popup.style.animation = 'fadeOut .2s';
                            setTimeout(() => popup.style.display = 'none', 190);
                        }, 8000);
                    } else {
                        setTimeout(() => {
                            grateful.style.animation = 'fadeOut .2s';
                            setTimeout(() => grateful.style.display = 'none', 190);
                            form.style.display = 'block';
                            form.style.animation = 'fadeIn .2s'
                            form.setAttribute('data-active', false);
                        }, 8000);
                    }
                });
            }
        });
    });
};

forms();