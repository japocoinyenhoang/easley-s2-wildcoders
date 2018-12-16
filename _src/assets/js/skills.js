'use strict';
//Hacer la petición de las Skills
let apiSkills;

const skillsForm = document.querySelector('.form__skills-datacheckbox');
const paintSkillsContainer = document.querySelector('.card__skills');

function askForSkills() {
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(apiSkillsResponse => apiSkillsResponse.json())
    .then(apiSkillsData => {
      //Hay que declarar la variable como array (vacío) y no con comillas simples porque si no devuelve una cadena.
      let emptySkills = [];
      //Declaras una nueva variable para definir la longitud del array
      const skillsLength = apiSkillsData.skills.length;
      //Haces un bucle para recorrer la información recibida. Si en vez de skillsLength pones  apiSkillsData.skills.length no funciona, por eso hemos declarado previamente una variable
      for (let i = 0; i < skillsLength; i++) {
        //Push sirve para meter dentro del array vació los elementos del array que hemos recibido
        emptySkills.push(apiSkillsData.skills[i]);
        skillsForm.innerHTML += `<div class="form__skills">
        <label for="skills-data">
            <input id="skills-data1" class="skills__checkbox" type="checkbox" value="${[i]}" name="${emptySkills[i]}">
            ${emptySkills[i]}
        </label></div>
        `;
      }

      const checkList = document.querySelectorAll('.skills__checkbox');

      // LIMITAR A 3 MAXIMO
      function checkBoxLimit() {
        // creo un contador para que me cuente los checks y lo pongo a cero
        let count = 0;
        // para la lista que me cree, cuadno se chequee, que me vaya sumando.
        for (let i = 0; i < checkList.length; i++) {
          if (checkList[i].checked) {
            count += 1;
          }
        }
        // si selecionas 3 o mas de tres,
        if (count >= 3) {
          for (let i = 0; i < checkList.length; i++) {
            //! devuelve el valor contrario al valor dado.
            // no me dejes clickear más = deja que el resto este sin uso.
            if (!checkList[i].checked) {
              checkList[i].disabled = true;
            }
          }

        } else {
          for (let i = 0; i < checkList.length; i++) {
            if (!checkList[i].checked) {
              checkList[i].disabled= false;

            }
          }
        }
      }

      //FUNCIONA CON UNO
      // const checkList = document.querySelector('.skills__checkbox');
      // const paintSkillsContainer= document.querySelector('.card__skills');
      // const nonCheckSkills=checkList.checked;
      // console.log (nonCheckSkills);
      // const skillCheck = (e) => {
      //   const b = e.currentTarget;
      //   const isChecked = b.checked;
      //   console.log(isChecked);
      //   if (isChecked===true){
      //     paintSkillsContainer.innerHTML=`<li id="skill__1" class="card__skills-item card__skills-item__color1">html</li>`;
      //   }
      // }
      // checkList.addEventListener('click', skillCheck);

      function skillCheck() {
        // Sacamos el valor checkeado de colors para luego aplicar el style correspondiente
        let p = '';
        for (const c of colors) {
          if (c.checked === true) {
            p = parseInt(c.value);
          }
        }
        // Recorremos las skills y modificamos el estilo segun correponda
        let skillsTags = '';
        for (const forCheck of checkList) {
          if (forCheck.checked === true) {
            let cardItemcolor = '';
            if (p === 3) {
              cardItemcolor = 'card__skills-item__color3';
            } else if (p === 2) {
              cardItemcolor = 'card__skills-item__color2';
            } else {
              cardItemcolor = 'card__skills-item__color1';
            }

            skillsTags = skillsTags + `<li class="card__skills-item ${cardItemcolor}">${forCheck.name}</li>`;
          }
        }

        checkBoxLimit();

        paintSkillsContainer.innerHTML = skillsTags;

        // for (const check of checkList) {
        //   check.addEventListener('click', skillCheck);
        // }
      }

      for (let i = 0; i < checkList.length; i++) {
        checkList[i].addEventListener('click', skillCheck);
      }
    });

}

askForSkills();


// const skillCheck = (e) => {
//   const paco = e.currentTarget;
//   const isChecked = paco.checked;
//   console.log(isChecked);
// if (isChecked === true) {
//   paintSkillsContainer.innerHTML += `<li class="card__skills-item card__skills-item__color1">${paco.name}</li>`;
// } else if (isChecked === false) {
//   paintSkillsContainer.remove(`<li class="card__skills-item card__skills-item__color1">${paco.name}</li>`);
// }

// for (const check of checkList) {
//   check.addEventListener('click', skillCheck);
// }
// for(let i=0; i<checkList[i].length;i++){
//   console.log(checkList[i]);
//   }

// function checkBoxLimit() {
//   const checkBoxGroup = document.querySelectorAll('.skills__checkbox');
//   const limit = 3;
//   for (let i = 0; i < checkBoxGroup.length; i++) {
//     checkBoxGroup[i].onclick = function () {
//       let checkedcount = 0;
//       for (let i = 0; i < checkBoxGroup.length; i++) {
//         checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
//       }
//       if (checkedcount > limit) {
//         alert("Elige un máximo de " + limit + " habilidades.");
//         this.checked = false;
//       }
//     }
//   }
// }
