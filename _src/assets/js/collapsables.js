'use strict';
const open = document.querySelectorAll('.bar__menu-card');
const contDesign = document.querySelector('.container__radios');
const contFill = document.querySelector('.container__fill');
const contShare = document.querySelector('.share_btn--container');
const icons = document.querySelectorAll('.ico__arrow-menu');

const resetColapsable = (colapsableNode, arrowIcon) => {
  colapsableNode.classList.add('hidden');
  arrowIcon.classList.remove('ico__arrow--reverse-down');
  arrowIcon.classList.remove('ico__arrow--reverse-up');
};

const rotateArrow = (containerNode, arrowIcon) => {
  if (containerNode.classList.contains('hidden')) {
    arrowIcon.classList.add('ico__arrow--reverse-down');
    arrowIcon.classList.remove('ico__arrow--reverse-up');
  } else {
    arrowIcon.classList.add('ico__arrow--reverse-up');
    arrowIcon.classList.remove('ico__arrow--reverse-down');
  }
};

const arrowFillIcon = icons[1];
const arrowDesignIcon = icons[0];
const arrowShareIcon = icons[2];

const handlerDesign = () => {
  const isDesignClose = contDesign.classList.contains('hidden');
  if (isDesignClose) {
    contDesign.classList.remove('hidden');
    resetColapsable(contFill, arrowFillIcon);
    resetColapsable(contShare, arrowShareIcon);
  } else {
    resetColapsable(contDesign, arrowDesignIcon);
  }

  rotateArrow(contDesign, arrowDesignIcon);
};

const handlerFill = () => {
  const isFillClose = contFill.classList.contains('hidden');
  if (isFillClose) {
    contFill.classList.remove('hidden');
    resetColapsable(contDesign, arrowDesignIcon);
    resetColapsable(contShare, arrowShareIcon);
  } else {
    resetColapsable(contFill, arrowFillIcon);
  }
  rotateArrow(contFill, arrowFillIcon);
};

const handlerShare = () => {
  const isShareClose = contShare.classList.contains('hidden');
  if (isShareClose) {
    contShare.classList.remove('hidden');
    resetColapsable(contDesign, arrowDesignIcon);
    resetColapsable(contFill, arrowFillIcon);
  } else {
    contShare.classList.add('hidden');
  }
  rotateArrow(contShare, arrowShareIcon);
};
open[0].addEventListener('click', handlerDesign);
open[1].addEventListener('click', handlerFill);
open[2].addEventListener('click', handlerShare);
