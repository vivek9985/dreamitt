const menuIcon = document.querySelector(".nav-icon");
menuIcon.addEventListener("click", (event) => {
  gsap.to("#menu", {
    x: -500,
    duration: 0.1,
  });
});

const menuClose = document.querySelector(".close-menu");
menuClose.addEventListener("click", (event) => {
  gsap.to("#menu", {
    x: 0,
    duration: 0.1,
  });
});
