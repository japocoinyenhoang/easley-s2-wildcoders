'use strict';

//Sustituir nombre y profesión
const job = document.querySelector('#job');
const name = document.querySelector('#fullName');
const cardJob = document.querySelector('.card__data-job');
const cardName = document.querySelector('.card__data-name');

function fillName(event) {
  const nameField = event.currentTarget;
  cardName.innerHTML = nameField.value;
}

name.addEventListener('keyup', fillName);

function fillJob(event) {
  const jobField = event.currentTarget;
  cardJob.innerHTML = jobField.value;
}

job.addEventListener('keyup', fillJob);



//Paleta de colores
const colors = document.querySelectorAll('.radio__button--color');

//Objeto HTML que cambia de color
const cardData = document.querySelector('.card__data');

//Listas de objetos HTML que cambian de color
const contactIcons = document.querySelectorAll('.contact-icons');
const skillsTags = document.querySelectorAll('.card__skills-item');
function applyPalette(e) {
  const p = parseInt(e.currentTarget.value);
  console.log('>', p);

  if (p === 1) {
    /* En el caso del cardData, lo estamos manejando como un objeto HTML.
    Igual que en el ejemplo CodePen de Carlos */

    //Objeto cardData
    cardData.classList.add('card-data__color1');
    cardData.classList.remove('card-data__color2', 'card-data__color3');

    /* Pero en el caso de los iconos y los skills, estos tienen que ser manejados como
    listas de objetos HTML. Por eso usamos "querySelectorAll" en lugar de "querySelector" y
    hacemos un "for" para aplicar los cambios a todos sus elementos */

    //Lista de Iconos
    for (const icon of contactIcons) {
      icon.classList.add('contact-icons__color1');
      icon.classList.remove('contact-icons__color2', 'contact-icons__color3');
    }

    //Lista de Tags
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
// En este caso, no se porque... no me funciona con 'click' y si con 'change'
for (const c of colors) {
  c.addEventListener('change', applyPalette);
}

// skills
// lista de objetos que aparecen y desaparecen cuadno los selecciono en fill.card
// const skillsTags = document.querySelectorAll('.card__skills-item'); que ya esta definido arriba para los tres.
// y para cada uno de ellos:

const htmlSkill = document.getElementById('skills-data1');
const cssSkill = document.getElementById('skills-data2');
const gulpSkill = document.getElementById('skills-data3');

// const Skills =[htmlSkill,cssSkill,gulpSkill];

// si estas seleccionados que se quite la clase que les mantiene ocultos
let chb = '';
const skillCheck =()=> {
  chb = document.querySelectorAll('skills__checkbox');

  for (const sk of skillsTags){
    sk.classList.add('hidden');
    sk.classList.remove('hidden');
    if (htmlSkill.checked) {
      sk.classList.remove('hidden');

    }
    if (cssSkill.checked) {
      sk.classList.remove('hidden');
    }
    if (gulpSkill.checked) {
      sk.classList.remove('hidden');
    }
  }
};

htmlSkill.addEventListener('change', skillCheck());
cssSkill.addEventListener('change', skillCheck());
gulpSkill.addEventListener('change', skillCheck());
