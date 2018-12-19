'use strict';
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
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  divPreviewImage.style.backgroundImage = `url(${fr.result})`;
  dataJason.photo = fr.result;
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);
