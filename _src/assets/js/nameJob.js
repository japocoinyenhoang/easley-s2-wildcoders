'use strict';
//Sustituir nombre y profesión
const job = document.querySelector('#job');
const name = document.querySelector('#fullName');
const cardJob = document.querySelector('.card__data-job');
const cardName = document.querySelector('.card__data-name');

function fillName(event) {
  const nameField = event.currentTarget;
  cardName.innerHTML = nameField.value;
  dataJason.name = nameField.value;
}

name.addEventListener('keyup', fillName);

function fillJob(event) {
  const jobField = event.currentTarget;
  cardJob.innerHTML = jobField.value;
  dataJason.job = jobField.value;

}

job.addEventListener('keyup', fillJob);
