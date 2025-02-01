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


const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('showImg');
  } else {
    entry.target.classList.remove('showImg');
  }
});
});

const sections3 = document.querySelectorAll('.AboutMeImage');
sections3.forEach((el) => {
observer3.observe(el);
});

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('showVideo');
  } else {
    entry.target.classList.remove('showVideo');
  }
});
});

const sections4 = document.querySelectorAll('.Video');
sections4.forEach((el) => {
observer4.observe(el);
});

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('bluredTxtShow');
  } else {
    entry.target.classList.remove('bluredTxtShow');
  }
});
});

const sections5 = document.querySelectorAll('.bluredTxt');
sections5.forEach((el) => {
observer5.observe(el);
});
