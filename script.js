// ===== MODERN PORTFOLIO JAVASCRIPT =====

// ===== SCROLL TO TOP ON PAGE LOAD =====
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.bento-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectItems.forEach(item => {
            const category = item.dataset.category;

            if (filter === 'all' || category.includes(filter)) {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.classList.add('hidden');
                }, 300);
            }
        });
    });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe bento items
const bentoItems = document.querySelectorAll('.bento-item');
bentoItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(item);
});

// Observe section elements
const fadeElements = document.querySelectorAll('.about-content, .contact-text, .skill-card, .contact-method');
fadeElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    scrollObserver.observe(el);
});

// ===== BENTO GRID INTERACTIONS =====
bentoItems.forEach(item => {
    // Only open modal if clicking on the card, not on project links
    item.addEventListener('click', (e) => {
        // Don't open modal if clicking on a link
        if (e.target.closest('.project-link')) {
            return;
        }
        const projectId = item.dataset.project;
        openProjectModal(projectId);
    });

    // 3D tilt effect
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        item.style.transform = `
            perspective(1000px)
            rotateX(${-rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});

// ===== PROJECT MODAL =====
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

const projectData = {
    1: {
        title: 'AEROSAUR Smart Purifier',
        tags: ['IoT', 'Machine Learning', 'Python', 'Arduino'],
        description: 'An AI-powered air purification system featuring machine learning algorithms that automatically adjust fan speed based on environmental conditions. The system uses Random Forest classification to predict optimal settings, creating a truly smart home automation solution.',
        gradient: 'gradient-1',
        links: {
            github: '#',
            figma: 'https://www.figma.com/proto/aVluEqkcnVBAcHGLgUTtz7/aerosaur--version-2-?node-id=28-2734&starting-point-node-id=28%3A2734&show-proto-sidebar=1&t=mM1tz96wpEn4Giz7-1',
        }
    },
    4: {
        title: 'Smart Door IoT App',
        tags: ['IoT', 'UI/UX', 'Mobile', 'Smart Home'],
        description: 'Mobile application interface for an IoT-enabled smart door system. Features real-time camera monitoring, sensor data visualization, remote access control, and security notifications for seamless home automation.',
        gradient: 'gradient-4',
        links: {
            figma: 'https://www.figma.com/design/01Etrrl7WZaxXxx8VWZ1GU/VeniceHCI?node-id=0-1&t=WFRYN7qQbGg4GpoG-1',
        }
    },
    5: {
        title: 'Learning Management System',
        tags: ['Web Development', 'Full-Stack', 'Node.js', 'Education'],
        description: 'A comprehensive Learning Management System built for online education. Features include course management, student enrollment, assignment tracking, grade management, and interactive learning modules. Built with modern web technologies to provide a seamless learning experience.',
        gradient: 'gradient-2',
        links: {
            github: 'https://github.com/venxice/meowdules-lms',
            live: 'https://lms-webdev.onrender.com/login',
        }
    }
};

function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    // Update modal content
    document.querySelector('.modal-title').textContent = data.title;
    document.querySelector('.modal-description').textContent = data.description;
    document.querySelector('.modal-image').className = `modal-image ${data.gradient}`;

    // Update tags
    const tagsContainer = document.querySelector('.modal-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });

    // Update links
    const linksContainer = document.querySelector('.modal-links');
    linksContainer.innerHTML = '';

    if (data.links) {
        const linkTypes = {
            live: {
                text: 'View Live Site',
                icon: '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; vertical-align: middle;"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zM.5 8a7.5 7.5 0 0111.937-6.127L9.203 5.107a2.5 2.5 0 00-3.096 3.096L2.873 11.437A7.488 7.488 0 01.5 8zm14.437-.127L11.703 10.893a2.5 2.5 0 01-3.096 3.096l-3.234 3.234A7.5 7.5 0 0014.937 7.873z"/></svg>'
            },
            github: {
                text: 'View on GitHub',
                icon: '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; vertical-align: middle;"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>'
            },
            figma: {
                text: 'View Design',
                icon: '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; vertical-align: middle; text-decoration: none;"><path d="M5.5 0A2.5 2.5 0 003 2.5v11A2.5 2.5 0 005.5 16a2.5 2.5 0 002.5-2.5V11h2.5A2.5 2.5 0 0013 8.5 2.5 2.5 0 0010.5 6H8V2.5A2.5 2.5 0 005.5 0z"/></svg>'
            }
        };

        Object.keys(data.links).forEach(linkType => {
            const url = data.links[linkType];
            if (url && url !== '#') {
                const linkBtn = document.createElement('a');
                linkBtn.href = url;
                linkBtn.target = '_blank';
                linkBtn.className = 'btn-primary';
                linkBtn.innerHTML = `${linkTypes[linkType].icon} ${linkTypes[linkType].text} →`;
                linksContainer.appendChild(linkBtn);
            }
        });
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProjectModal);
modalOverlay.addEventListener('click', closeProjectModal);

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ===== FORM SUBMISSION =====
const contactForm = document.querySelector('.contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);

    try {
        // Submit to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            // Show success message
            formSuccess.style.display = 'block';
            formError.style.display = 'none';

            // Create success animation
            createSuccessAnimation();

            // Reset form
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        } else {
            // Show error message
            formError.style.display = 'block';
            formSuccess.style.display = 'none';
        }
    } catch (error) {
        // Show error message
        formError.style.display = 'block';
        formSuccess.style.display = 'none';
    }
});

function createSuccessAnimation() {
    const particles = ['✨', '💫', '⭐', '🌟'];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            particle.style.position = 'fixed';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.fontSize = '2rem';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '10001';
            particle.style.animation = 'particleFloat 2s ease-out forwards';

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 2000);
        }, i * 50);
    }
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(-200px) scale(1.5) rotate(360deg);
        }
    }
`;
document.head.appendChild(particleStyle);

// ===== NAV BACKGROUND ON SCROLL =====
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

// ===== PARALLAX EFFECT FOR FLOATING SHAPES =====
const floatingShapes = document.querySelectorAll('.floating-shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== TOOL TAGS INTERACTION =====
const toolTags = document.querySelectorAll('.tool-tag');

toolTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transform = 'scale(0.95)';
        setTimeout(() => {
            tag.style.transform = '';
        }, 200);
    });
});

