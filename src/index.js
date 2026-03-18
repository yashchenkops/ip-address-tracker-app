import { validateIp } from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

ipInput.addEventListener('keydown', handleKey);
btn.addEventListener('click', getData);

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_FF8gtn6mJwSUjHXWQpsjShtUPYryJ&ipAddress=${ipInput.value}`)
      .then((response) => response.json())
      .then(console.log);
  }
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}
