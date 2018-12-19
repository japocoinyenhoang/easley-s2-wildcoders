'use strict';
const twitterDiv = document.querySelector('.share__twitter');
const cardCreator = document.querySelector('.btn__create-card');
const twitter = document.querySelector('.twitter-share-button');
function sendCard() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(dataJason),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(urlResponse => urlResponse.json())
    .then(url => {
      // twitterDiv.innerHTML = `<a href="${url.cardURL}" target="_blank">${url.cardURL}</a>`;
      const twitterUrl = document.createElement('div');
      const urlResult = document.createTextNode(`${url.cardURL}`);
      twitterUrl.className = 'twitter__card--url';
      twitterUrl.appendChild(urlResult);
      twitterDiv.appendChild(twitterUrl);
      twitter.href = `https://twitter.com/intent/tweet?text=Esta%20es%20mi%20tarjeta%3A&hashtags=adalab%20${url.cardURL}`;
    });
  createCard();
}

//Cuando pulse en crear tarjeta
function createCard() {
  //Le añades una clase que para que no sea naranja
  cardCreator.classList.add('btn__create-card--done');
  //Le quitas la clase twitter_ hidden a twitterDiv
  twitterDiv.classList.remove('twitter__hidden');
}
cardCreator.addEventListener('click', sendCard);

//Envías datos a la API
//y devuelves la URL de la API

console.log(dataJason);


//Hay que revisar que cuando están colapsados no hay margin-bottom en form__fieldset pero cuando se abren sí
