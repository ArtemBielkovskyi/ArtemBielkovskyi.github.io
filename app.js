const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const sections = document.querySelectorAll('.TextOnSlides');
sections.forEach((el) => {
  observer.observe(el);
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('show2');
  } else {
    entry.target.classList.remove('show2');
  }
});
});

const sections2 = document.querySelectorAll('.AboutMeInfo');
sections2.forEach((el) => {
observer2.observe(el);
});
