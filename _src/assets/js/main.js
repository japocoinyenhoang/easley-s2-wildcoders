'use strict';




//Sustituir nombre y profesión
const job = document.querySelector('#job');
const name = document.querySelector('#fullName');
const cardJob = document.querySelector('.card__data-job');
const cardName = document.querySelector('.card__data-name');

const dataJason = {
  "name": "",
  "job": "",
  "photo": "",
  "palette": "",
  "typography": "",
  "email": "",
  "phone": "",
  "linkedin": "",
  "github": "",
  "skills": ["", "", ""]
};


console.log(dataJason);

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
  dataJason.palette = p;

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




// Añadir imagen

const fr = new FileReader();
const uploadBtn = document.querySelector('.btn__add-img');
const fileField = document.querySelector('#btn__add-img');
const profileImage = document.querySelector('.card__img');
const divPreviewImage = document.querySelector('.square__img');

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
  dataJason.photo = myFile;

}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  divPreviewImage.style.backgroundImage = `url(${fr.result})`;
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);


