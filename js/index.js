const menuIcon = document.querySelector(".nav-icon");
menuIcon.addEventListener("click", (event) => {
  gsap.to("#menu", {
    left: 0,
    duration: 1,
    ease: "power4.out",
  });
  gsap.from("#text", {
    y: 120,
    duration: 0.6,
    stagger: 0.1,
    ease: "power4.out",
  });
  gsap.to("#text", {
    y: 0,
    duration: 0.6,
    stagger: 0.1,
  });
});

const menuClose = document.querySelector(".close-menu");
menuClose.addEventListener("click", (event) => {
  gsap.to("#menu", {
    left: 2000,
    duration: 1,
    ease: "power4.in",
  });
});
