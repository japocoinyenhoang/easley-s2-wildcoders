'use strict';
//Sustituir nombre y profesión
const job = document.querySelector('#job');
const name = document.querySelector('#fullName');
const cardJob = document.querySelector('.card__data-job');
const cardName = document.querySelector('.card__data-name');

function fillName(event) {
  const nameField = event.currentTarget;
  dataJason.name = nameField.value;
  myLocalStorage('name', nameField.value);
  let savedName = localStorage.getItem('name');
  if (savedName.includes(JSON.stringify(nameField.value))) {
    cardName.innerHTML = savedName;
  }
  else if (nameField.value !== '') {
    cardName.innerHTML = nameField.value;
  } else {
    cardName.innerHTML = 'Nombre y Apellido';
  }

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
  myLocalStorage('job', jobField.value);
}

job.addEventListener('keyup', fillJob);
