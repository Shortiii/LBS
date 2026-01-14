import './styles/style.css'


const toggles = document.querySelectorAll('.js-toggle');
const menus = document.querySelectorAll('.js-menu');

toggles.forEach(toggle => {
  const target = toggle.dataset.target;
  const menu = toggle.querySelector(`.js-menu[data-menu="${target}"]`);

  if (!menu) return;

  toggle.addEventListener('click', e => {
    e.stopPropagation();

    menus.forEach(m => {
      if (m !== menu) m.classList.add('hidden');
    });

    menu.classList.toggle('hidden');
  });
});

document.addEventListener('click', () => {
  menus.forEach(menu => menu.classList.add('hidden'));
});


const navToggle = document.querySelector('.js-nav-toggle');
const navClose = document.querySelector('.js-nav-close');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileNav) {
  if (navToggle) {
    navToggle.addEventListener('click', e => {
      e.stopPropagation();
      mobileNav.classList.toggle('open');
    });
  }
  if (navClose) {
    navClose.addEventListener('click', e => {
      e.stopPropagation();
      mobileNav.classList.remove('open');
    });
  }
  document.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
  mobileNav.addEventListener('click', e => e.stopPropagation());
}


// document.addEventListener("DOMContentLoaded", () => {
//   const page = location.pathname.split("/").pop() || "index.html";

//   document.querySelectorAll(".nav-list a").forEach(a => {
//     const href = a.getAttribute("href");

//     if (href && href.includes(page)) {
//       a.classList.add("active-nav");

//       const parentList = a.closest(".list");
//       if (parentList) {
//         parentList.querySelector(".nav-label")?.classList.add("active-nav");
//       }
//     }
//   });
// });

