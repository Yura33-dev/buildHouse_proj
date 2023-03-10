import { postData } from "./_data";

const forms = () => {

    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          layout = document.querySelector('.layout'),
          grateful = document.querySelector('.modal__grateful');

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

                //мб какие-то проверки

                const spinnerImg = document.createElement('div');
                spinnerImg.innerHTML = `
                    <?xml version="1.0" encoding="utf-8"?>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="7" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.639344262295082s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                `;
                spinnerImg.style.marginTop = '50px';

                form.style.animation = 'fadeOut .2s';
                form.setAttribute('data-active', true);

                setTimeout(() => {
                    form.style.display = 'none';
                    form.parentNode.appendChild(spinnerImg);
                }, 199);

                const token = '5811485739:AAEfMBvi8eEbBdCbwPnVVA3Bf12NX_KFSnI';
                const chatID = '-1001786328558';
                const api = `https://api.telegram.org/bot${ token }/sendMessage`;

                const message = `
                    <b>Заявка с сайта!</b>\n
                    <b>Имя клиента:</b> ${this.name.value}
                    <b>Телефон клиента:</b> ${this.phone.value}
                    <b>Почта клиента:</b> ${this.mail.value}
                `;
                const ourData = {
                    text: message,
                    chat_id: chatID,
                    parse_mode: 'html'
                };

                postData(api, ourData)
                .then(() => {
                    setTimeout(() => {
                        spinnerImg.remove();
                        layout.style.display = 'block';
                        grateful.querySelector('.modal__main-message').innerHTML = `${messageform.success}`;
                        grateful.querySelector('.modal__message').textContent = messageform.addSuccess;
                        grateful.style.display = 'flex';
                        document.body.style.overflow = 'hidden';
                    }, 2000);
                })
                .catch(() => {
                    setTimeout(() => {
                        spinnerImg.remove();
                        layout.style.display = 'block';
                        grateful.querySelector('.modal__main-message').innerHTML = `${messageform.failure}`;
                        grateful.querySelector('.modal__message').textContent = messageform.addFailure;
                        grateful.style.display = 'flex';
                        document.body.style.overflow = 'hidden';
                    }, 2000);
                })
                .finally(() => {
                    inputs.forEach(input => input.value = input.value = "");

                    setTimeout(() => {
                        grateful.style.display = 'none';
                        layout.style.display = 'none';
                        document.body.style.overflow = 'auto';

                        form.style.display = 'block';
                        form.style.animation = 'fadeIn .2s'
                        form.setAttribute('data-active', false);
                    }, 8000);
                });
            }
        });
    });
};

forms();