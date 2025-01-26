new fullpage('#fullpage', {
    autoScrolling: true,
    fitToSection: true,
    scrollingSpeed: 1200,
    scrollHorizontally: false,
    scrollOverflow: true,
    licenseKey: 'YOUR_KEY_HERE',
    //Header section animation
    anchors: ['about', 'experience', 'contact'],
    menu: '.header',
    onLeave: function(origin, destination, direction){
        // Removes the animation class when leaving the section
        if (origin.index === 0) {
            document.querySelectorAll('.link').forEach(link => {
                link.classList.remove('animate');
            });
        }
    },
    afterLoad: function(origin, destination, direction){
        // Adds the animation class when the section is loaded
        if (destination.index === 0) {
            document.querySelectorAll('.link').forEach(link => {
                link.classList.add('animate');
            });
            document.querySelector('.header').style.opacity = '1';
            document.querySelector('.header').style.filter = 'blur(0)';
            document.querySelector('.header').style.transform = 'translateY(0)';
        }
    }
});



