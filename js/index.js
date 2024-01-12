window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
document.querySelector(".mobile-menu").addEventListener("click", (event) => {
  gsap.to("#mobile-menu", {
    top: "0%",
    duration: 0.9,
    ease: "power4.out",
  });
  gsap.to("#menu-item", {
    marginLeft: 0,
    duration: 1,
    opacity: 1,
    stagger: 0.1,
  });
});
document
  .querySelector(".close-mobile-menu")
  .addEventListener("click", (event) => {
    gsap.to("#mobile-menu", {
      top: "-100%",
      duration: 0.9,
      ease: "power4.out",
    });
    gsap.to("#menu-item", {
      marginLeft: 160,
      duration: 1,
      opacity: 1,
      stagger: 0.1,
    });
  });

document.querySelector(".nav-icon").addEventListener("click", (event) => {
  gsap.to("#menu", {
    width: "100%",
    duration: 0.9,
    ease: "power4.out",
  });
  gsap.to("#text", {
    marginBottom: 0,
    duration: 1,
    opacity: 1,
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
  gsap.to("#text", {
    marginBottom: 40,
    duration: 1,
    opacity: 1,
    stagger: 0.1,
  });
});
