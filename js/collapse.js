// Simple collapse functionality for bibliographic sources
(function() {
    'use strict';
    
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href') || this.getAttribute('data-bs-target');
            const target = document.querySelector(targetId);
            
            if (target) {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                target.classList.toggle('show');
                target.style.display = isExpanded ? 'none' : 'block';
            }
        });
    });
})();
