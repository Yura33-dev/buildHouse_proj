window.addEventListener('DOMContentLoaded', () => {
    let service = [
        {
            link: './wooden.html',
            image: './assets/image/services/wooden.png',
            head: 'Деревянные дома'
        },
        {
            link: './summer.html',
            image: './assets/image/services/summer.png',
            head: 'Беседки'
        },
        {
            link: './a-frame.html',
            image: './assets/image/services/a-frame.png',
            head: 'A-дома'
        },
        {
            link: './module.html',
            image: './assets/image/services/modular.png',
            head: 'Модульные дома'
        },
        {
            link: './frame-mono.html',
            image: './assets/image/services/modular.png',
            head: 'Каркасно- <br>монолитные дома'
        },
        {
            link: './frame.html',
            image: './assets/image/services/modular.png',
            head: 'Каркасные дома'
        },
        {
            link: './shopping-mall.html',
            image: './assets/image/services/modular.png',
            head: 'Торговые центры'
        },
        {
            link: './mobile-offices.html',
            image: './assets/image/services/modular.png',
            head: 'Мобильные офисы'
        },
        {
            link: './concrete.html',
            image: './assets/image/services/modular.png',
            head: 'Железобетонные<br>конструкции'
        },
    ];

    const hideCards = () => {
        const wrapper = document.querySelector('.promo-services__content');
        wrapper.querySelectorAll('.promo-services__item').forEach(item => {
            item.remove();
        });
    }

    hideCards();

    const showCards = () => {

        const shuffle = (array) => {
            let m = array.length, t, i;
        
            // Пока есть элементы для перемешивания
            while (m) {
        
            // Взять оставшийся элемент
            i = Math.floor(Math.random() * m--);
        
            // И поменять его местами с текущим элементом
            t = array[m];
            array[m] = array[i];
            array[i] = t;
            }
        
            return array;
        }

        let arr = shuffle(service);

        for (let i = 0; i < 4; i++) {
            let item = document.createElement('div');
            item.classList.add('promo-services__item');
            item.innerHTML = `
            
                <a href = '${arr[i].link}'>
                    <img src = '${arr[i].image}' alt = 'test'>
                    <div class = 'promo-services__item-header'>
                        <h3>${arr[i].head}</h3>
                    </div>
                </a>
            
            `;
            document.querySelector('.promo-services__content').appendChild(item);
        }
    }

    showCards();
});








