'use strict';
//CAMBIAR TIPOGRAFIA

const inputRadio = document.querySelectorAll('.typo__radio');

function applyTypo(e) {
  const q = parseInt(e.currentTarget.value);
  dataJason.typography = q;


  if (q === 1) {
    // typo por defecto
    cardName.classList.remove('typo-2', 'typo-3');
    cardJob.classList.remove('typo-2', 'typo-3');
  } else if (q === 2) {
    // typo 2
    cardName.classList.add('typo-2');
    cardName.classList.remove('typo-3');
    cardJob.classList.add('typo-2');
    cardJob.classList.remove('typo-3');
  } else {
    // typo 3
    cardName.classList.add('typo-3');
    cardName.classList.remove('typo-2');
    cardJob.classList.add('typo-3');
    cardJob.classList.remove('typo-2');
  }
}

for (const t of inputRadio) {
  t.addEventListener('click', applyTypo);
}
