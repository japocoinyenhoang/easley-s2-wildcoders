'use strict';

const inputRadio = document.querySelectorAll('.typo__radio');

function applyTypo(e) {
  const q = parseInt(e.currentTarget.value);
  dataJason.typography = q;

  if (q === 1) {
    cardName.classList.remove('typo-2', 'typo-3');
    cardJob.classList.remove('typo-2', 'typo-3');
  } else if (q === 2) {
    cardName.classList.add('typo-2');
    cardName.classList.remove('typo-3');
    cardJob.classList.add('typo-2');
    cardJob.classList.remove('typo-3');
  } else {
    cardName.classList.add('typo-3');
    cardName.classList.remove('typo-2');
    cardJob.classList.add('typo-3');
    cardJob.classList.remove('typo-2');
  }
}

for (const t of inputRadio) {
  t.addEventListener('click', applyTypo);
}
