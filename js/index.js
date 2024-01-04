const menuIcon = document.querySelector(".nav-icon");
menuIcon.addEventListener("click", (event) => {
  gsap.to("#menu", {
    width: "100%",
    duration: 0.9,
    ease: "power4.out",
  });
  gsap.to(".close-menu", {
    rotate: 360,
    duration: 1.2,
  });
  gsap.from("#text", {
    y: 120,
    duration: 0.2,
    stagger: 0.1,
  });
  gsap.to("#text", {
    y: 0,
    duration: 0.2,
    stagger: 0.1,
  });
});

const menuClose = document.querySelector(".close-menu");
menuClose.addEventListener("click", (event) => {
  gsap.to("#menu", {
    width: 0,
    duration: 0.9,
    ease: "power4.in",
  });
  gsap.to(".close-menu", {
    rotate: 0,
    duration: 2,
  });
});
