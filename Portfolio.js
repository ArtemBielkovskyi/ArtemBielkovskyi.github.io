new fullpage('#fullpage', {
    autoScrolling: true,
    fitToSection: true,
    scrollingSpeed: 1600,
    scrollHorizontally: false,
    scrollOverflow: true,
    licenseKey: 'YOUR_KEY_HERE',
    anchors: ['home', 'about', 'Lifestyle', 'Expirience','Contact'],
    menu: '.header',
    onLeave: function(origin, destination, direction){
        // Remove the animation class and reset underline when leaving the section
        if (origin.index === 0) {
            document.querySelectorAll('.link').forEach(link => {
                link.classList.remove('animate');
                link.blur(); // Reset focus state
            });
        }
        // Remove the animation class when leaving the about section
        if (origin.index === 1 || origin.index === 3) {
            document.querySelector('.AboutMeInfo').classList.remove('show2');
            document.querySelector('.AboutMeImage').classList.remove('showImg');
        }
        if (destination.index === 2 || destination.index === 4) {
            document.querySelector('.EducationImg').classList.remove('EducationImgShow');
        }
    },
    afterLoad: function(origin, destination, direction){
        // Add the animation class when the section is loaded
        if (destination.index === 0) {
            document.querySelectorAll('.link').forEach(link => {
                link.classList.add('animate');
            });
            document.querySelector('.header').style.opacity = '1';
            document.querySelector('.header').style.filter = 'blur(0)';
            document.querySelector('.header').style.transform = 'translateY(0)';
        }
        // Trigger AboutMeInfo and AboutMeImage animation when the about section is loaded
        if (destination.index === 1) {
            document.querySelector('.AboutMeInfo').classList.add('show2');
            document.querySelector('.AboutMeImage').classList.add('showImg');
        }
        if (destination.index === 3) {
            document.querySelector('.EducationImg').classList.add('EducationImgShow');
        }
        if (destination.index === 4) {
            document.querySelectorAll('.socialLink').forEach(link => {
                link.classList.add('socialShow');
            });
        }
    }
});