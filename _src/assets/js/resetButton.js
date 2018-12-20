'use strict';

let dataJason = {
  "name": "",
  "job": "",
  "photo": "",
  "palette": 1,
  "typography": 1,
  "email": "",
  "phone": "",
  "linkedin": "",
  "github": "",
  "skills": ["", "", ""]
};

const dataDefault = {
  "name": "",
  "job": "",
  "photo": "",
  "palette": 1,
  "typography": 1,
  "email": "",
  "phone": "",
  "linkedin": "",
  "github": "",
  "skills": ["", "", ""]
};

const btnReset = document.querySelector('.btn__reset');

const resetJason = () => {
  cardName.innerHTML = 'Nombre y Apellido';
  name.value = '';

  cardJob.innerHTML = 'Front end Developer';
  job.value = '';

  profileImage.style.backgroundImage = '';
  divPreviewImage.style.backgroundImage = '';

  phoneNumber.value = '';
  contactIcons[0].classList.add('opacity');

  email.value = '';
  contactIcons[1].classList.add('opacity');

  linkedin.value = '';
  contactIcons[2].classList.add('opacity');

  github.value = '';
  contactIcons[3].classList.add('opacity');

  cardData.classList.add('card-data__color1');
  cardData.classList.remove('card-data__color2', 'card-data__color3');

  for (const icon of contactIcons) {
    icon.classList.add('contact-icons__color1');
    icon.classList.remove('contact-icons__color2', 'contact-icons__color3');
  }

  paintSkillsContainer.innerHTML = '<li class="card__skills-item card__skills-item__color1  opacity">html</li><li class="card__skills-item card__skills-item__color1  opacity">css</li><li class="card__skills-item card__skills-item__color1  opacity">gulp</li>';

  const checkList = document.querySelectorAll('.skills__checkbox');
  for (let i = 0; i < checkList.length; i++) {
    checkList[i].checked = false;
  }

  colors[0].checked = true;

  cardName.classList.remove('typo-2', 'typo-3');
  cardJob.classList.remove('typo-2', 'typo-3');

  inputRadio[0].checked = true;

  dataJason = dataDefault;
};

btnReset.addEventListener('click', resetJason);
