let slideIndex = 1;

function showSlides(n) {
  const slides = document.querySelectorAll('.slider img');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  dots.forEach((dot) => {
    dot.className = dot.className.replace(' active', '');
  });

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
});
