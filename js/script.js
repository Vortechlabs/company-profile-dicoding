AOS.init({
duration: 1000,
once: true,
offset: 100
});

// Fungsi hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const sidebarToggle = document.querySelector('#sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('#content');

// Tombol hamburger menu
hamburgerMenu.addEventListener('click', () => {
navList.classList.toggle('active');
hamburgerMenu.classList.toggle('active');
});

// Tombol sidebar
sidebarToggle.addEventListener('click', () => {
sidebar.classList.toggle('active');
});

// Tutup sidebar
mainContent.addEventListener('click', () => {
if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
}
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
    });
    
    navList.classList.remove('active');
    hamburgerMenu.classList.remove('active');
    }
});
});

// Animasi untuk CTA
const ctaButton = document.querySelector('.cta-button');
if(ctaButton) {
ctaButton.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
    this.style.transform = 'scale(1)';
    }, 200);
    
    document.querySelector('#features').scrollIntoView({
    behavior: 'smooth'
    });
});
}

window.addEventListener('resize', () => {
if (window.innerWidth > 768) {
    navList.classList.remove('active');
    hamburgerMenu.classList.remove('active');
    sidebar.classList.add('active');
} else {
    sidebar.classList.remove('active');
}
});

if (window.innerWidth > 768) {
sidebar.classList.add('active');
}