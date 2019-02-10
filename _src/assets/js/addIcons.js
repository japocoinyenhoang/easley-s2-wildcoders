'use strict';
const iconContainer=document.querySelector('.card__contact');
const allData = document.querySelectorAll('.info__details');
const email = document.getElementById('email');
const emailIcon=document.getElementById('icon__email');

function fillEmail(e) {
  const emailField = e.currentTarget;
  dataJason.email = emailField.value;
  if (email.value.length !== 0) {
    contactIcons[1].classList.remove('hidden');
    contactIcons[1].classList.remove('opacity');

    email.value = emailField.value;
  } else {
    contactIcons[1].classList.add('hidden');
    contactIcons[1].classList.add('opacity');
  }
}
email.addEventListener('input', fillEmail);


const phoneNumber = document.getElementById('phone__number');
const phoneIcon= document.getElementById('icon__phone');

function fillPhone(e) {
  const phoneField = e.currentTarget;
  dataJason.phone = phoneField.value;
  if (phoneNumber.value.length !== 0) {
    contactIcons[0].classList.remove('hidden');
    contactIcons[0].classList.remove('opacity');
    phoneNumber.value = phoneField.value;
  } else {
    contactIcons[0].classList.add('hidden');
    contactIcons[0].classList.add('opacity');
  }
}
phoneNumber.addEventListener('input', fillPhone);

const linkedin = document.getElementById('linkedin__net');

function fillLinkedin(e) {
  const linkedinField = e.currentTarget;
  dataJason.linkedin = linkedinField.value;
  if (linkedin.value.length !== 0) {
    contactIcons[2].classList.remove('hidden');
    contactIcons[2].classList.remove('opacity');

    linkedin.value = linkedinField.value;
  } else {
    contactIcons[2].classList.add('hidden');
    contactIcons[2].classList.add('opacity');
  }
}
linkedin.addEventListener('input', fillLinkedin);

const github = document.getElementById('gitHub__net');

function fillGithub(e) {
  const githubField = e.currentTarget;
  dataJason.github = githubField.value;
  if (github.value.length !== 0) {
    contactIcons[3].classList.remove('hidden');
    contactIcons[3].classList.remove('opacity');

    github.value = githubField.value;
  } else {
    contactIcons[3].classList.add('hidden');
    contactIcons[3].classList.add('opacity');
  }
}

github.addEventListener('input', fillGithub);



