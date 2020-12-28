import gsap from 'gsap';

function onChange(value) {
  const pageWidth = document.querySelector('.slider__page').clientWidth;
  gsap.to('.slider__pages-container', {right: pageWidth * (value - 1)});
};

export default onChange;