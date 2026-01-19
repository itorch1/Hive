// Make mobile menu open
const mobileBtnEl = document.querySelector(".mobile-nav");
const headerEl = document.querySelector(".header");

mobileBtnEl.addEventListener("click", () => {
   headerEl.classList.toggle("open");
});

// Close menu when clicking any of the links
const links = document.querySelectorAll(".main-nav__link");
links.forEach((link) =>
   link.addEventListener("click", () => {
      headerEl.classList.remove("open");
   }),
);

// Sticky navigation
const heroSectionEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
   (entries) => {
      const ent = entries[0];
      if (!ent.isIntersecting) document.body.classList.add("sticky");
      if (ent.isIntersecting) document.body.classList.remove("sticky");
   },
   {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
   }
);
obs.observe(heroSectionEl);

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;