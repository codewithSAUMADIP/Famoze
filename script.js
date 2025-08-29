// ----------------------
// NAVBAR TOGGLE
// ----------------------
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ----------------------
// SMOOTH SCROLL
// ----------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ----------------------
// FAQ ACCORDION TOGGLE
// ----------------------
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// ----------------------
// SLIDER PAUSE/PLAY
// ----------------------
const sliderContainer = document.getElementById('sliderContainer');
const pauseBtn = document.getElementById('pauseBtn');
let isPaused = false;

if (sliderContainer && pauseBtn) {
  pauseBtn.addEventListener('click', function () {
    isPaused = !isPaused;
    sliderContainer.classList.toggle('paused', isPaused);
    pauseBtn.innerHTML = isPaused ? '▶️ Play' : '⏸️ Pause';
  });

  sliderContainer.addEventListener('mouseenter', function () {
    if (!isPaused) sliderContainer.classList.add('paused');
  });

  sliderContainer.addEventListener('mouseleave', function () {
    if (!isPaused) sliderContainer.classList.remove('paused');
  });
}

// ----------------------
// SERVICE CARD HOVER ANIMATION
// ----------------------
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ----------------------
// CHART BAR ANIMATION ON LOAD
// ----------------------
window.addEventListener('load', function () {
  const chartLine = document.querySelector('.chart-line');
  const bars = document.querySelectorAll('.bar');

  if (chartLine) {
    chartLine.style.transform = 'scaleX(0)';
    chartLine.style.transformOrigin = 'left';
    setTimeout(() => {
      chartLine.style.transition = 'transform 1.5s ease-out';
      chartLine.style.transform = 'scaleX(1)';
    }, 500);
  }

  bars.forEach((bar, index) => {
    bar.style.transform = 'scaleY(0)';
    bar.style.transformOrigin = 'bottom';
    setTimeout(() => {
      bar.style.transition = 'transform 0.8s ease-out';
      bar.style.transform = 'scaleY(1)';
    }, 800 + (index * 100));
  });
});

// ----------------------
// SCROLL REVEAL ANIMATION
// ----------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll('.all-project, .card-wrapper, .testimonials, .unique-section')
  .forEach(el => observer.observe(el));

// ----------------------
// SWIPER TESTIMONIAL SLIDER
// ----------------------
document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector('.swiper-container');
  if (swiperContainer) {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    });
  } else {
    console.warn('Swiper container not found.');
  }
});


lucide.createIcons();

