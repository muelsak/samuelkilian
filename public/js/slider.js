// slider.js — minimal
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const btnLeft = document.querySelector('.slider-btn.left');
  const btnRight = document.querySelector('.slider-btn.right');

  const slideWidth = () => slider.querySelector('.slide').getBoundingClientRect().width + parseInt(getComputedStyle(slider).gap || 0);

  btnLeft && btnLeft.addEventListener('click', () => {
    slider.scrollBy({ left: -slideWidth(), behavior: 'smooth' });
  });
  btnRight && btnRight.addEventListener('click', () => {
    slider.scrollBy({ left: slideWidth(), behavior: 'smooth' });
  });

  // Option: keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') slider.scrollBy({ left: -slideWidth(), behavior: 'smooth' });
    if (e.key === 'ArrowRight') slider.scrollBy({ left: slideWidth(), behavior: 'smooth' });
  });
});
