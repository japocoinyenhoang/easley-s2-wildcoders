'use strict';
const job = document.querySelector('#job');
const name = document.querySelector('#fullName');
const cardJob = document.querySelector('.card__data-job');
const cardName = document.querySelector('.card__data-name');

function fillName(event) {
  const nameField = event.currentTarget;
  if (nameField.value !== '') {
    cardName.innerHTML = nameField.value;
  } else {
    cardName.innerHTML = 'Nombre y Apellido';
  }
  dataJason.name = nameField.value;
}

name.addEventListener('keyup', fillName);

function fillJob(event) {
  const jobField = event.currentTarget;

  if (jobField.value !== '') {
    cardJob.innerHTML = jobField.value;
  } else {
    cardJob.innerHTML = 'Front end Developer';
  }

  dataJason.job = jobField.value;
}

job.addEventListener('keyup', fillJob);
