'use strict';
const colors = document.querySelectorAll('.radio__button--color');
const cardData = document.querySelector('.card__data');
const contactIcons = document.querySelectorAll('.contact-icons');

function applyPalette(e) {
  const p = parseInt(e.currentTarget.value);
  const skillsTags = document.querySelectorAll('.card__skills-item');
  dataJason.palette = p;

  if (p === 1) {
    cardData.classList.add('card-data__color1');
    cardData.classList.remove('card-data__color2', 'card-data__color3');
    for (const icon of contactIcons) {
      icon.classList.add('contact-icons__color1');
      icon.classList.remove('contact-icons__color2', 'contact-icons__color3');
    }
    for (const tag of skillsTags) {
      tag.classList.add('card__skills-item__color1');
      tag.classList.remove('card__skills-item__color2', 'card__skills-item__color3');
    }
  } else if (p === 2) {
    cardData.classList.add('card-data__color2');
    cardData.classList.remove('card-data__color1', 'card-data__color3');
    for (const icon of contactIcons) {
      icon.classList.add('contact-icons__color2');
      icon.classList.remove('contact-icons__color1', 'contact-icons__color3');
    }
    for (const tag of skillsTags) {
      tag.classList.add('card__skills-item__color2');
      tag.classList.remove('card__skills-item__color1', 'card__skills-item__color3');
    }
  } else {
    cardData.classList.add('card-data__color3');
    cardData.classList.remove('card-data__color1', 'card-data__color2');
    for (const icon of contactIcons) {
      icon.classList.add('contact-icons__color3');
      icon.classList.remove('contact-icons__color1', 'contact-icons__color2');
    }
    for (const tag of skillsTags) {
      tag.classList.add('card__skills-item__color3');
      tag.classList.remove('card__skills-item__color1', 'card__skills-item__color2');
    }
  }
}

for (const c of colors) {
  c.addEventListener('change', applyPalette);
}
