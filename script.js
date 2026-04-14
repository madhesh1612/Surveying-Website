// Premium animation variants (Framer Motion style equivalents for static site)
const motionVariants = {
    fadeUp: { duration: 650, easing: 'ease-out' },
    fadeIn: { duration: 550, easing: 'ease-in-out' },
    slideRight: { duration: 700, easing: 'ease-out' },
    slideLeft: { duration: 700, easing: 'ease-out' },
    zoomIn: { duration: 600, easing: 'ease-in-out' }
};

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-entrance');
    if (nav) {
        requestAnimationFrame(() => nav.classList.add('is-loaded'));
    }

    // Hero staggered entrance
    const heroItems = document.querySelectorAll('.hero-content [data-anim]');
    heroItems.forEach((item, index) => {
        const variant = motionVariants[item.dataset.anim] || motionVariants.fadeUp;
        item.style.transitionDuration = `${variant.duration}ms`;
        item.style.transitionTimingFunction = variant.easing;
        setTimeout(() => item.classList.add('is-visible'), 120 + index * 140);
    });

    // Scroll-based reveal with once:true behavior
    const animatedItems = document.querySelectorAll('[data-anim]');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const variant = motionVariants[el.dataset.anim] || motionVariants.fadeUp;
            const delay = Number(el.dataset.delay || 0);
            el.style.transitionDuration = `${variant.duration}ms`;
            el.style.transitionTimingFunction = variant.easing;
            el.style.transitionDelay = `${delay}s`;
            el.classList.add('is-visible');
            obs.unobserve(el);
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });

    animatedItems.forEach((el) => {
        if (!el.closest('.hero-content')) observer.observe(el);
    });

    // Stagger container support
    document.querySelectorAll('[data-stagger]').forEach((container) => {
        const baseDelay = Number(container.dataset.stagger || 0.12);
        const children = container.querySelectorAll('[data-anim]');
        children.forEach((child, index) => {
            child.dataset.delay = (baseDelay * index).toFixed(2);
        });
    });

    // Subtle hero parallax
    const heroOverlay = document.querySelector('.hero-overlay');
    if (heroOverlay) {
        window.addEventListener('scroll', () => {
            const heroHeight = window.innerHeight;
            const progress = Math.min(window.scrollY / heroHeight, 1);
            heroOverlay.style.transform = `translate3d(0, ${progress * 20}px, 0)`;
        }, { passive: true });
    }

    initScrollProgress();
    initActiveNavLinks();
    initBackToTop();
    initMagneticButtons();
    initPremiumTilt();
    initStatCounters();
});

// Sticky Navigation
const header = document.querySelector('#header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (header && window.scrollY > 50) {
        header.classList.add('sticky');
    } else if (header) {
        header.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (!menuToggle || !navLinks) return;
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
                requestAnimationFrame(() => item.classList.remove('is-hidden'));
            } else {
                item.classList.add('is-hidden');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 420);
            }
        });
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other FAQ items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            otherAnswer.style.maxHeight = null;
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
    });
});

// Contact Form Submission (Mock)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate an API call
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
        
        setTimeout(() => {
            alert('Thank you for your message! Our team will contact you shortly.');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }, 1500);
    });
}

// Newsletter Form Submission (Mock)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`Successfully subscribed with: ${email}`);
        newsletterForm.reset();
    });
}

function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    const update = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = height > 0 ? (scrollTop / height) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
}

function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!sections.length || !navAnchors.length) return;

    const map = new Map();
    navAnchors.forEach((a) => map.set(a.getAttribute('href')?.slice(1), a));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navAnchors.forEach((a) => a.classList.remove('active'));
            const active = map.get(entry.target.id);
            if (active) active.classList.add('active');
        });
    }, { threshold: 0.45 });

    sections.forEach((section) => observer.observe(section));
}

function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;

    const updateVisibility = () => {
        backToTopBtn.classList.toggle('is-visible', window.scrollY > 500);
    };

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
}

function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('mousemove', (event) => {
            const rect = button.getBoundingClientRect();
            const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
            const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
            button.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

function initPremiumTilt() {
    const cards = document.querySelectorAll('[data-tilt]');
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    cards.forEach((card) => {
        card.addEventListener('mousemove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            const rotateY = (x - 0.5) * 6;
            const rotateX = (0.5 - y) * 6;
            card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

function initStatCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    if (!counters.length) return;

    const animateCounter = (counter) => {
        const text = counter.textContent || '';
        const target = parseInt(text.replace(/[^\d]/g, ''), 10);
        if (!target) return;
        const suffix = text.replace(String(target), '');
        const duration = 850;
        const start = performance.now();

        const update = (time) => {
            const progress = Math.min((time - start) / duration, 1);
            const value = Math.floor(progress * target);
            counter.textContent = `${value}${suffix}`;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.6 });

    counters.forEach((counter) => observer.observe(counter));
}
