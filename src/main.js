import './style.css'

  const slides = [
    {
      image: "src/assets/header1.png",
      title: "Together, We Lead Beyond the Classroom.",
      text: "The Lagos Business School Alumni Network unites changemakers who are shaping industries, building communities, and redefining leadership across Africa and beyond. "
    },
    {
      image: "src/assets/header2.png",
      title: "Legacy. Leadership. LBS for Life.",
      text: "More than a school - your alumni journey is a source of inspiration, mentorship, and global possibility shaped by the LBS spirit."
    },
    {
      image: "src/assets/header3.png",
      title: "Innovation Rooted in Community",
      text: "Join a powerful network of alumni driving change in business, technology and society; connected by LBS, motivated by purpose."
    }
  ];

  let current = 0;
   const hero = document.querySelector(".nav-header");
   const title = document.querySelector(".bottom-header h1");
   const text = document.querySelector(".bottom-header p");
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

  // manual controls
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      showSlide(+dot.dataset.index);
    });
  });

  // init
  showSlide(0);


