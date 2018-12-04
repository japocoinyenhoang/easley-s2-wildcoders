'use strict';

//Sustituir nombre y profesión
const job = document.querySelector('#job');
const name = document.querySelector('#fullName');
const cardJob = document.querySelector('.card__data-job');
const cardName = document.querySelector('.card__data-name');

function fillName(event){
  const nameField = event.currentTarget;
  cardName.innerHTML = nameField.value;
}

name.addEventListener('keyup', fillName);

function fillJob(event){
  const jobField = event.currentTarget;
  cardJob.innerHTML = jobField.value;
}

job.addEventListener('keyup', fillJob);

//Paleta de colores
const colors = document.querySelectorAll('.radio_button--color');
const contactIcons = document.querySelector('.contact-icons');
const cardContact = document.querySelectorAll('.card__contact');
//const bgSkills = document.querySelector('.card__skills-item');

function applyPalette(e) {
  const p = e.currentTarget.value;
  console.log('>',p);
  
  if (p === 1) {
    // paleta por defecto
    cardContact.classList.remove('contact-icons__color2', 'contact-icons__color3');
  } else if (p === 2) {
    // paleta 2
    card.classList.add('contact-icons__color2');
    card.classList.remove('contact-icons__color1', 'contact-icons__color3');
  } else {
    // paleta 3
    card.classList.add('contact-icons__color3');
    card.classList.remove('contact-icons__color1', 'contact-icons__color2');
  }
}

for (const c of colors) {
  c.addEventListener('click', applyPalette);
}