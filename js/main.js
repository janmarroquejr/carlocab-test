const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  const linkAnimation = () => {
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
  };

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");

    burger.classList.toggle("toggle");

    linkAnimation();

    if (nav.classList.contains("active")) {
      window.onscroll = () => {
        nav.classList.remove("active");
        burger.classList.remove("toggle");
        linkAnimation();
      };
    }
  });
};

navSlide();
