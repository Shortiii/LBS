import "./styles/home.css";
let current = 0;
const hero = document.getElementById("hero");
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (slides.length === 0) return;
  current = index;

  const activeSlide = slides[index];
  const bgImage = activeSlide.getAttribute("data-image");

  if (bgImage) {
    hero.style.backgroundImage = `url(${bgImage})`;
  }

  slides.forEach((s) => s.classList.remove("active"));
  activeSlide.classList.add("active");

  dots.forEach((d) => d.classList.remove("active"));
  if (dots[index]) {
    dots[index].classList.add("active");
  }
}

let interval = setInterval(() => {
  if (slides.length > 0) {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
}, 3000);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    showSlide(+dot.dataset.index);

    interval = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 3000);
  });
});

showSlide(0);

document.addEventListener("DOMContentLoaded", () => {
  const YTPlayer = document.querySelector(".youtube-overlay");
  const YTlink = document.querySelector(".main-img");
  const closeBtn = document.querySelector(".close-btn");
  const iframe = document.querySelector(".youtube-popUp iframe");
  const videoSrc = iframe.src;

  YTlink.addEventListener("click", () => {
    YTPlayer.classList.add("active");
    iframe.src = videoSrc;
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("clicked");
    console.log("Before:", YTPlayer.classList); // Check classes before
    YTPlayer.classList.remove("active");
    console.log("After:", YTPlayer.classList); // Check classes after
    iframe.src = "";
  });
});
