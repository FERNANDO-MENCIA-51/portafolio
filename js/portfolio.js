document.addEventListener('DOMContentLoaded', () => {
    // Configuración del observador de intersección
    const observerOptions = {
        threshold: 0.2
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Animación para las tarjetas de proyectos
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 * index);
    });

    // Animación para las habilidades
    document.querySelectorAll('.skill-item').forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'scale(0.5)';
        setTimeout(() => {
            skill.style.transition = 'all 0.5s ease';
            skill.style.opacity = '1';
            skill.style.transform = 'scale(1)';
        }, 100 * index);
    });

    // Efecto hover de brillo para las tarjetas de proyecto
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
            card.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.7)';
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.3s ease';
            card.style.boxShadow = 'none';
            card.style.transform = 'translateY(0)';
        });
    });

    // Animación del formulario de contacto
    const formInputs = document.querySelectorAll('form input, form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
        });
    });

    // Animación para la foto de perfil
    const profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.addEventListener('mousemove', (e) => {
        const rect = profilePhoto.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const shine = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`;
        profilePhoto.style.backgroundImage = shine;
    });


    // Efecto de escritura para el título principal
    const mainTitle = document.querySelector('h1');
    const text = mainTitle.textContent;
    mainTitle.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            mainTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                mainTitle.textContent = '';
                index = 0;
                typeWriter();
            }, 3000);
        }
    }

    typeWriter();

    // Animación de los enlaces sociales
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Efecto parallax para el fondo
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Animación para los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 0.5s infinite alternate';
        });
        button.addEventListener('mouseleave', () => {
            button.style.animation = 'none';
        });
    });

    // Efecto de desvanecimiento para las imágenes de proyectos
    const projectImages = document.querySelectorAll('.project-card img');
    projectImages.forEach(img => {
        img.style.transition = 'opacity 0.3s ease';
        img.addEventListener('mouseenter', () => {
            img.style.opacity = '0.7';
        });
        img.addEventListener('mouseleave', () => {
            img.style.opacity = '1';
        });
    });
});

// Validación del formulario
const form = document.querySelector('form');
const nombreInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const telefonoInput = form.querySelector('input[type="tel"]');
const mensajeInput = form.querySelector('textarea');

// Validación del nombre
nombreInput.addEventListener('input', (e) => {
    const valor = e.target.value;
    const regex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/;
    
    if (!regex.test(valor)) {
        nombreInput.value = valor.replace(/[^a-záéíóúñA-ZÁÉÍÓÚÑ\s]/g, '');
    }
});

// Validación del email
emailInput.addEventListener('input', (e) => {
    const valor = e.target.value;
    emailInput.value = valor.replace(/\s/g, '');
});

emailInput.addEventListener('blur', () => {
    if (!emailInput.value.endsWith('@gmail.com')) {
        alert('El correo debe terminar en @gmail.com');
        emailInput.value = '';
    }
});

// Validación del teléfono
telefonoInput.addEventListener('input', (e) => {
    let valor = e.target.value;
    
    // Eliminar cualquier caracter que no sea número
    valor = valor.replace(/\D/g, '');
    
    // Verificar que empiece con 9
    if (valor.length > 0 && valor[0] !== '9') {
        valor = '';
    }
    
    // Limitar a 9 dígitos
    if (valor.length > 9) {
        valor = valor.slice(0, 9);
    }
    
    telefonoInput.value = valor;
});

// Validación del formulario completo
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!nombreInput.value || !emailInput.value || !telefonoInput.value || !mensajeInput.value) {
        alert('Todos los campos son obligatorios');
        return;
    }
    
    if (telefonoInput.value.length !== 9) {
        alert('El número de teléfono debe tener 9 dígitos');
        return;
    }
    
    if (mensajeInput.value.trim() === '') {
        alert('El mensaje no puede estar vacío');
        return;
    }
    
    // Si todo está correcto, enviar el formulario
    alert('Formulario enviado correctamente');
    form.reset();
});
