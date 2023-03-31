(function () {
    const iceCreams = [
        '<div class="card__ice-cream"><img class="ice-cream__img" src="./img/tastes/strawberry-ice-cream.png" alt="strawberry ice cream"> <h3 class="ice-cream__name">1Strawberry Gem</h3> <p class="ice-cream__description">fruity and fresh</p> <p class="ice-cream__price"><span class="price__numbers">$5</span> / ball</p> </div>',
        '<div class="card__ice-cream"><img class="ice-cream__img" src="./img/tastes/choco-ice-cream.png" alt="choco ice cream"> <h3 class="ice-cream__name">2Choco & Hazelnut</h3> <p class="ice-cream__description">rich sweet taste</p> <p class="ice-cream__price"><span class="price__numbers">$5 </span> / ball</p> </div>',
        '<div class="card__ice-cream"><img class="ice-cream__img" src="./img/tastes/blueberry-ice-cream.png" alt="blueberry ice cream"><h3 class="ice-cream__name">3Blue Paradise</h3><p class="ice-cream__description">sour and fruity</p><p class="ice-cream__price"><span class="price__numbers">$5</span> / ball</p></div>',
        '<div class="card__ice-cream"><img class="ice-cream__img" src="./img/tastes/mongo-ice-cream.png" alt="mongo ice cream"><h3 class="ice-cream__name">4Mango Dream</h3><p class="ice-cream__description">classic tropic taste</p><p class="ice-cream__price"><span class="price__numbers">$5</span> / ball</p></div>',
        '<div class="card__ice-cream"><img class="ice-cream__img" src="./img/tastes/cream-nutty-flavor.png" alt="cream nutty flavor"><h3 class="ice-cream__name">5Pistachio Heaven</h3><p class="ice-cream__description">cream nutty flavor</p><p class="ice-cream__price"><span class="price__numbers">$5</span> / ball</p></div>'
    ];

    const carousel = document.querySelector('.tastes__cards');
    const slideContainer = carousel.querySelector('.tastes__cards .cards__carousel');

    let currentSlide = 0;

    function renderIceCream(iceCreams) {
        let n = 0;
        slideContainer.innerHTML = iceCreams[currentSlide];
        if (window.innerWidth > 610) {
            const secondSlide = currentSlide + 1 >= iceCreams.length ? n++ : currentSlide + 1;
            slideContainer.innerHTML += iceCreams[secondSlide];
        }
        if (window.innerWidth > 880) {
            const thirdSlide = currentSlide + 2 >= iceCreams.length ? n++ : currentSlide + 2;
            slideContainer.innerHTML += iceCreams[thirdSlide];
        }
        if (window.innerWidth > 1180) {
            const fourSlide = currentSlide + 3 >= iceCreams.length ? n++ : currentSlide + 3;
            slideContainer.innerHTML += iceCreams[fourSlide];
        }
    }

    function nextSlide() {
        currentSlide++
        if (currentSlide >= iceCreams.length) {
            currentSlide = 0;
        }
        renderIceCream(iceCreams)
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = iceCreams.length - 1;
        }
        renderIceCream(iceCreams)
    }

    renderIceCream(iceCreams)

    const btnPrev = document.querySelector('.tastes__cards .cards__prev-slide');
    btnPrev.addEventListener('click', prevSlide);
    const btnNext = document.querySelector('.tastes__cards .cards__next-slide');
    btnNext.addEventListener('click', nextSlide);

    window.addEventListener('resize', () => {
        renderIceCream(iceCreams)
    })
})();