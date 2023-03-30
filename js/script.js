// variables
const sections = document.querySelectorAll('section');
const navElements = document.querySelectorAll('ul li');
let activeSectionIndicator = '';

// intersection observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(`ul li.active`).classList.remove('active');
        activeSectionIndicator = entry.target.classList[0];
        document
          .querySelector(`ul li[data-section="${activeSectionIndicator}"]`)
          .classList.add('active');
      }
    });
  },
  { root: document, rootMargin: '-10% 0px -90% 0px' }
);

sections.forEach((section) => {
  observer.observe(section);
});
