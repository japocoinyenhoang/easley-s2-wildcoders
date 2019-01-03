'use strict';

let apiSkills;

const skillsForm = document.querySelector('.form__skills-datacheckbox');
const paintSkillsContainer = document.querySelector('.card__skills');

function askForSkills() {
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(apiSkillsResponse => apiSkillsResponse.json())
    .then(apiSkillsData => {
      let emptySkills = [];
      const skillsLength = apiSkillsData.skills.length;
      for (let i = 0; i < skillsLength; i++) {
        emptySkills.push(apiSkillsData.skills[i]);
        skillsForm.innerHTML += `<div class="form__skills">
        <label for="skills-data">
            <input id="skills-data1" class="skills__checkbox" type="checkbox" value="${[i]}" name="${emptySkills[i]}">
            ${emptySkills[i]}
        </label></div>
        `;
      }

      const checkList = document.querySelectorAll('.skills__checkbox');

      function checkBoxLimit() {
        let count = 0;
        for (let i = 0; i < checkList.length; i++) {
          if (checkList[i].checked) {
            count += 1;
          }
        }
        if (count >= 3) {
          for (let i = 0; i < checkList.length; i++) {
            if (!checkList[i].checked) {
              checkList[i].disabled = true;
            }
          }

        } else {
          for (let i = 0; i < checkList.length; i++) {
            if (!checkList[i].checked) {
              checkList[i].disabled = false;

            }
          }
        }
      }

      function skillCheck() {
        let p = '';
        for (const c of colors) {
          if (c.checked === true) {
            p = parseInt(c.value);
          }
        }
        let skillsTags = '';
        let arraySkills = [];

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
            skillsTags += `<li class="card__skills-item ${cardItemcolor}">${forCheck.name}</li>`;
            arraySkills.push(forCheck.name);
          }
        }

        dataJason.skills = arraySkills;

        checkBoxLimit();

        paintSkillsContainer.innerHTML = skillsTags;
      }

      for (let i = 0; i < checkList.length; i++) {
        checkList[i].addEventListener('click', skillCheck);
      }
    });
}

askForSkills();
