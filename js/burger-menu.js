(function () {
    const header = document.querySelector(".header");
    const btn = document.querySelector(
      "body > header > nav > div > div.navbar-toggler"
    );
  
    function changeBackground() {
      if (btn.ariaExpanded === "true") {
        header.style.backgroundImage = "none";
        header.style.backgroundColor = "#493B5F";
      } else {
        header.style.backgroundImage = "url(img/header/header-background.png)";
      }
    }
    btn.addEventListener("click", changeBackground);
  })();