// Form validation and submission for contact page
(function() {
    'use strict';
    
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('contactFeedback');
    const submitBtn = form?.querySelector('input[type="submit"]');
    const whatsappBtn = document.getElementById('sendWhatsappBtn');
    
    if (!form) return;
    
    // Validate phone number
    function validatePhone(phone) {
        const pattern = /^\+?[0-9\s\-\(\)]{10,18}$/;
        return pattern.test(phone);
    }
    
    // Show validation error
    function showError(input, show) {
        input.classList.toggle('invalid', show);
        const feedbackEl = input.parentElement.querySelector('.invalid-feedback');
        if (feedbackEl) {
            feedbackEl.style.display = show ? 'block' : 'none';
        }
    }
    
    // Validate form fields
    function validateForm() {
        let isValid = true;
        const name = document.getElementById('txtName');
        const email = document.getElementById('txtEmail');
        const phone = document.getElementById('txtPhone');
        const subject = document.getElementById('txtSubject');
        const message = document.getElementById('txtMsg');
        
        if (!name.value.trim()) {
            showError(name, true);
            isValid = false;
        } else {
            showError(name, false);
        }
        
        if (!email.value.trim() || !email.value.includes('@')) {
            showError(email, true);
            isValid = false;
        } else {
            showError(email, false);
        }
        
        if (!validatePhone(phone.value.trim())) {
            showError(phone, true);
            isValid = false;
        } else {
            showError(phone, false);
        }
        
        if (!subject.value.trim()) {
            showError(subject, true);
            isValid = false;
        } else {
            showError(subject, false);
        }
        
        if (message.value.trim().length < 10) {
            showError(message, true);
            isValid = false;
        } else {
            showError(message, false);
        }
        
        return isValid;
    }
    
    // Handle form submission
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            feedback.textContent = 'Preencha os campos obrigatorios para enviar.';
            feedback.className = 'contact-feedback error';
            return;
        }
        
        submitBtn.disabled = true;
        whatsappBtn.disabled = true;
        submitBtn.value = 'Enviando...';
        feedback.textContent = 'Enviando sua mensagem...';
        feedback.className = 'contact-feedback pending';
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });
            
            if (!response.ok) throw new Error('Falha no envio');
            
            form.reset();
            feedback.textContent = 'Mensagem enviada com sucesso. Em breve entraremos em contato.';
            feedback.className = 'contact-feedback success';
        } catch (error) {
            feedback.textContent = 'Nao foi possivel enviar agora. Tente novamente ou use o WhatsApp.';
            feedback.className = 'contact-feedback error';
        } finally {
            submitBtn.disabled = false;
            whatsappBtn.disabled = false;
            submitBtn.value = 'Enviar por Email';
        }
    });
    
    // Handle WhatsApp button
    whatsappBtn?.addEventListener('click', function() {
        if (!validateForm()) return;
        
        const name = document.getElementById('txtName').value.trim();
        const email = document.getElementById('txtEmail').value.trim();
        const phone = document.getElementById('txtPhone').value.trim();
        const subject = document.getElementById('txtSubject').value.trim();
        const message = document.getElementById('txtMsg').value.trim();
        
        const text = [
            `Ola! Meu nome e ${name}.`,
            `Email: ${email}.`,
            `WhatsApp: ${phone}.`,
            `Assunto: ${subject}.`,
            '',
            'Mensagem:',
            message
        ].join('\n');
        
        window.open(`https://wa.me/5583986344422?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    });
})();
