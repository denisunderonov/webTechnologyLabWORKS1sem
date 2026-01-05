/**
 * Web Technology Lab Works - Main JavaScript File
 * Автор: Denis Underonov
 */

// Добавление плавной прокрутки для всех якорных ссылок
document.addEventListener('DOMContentLoaded', function() {
    
    // Плавная прокрутка для якорных ссылок
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Добавление активного состояния для навигации при скролле
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.header__navbar a');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // Добавление функционала для форм
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Базовая валидация формы
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Пожалуйста, заполните все обязательные поля');
            }
        });
    });

    // Улучшение доступности для изображений без alt
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
        img.setAttribute('alt', 'Image');
    });

    console.log('🚀 Web Technology Lab Works загружен успешно!');
});
