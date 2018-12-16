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
      console.log(url.cardURL);
      twitterDiv.innerHTML = `<a href="${url.cardURL}" target="_blank">${url.cardURL}</a>`;

      twitter.href = `https://twitter.com/intent/tweet?text=Puedes%ver%tu%tarjeta%aquí%${url.cardURL}`;
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
