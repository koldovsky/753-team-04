(function () {
  const photoSlides = [
    '<div class="worker"><img src="img/about-us-second-page/jane-woss.png" alt="Jane Woss"><p class="workers__name">Jane Woss</p></div></div>',
    '<div class="worker"><img src="img/about-us-second-page/tomas-jackson.png" alt="Tomas Jackson"><p class="workers__name">Tomas Jackson</p></div></div>',
    '<div class="worker"><img src="img/about-us-second-page/eloise-birkenstone.png" alt="Eloise Birkenstone"><p class="workers__name">Eloise Birkenstone</p></div></div>',
  ];

  const slideContainer = document.querySelector(
    ".staff__carousel .staff__carousel__workers"
  );

  let currentSlide = 0;

  function currentPhotos(photoSlides) {
    slideContainer.innerHTML = photoSlides[currentSlide];
    if (window.innerWidth > 500) {
      const secondSlide =
        currentSlide + 1 >= photoSlides.length ? 0 : currentSlide + 1;
      slideContainer.innerHTML += photoSlides[secondSlide];
    }
  }

  function nextPhoto() {
    currentSlide++;
    if (currentSlide >= photoSlides.length) {
      currentSlide = 0;
    }
    currentPhotos(photoSlides);
  }

  function prevPhoto() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = photoSlides.length - 1;
    }
    currentPhotos(photoSlides);
  }

  currentPhotos(photoSlides);

  const nextButton = document.querySelector(
    "div.staff__carousel > div.arrow-btn-next"
  );
  nextButton.addEventListener("click", nextPhoto);

  const prevButton = document.querySelector(
    "div.staff__carousel > div.arrow-btn-prev"
  );
  prevButton.addEventListener("click", prevPhoto);

  window.addEventListener("resize", () => {
    currentPhotos(photoSlides);
  });
})();
