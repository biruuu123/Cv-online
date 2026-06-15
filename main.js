// Nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Animate skill bars on scroll
const bars = document.querySelectorAll('.skill-bar-fill');
if (bars.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const width = target.getAttribute('data-width');
        target.style.width = width + '%';
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}
