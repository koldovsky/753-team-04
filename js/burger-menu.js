(function () {
  const header = document.querySelector(".header");
  const btn = document.querySelector(
    "body > header > nav > div > div.navbar-toggler"
  );

  function changeBackground() {
    if (btn.ariaExpanded === "true") {
      header.classList.add("burger__background");
    } else {
      header.classList.remove("burger__background");
    }
  }
  btn.addEventListener("click", changeBackground);
})();