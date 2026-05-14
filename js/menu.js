// Menu mobile toggle functionality
(function() {
    'use strict';
    
    const toggler = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('#navbarNav');
    
    if (toggler && navCollapse) {
        toggler.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navCollapse.classList.toggle('show');
        });
    }
})();
