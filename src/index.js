import { validateIp } from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');
const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

ipInput.addEventListener('keydown', handleKey);
btn.addEventListener('click', getData);

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_FF8gtn6mJwSUjHXWQpsjShtUPYryJ&ipAddress=${ipInput.value}`)
      .then((response) => response.json())
      .then(setInfo);
  }
}

function setInfo(mapData) {
  console.log(mapData);
  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = mapData.location.country + ', ' + mapData.location.region;
  timezoneInfo.innerText = mapData.location.timezone;
  ispInfo.innerText = mapData.isp;
}