// ===== MAGNETIC BUTTONS =====
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-nav');

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-3px)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// ===== HERO CTA BUTTONS =====
const heroPrimaryBtn = document.querySelector('.hero-cta .btn-primary');
const heroSecondaryBtn = document.querySelector('.hero-cta .btn-secondary');

if (heroPrimaryBtn) {
    heroPrimaryBtn.addEventListener('click', () => {
        document.querySelector('#work').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

if (heroSecondaryBtn) {
    heroSecondaryBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ===== SCROLL TO TOP ON NAV LOGO CLICK =====
const navLogo = document.querySelector('.nav-logo');
navLogo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== SKILL CARDS HOVER EFFECT =====
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.skill-icon');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.skill-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===== ABOUT IMAGE PARALLAX =====
const aboutImage = document.querySelector('.about-image');

if (aboutImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const aboutSection = document.querySelector('.about');
        const aboutTop = aboutSection.offsetTop;

        if (scrolled > aboutTop - window.innerHeight && scrolled < aboutTop + aboutSection.offsetHeight) {
            const parallaxValue = (scrolled - aboutTop) * 0.1;
            aboutImage.style.transform = `translateY(${parallaxValue}px)`;
        }
    });
}

// ===== FOOTER LINKS HOVER ANIMATION =====
const footerLinks = document.querySelectorAll('.footer-links a, .footer-social a');

footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateX(5px)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;

function requestTick(callback) {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            callback();
            ticking = false;
        });
        ticking = true;
    }
}

// Optimized scroll handler
window.addEventListener('scroll', () => {
    requestTick(() => {
        // Scroll-dependent animations are already optimized above
    });
}, { passive: true });

// ===== CONSOLE MESSAGE =====
console.log('%c🎨 Welcome to my portfolio! ', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with modern web technologies ✨', 'color: #a855f7; font-size: 14px;');
console.log('%cInterested in working together? Let\'s talk!', 'color: #000; font-size: 12px;');

// ===== LOADING ANIMATION (Optional) =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
