//function to animate objects and add classes for animation
function AnimationLinking(selector,newClass){
  const Aobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(newClass);
    } else {
      entry.target.classList.remove(newClass);
    }
  });
  });
  
  const Asection = document.querySelectorAll(selector);
  Asection.forEach((el) => {
  Aobserver.observe(el);
  });
};
//animations on the page 
AnimationLinking('.AboutMeInfo','show2');
AnimationLinking('.TextOnSlides','show');
AnimationLinking('.Video','showVideo');
AnimationLinking('.bluredTxt','bluredTxtShow');
AnimationLinking('.email','emailShow');
AnimationLinking('.socialLink','socialShow');

