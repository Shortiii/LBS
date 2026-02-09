import './styles/home.css'
import header1 from './assets/header1.png'
import header2 from './assets/header2.png'
import header3 from './assets/header3.png'

  const slides = [
    {
      image: header1,
      title: "Together, We Lead Beyond the Classroom.",
      text: "The Lagos Business School Alumni Network brings together changemakers who are shaping industries, building communities, and redefining leadership across Africa and beyond."
    },
    {
      image: header2,
      title: "Legacy. Leadership. LBS for Life.",
      text: "More than a school - your alumni journey is a source of inspiration, mentorship, and global possibility shaped by the LBS spirit."
    },
    {
      image: header3,
      title: "Innovation Rooted in Community",
      text: "Join a powerful network of alumni driving change in business, technology and society; connected by LBS, motivated by purpose."
    }
  ];


  let current = 0;
   const hero = document.getElementById("hero");
   const title = document.getElementById("hero-title");
   const text = document.getElementById("hero-text");
   const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    current = index;

    hero.style.backgroundImage = `url(${slides[index].image})`;
    title.textContent = slides[index].title;
    text.textContent = slides[index].text;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  let interval = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      showSlide(+dot.dataset.index);
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

  closeBtn.addEventListener("click", () => {
    console.log("clicked");
    YTPlayer.classList.remove("active");
    iframe.src = "";
  });
});
