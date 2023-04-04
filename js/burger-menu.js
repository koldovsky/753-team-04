(function () {
  const header = document.querySelector(".header");
  const btn = document.querySelector(
    "body > header > nav > div > div.navbar-toggler"
  );
  const burgerItems = document.querySelector("#navbarNav");
  const span1 = document.querySelector("body > header > nav > div > div.navbar-toggler > div > span:nth-child(1)");
  const span2 = document.querySelector("body > header > nav > div > div.navbar-toggler > div > span:nth-child(2)");
  const span3 = document.querySelector("body > header > nav > div > div.navbar-toggler > div > span:nth-child(3)");

  function changeBackground() {
    if (btn.ariaExpanded === "true") {
      header.classList.add("burger__background");
      document.querySelector("body").classList.add("body__overflow");
      span1.style.transform = "rotate(45deg) translate(8px, 4px)";
      span2.style.transform = "rotate(-45deg) translate(1px, 3px)";
      span3.style.display = "none";
    } else {
      header.classList.remove("burger__background");
      document.querySelector("body").classList.remove("body__overflow");
      span1.style.transform = "rotate(0) translate(0, 0)";
      span2.style.transform = "rotate(0) translate(0, 0)";
      span3.style.display = "block";
    }
  }
  btn.addEventListener("click", changeBackground);

  burgerItems.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      burgerItems.classList.remove("show");
      header.classList.remove("burger__background");
      document.querySelector("body").classList.remove("body__overflow");
      span1.style.transform = "rotate(0) translate(0, 0)";
      span2.style.transform = "rotate(0) translate(0, 0)";
      span3.style.display = "block";
    }
  });
})();