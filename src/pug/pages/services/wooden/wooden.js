import './../../../components/subServicesPages/subServicesPages.scss';
import './../../../../main.js';
import './../../../components/promo-services/_promo-services.js';

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.promo-services__header > h2').textContent = 'Также мы делаем:';
    document.querySelector('a.promo-services__link').textContent = 'Смотреть другие услуги';

});