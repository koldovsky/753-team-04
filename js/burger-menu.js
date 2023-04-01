(function () {
  const header = document.querySelector(".header");
  const btn = document.querySelector(
    "body > header > nav > div > div.navbar-toggler"
  );
  const burgerItems = document.querySelector("#navbarNav");

  function changeBackground() {
    if (btn.ariaExpanded === "true") {
      header.classList.add("burger__background");
      document.querySelector("body").classList.add("body__overflow");
    } else {
      header.classList.remove("burger__background");
      document.querySelector("body").classList.remove("body__overflow");
    }
  }
  btn.addEventListener("click", changeBackground);

  burgerItems.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      burgerItems.classList.remove("show");
      header.classList.remove("burger__background");
      document.querySelector("body").classList.remove("body__overflow");
    }
  });
})();
