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






// // telefono, mail, linkedin, github

let checkedValue = document.querySelector('.message__checkbox:checked').value;
checkedValue =null;

const mailInfo = document.getElementById('card__mail');
const phoneInfo = document.getElementById('card__phone');
const linkedinInfo = document.getElementById('card__linkedin');
const githubInfo = document.getElementById('card__github');

const field = document.querySelectorAll('.block');

function writeMe(e) {
  const text = e.currentTarget.value;
  const destID = e.currentTarget.getAttribute('data-dest');
  const ico = e.currentTarget.getAttribute('data-ico');
  document.querySelector(destID).innerHTML = ico + ': ' + text;

}

for (const i of field) {
  i.addEventListener('keyup', writeMe)
}


// let email = document.getElementById('email');
// //On Input Change Events
// email.addEventListener('input', function () {
//    if (email.value.length == 0) {
//        document.getElementById('card__icon--mail').innerHTML = 'pepa pig';
//    } else {
//        document.getElementById('card__icon--mail').innerHTML = this.value;
//    }
// });


// //Seleccionar Skills

// // tengo tres botones, 
// // por defecto aparecen las tres
// // cuadno selecciono cualquiera de ellas desaparecen todas y aparece solo la que he cliqueado o las que he cliqueado en orden

// // de donde las cojo
// const htmlSkill=document.getElementById('skills__data--html');
// const cssSkill=document.getElementById('skills__data--css');
// const gulpSkill=document.getElementById('skills__data--gulp');

// // donde estan sus iconos
// const htmlIcon = document.querySelector('.card__skills--html');
// const cssIcon = document.querySelector ('.card__skills--css');
// const gulpIcon = document.querySelector ('.card__skills--gulp');






// function fillSkills(event){
//   const SkillField = event.currentTarget;
//   card__skills.innerHTML = SkillFiel.value;
// }

// htmlSkill.addEventListener('keyup', fillSkills);


// // const skills=[htmSkill, cssSkill, gulpSkill];
// // para añadir o eliminar la clase .hidden
// 
// ​
// // Si contiene la clase hidden
// 
//   // Elimina la clase
//   
// 
//   // Añade la clase hidden
//   
// }


function deleteArrowItem() {
  const activableSection = document.querySelector('.card__skills-item');
  if (activableSection.classList.contains('hidden')) {
    activableSection.classList.remove('hidden');
  } else {
    activableSection.classList.add('hidden');
  }

  let checkedValue = document.querySelector('.message__checkbox:checked').value;
  // checkedValue =null;
  let inputElements = document.getElementsByClassName('message__checkbox');
  skills.length = 0;
  for (let i = 0; skills.length <= 3; ++i) {
    if (htmlSkill.value == checked) {
      card__skills.innerHTML(htmlIcon);
      break;

    }

  }
}