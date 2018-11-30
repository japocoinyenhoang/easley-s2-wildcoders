'use strict';

const job = document.querySelector('#job');
const eventExample = document.querySelector('.event__example');

const fillField = (event) => {
   const guilty = event.target;
   eventExample.innerHTML = guilty.value;
}

job.addEventListener('keyup', fillField);