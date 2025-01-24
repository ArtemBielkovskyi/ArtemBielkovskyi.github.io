new fullpage('#fullpage', {
    autoScrolling: true,
    fitToSection: true,
    scrollingSpeed: 1200,
    scrollHorizontally: false,
    scrollOverflow: true,
    licenseKey: 'YOUR_KEY_HERE',
    afterRender: function(){
        // Disable default scroll
        document.addEventListener('wheel', function(e) {
            e.preventDefault();
        }, { passive: false });
    }
});