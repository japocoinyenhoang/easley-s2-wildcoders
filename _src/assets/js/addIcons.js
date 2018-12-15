'use strict';
// DATOS: MAIL, TELEFONO, LINKEDIN, GITHUB

// ya definido arriba const contactIcons = document.querySelectorAll('.contact-icons');

// quiero que todos los campos si tienen la clase hidden. que la eliminen
// hasta que uno de los campos tenga un valor no igual a vacio.
const iconContainer=document.querySelector('.card__contact');
const allData = document.querySelectorAll('.info__details');
const email = document.getElementById('email');

function fillEmail(e) {
  const emailField = e.currentTarget;
  dataJason.email = emailField.value;
  if (email.value.length !== 0) {
    contactIcons[1].classList.remove('hidden');
    email.value = emailField.value;
  } else {
    contactIcons[1].classList.add('hidden');
    console.log('este campo esta vacio');
  }
}
email.addEventListener('input', fillEmail);


const phoneNumber = document.getElementById('phone__number');

function fillPhone(e) {
  const phoneField = e.currentTarget;
  dataJason.phone = phoneField.value;
  if (phoneNumber.value.length !== 0) {
    contactIcons[0].classList.remove('hidden');
    phoneNumber.value = phoneField.value;
  } else {
    contactIcons[0].classList.add('hidden');
    console.log('este campo esta vacio');
  }
}
phoneNumber.addEventListener('input', fillPhone);


const linkedin = document.getElementById('linkedin__net');

function fillLinkedin(e) {
  const linkedinField = e.currentTarget;
  dataJason.linkedin = linkedinField.value;
  if (linkedin.value.length !== 0) {
    contactIcons[2].classList.remove('hidden');
    linkedin.value = linkedinField.value;
  } else {
    contactIcons[2].classList.add('hidden');
    console.log('este campo esta vacio');
  }
}
linkedin.addEventListener('input', fillLinkedin);


const github = document.getElementById('gitHub__net');

function fillGithub(e) {
  const githubField = e.currentTarget;
  dataJason.github = githubField.value;
  if (github.value.length !== 0) {
    contactIcons[3].classList.remove('hidden');
    github.value = githubField.value;
  } else {
    contactIcons[3].classList.add('hidden');
    console.log('este campo esta vacio');
  }
}
github.addEventListener('input', fillGithub);



