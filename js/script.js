window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        })
    })
})

console.log(`
Score: 141 / 150
вёрстка валидная (10/10)
вёрстка семантическая (16/20): использовал footer, header, main, nav, section, h1-h3
для оформления СV используются css-стили (10/10)
контент размещается в блоке, который горизонтально центрируется на странице (10/10)
вёрстка адаптивная (10/10)
есть адаптивное бургер-меню (10/10)
на странице СV присутствует изображение (10/10)
контакты для связи и перечень навыков оформлены в виде списка ul > li (10/10)
CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (10/10)
CV содержит пример вашего кода (10/10)
CV содержит изображения-ссылки на выполненные вами проекты (5/10)
CV выполнено на английском языке (10/10)
выполнены требования к Pull Request (10/10)
дизайн, оформление, качество выполнения CV не ниже чем в примерах CV (10/10)`);