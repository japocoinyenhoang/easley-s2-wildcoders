'use strict';
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
'use strict';

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

  //Paleta de colores por defecto
  cardData.classList.add('card-data__color1');
  cardData.classList.remove('card-data__color2', 'card-data__color3');

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

  colors[0].checked = true;

  //Tipografía por defecto
  cardName.classList.remove('typo-2', 'typo-3');
  cardJob.classList.remove('typo-2', 'typo-3');

  inputRadio[0].checked = true;
};

btnReset.addEventListener('click', resetJason);
