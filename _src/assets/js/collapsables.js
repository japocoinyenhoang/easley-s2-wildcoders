'use strict';

/* // Si contiene la clase hidden
if (activableSection.classList.contains('hidden')) {
  // Elimina la clase
  activableSection.classList.remove('hidden');
} else { // Sino
  // Añade la clase hidden
  activableSection.classList.add('hidden');
}
//Desplegables */

const open = document.querySelectorAll('.bar__menu-card');
const contDesign = document.querySelector('.container__radios');
const contFill = document.querySelector('.container__fill');
const contShare = document.querySelector('.share_btn--container');

const handlerDesign = () => {

  if (contDesign.classList.contains('hidden')) {
    contDesign.classList.remove('hidden');
    contFill.classList.add('hidden');
    contShare.classList.add('hidden');
  } else {
    contDesign.classList.add('hidden');
  }
};

const handlerFill = () => {
  if (contFill.classList.contains('hidden')) {
    contFill.classList.remove('hidden');
    contDesign.classList.add('hidden');
    contShare.classList.add('hidden');
  } else {
    contFill.classList.add('hidden');
  }
};

const handlerShare = () => {
  if (contShare.classList.contains('hidden')) {
    contShare.classList.remove('hidden');
    contDesign.classList.add('hidden');
    contFill.classList.add('hidden');
  } else {
    contShare.classList.add('hidden');
  }
};
open[0].addEventListener('click', handlerDesign);
open[1].addEventListener('click', handlerFill);
open[2].addEventListener('click', handlerShare);
