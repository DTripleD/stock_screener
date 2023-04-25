import debounce from 'lodash.debounce';
import { showStocks } from './js/fetchData';

import './js/holidaysGenerator';

const input = document.querySelector('#stock-list');
const btn = document.querySelector('.button');
const list = document.querySelector('.stock-list');
const form = document.querySelector('.form');

input.addEventListener('input', debounce(responseOfInput, 1000));

function responseOfInput(event) {
  event.preventDefault();
  const stockNameInput = event.target.value;

  return showStocks(stockNameInput.toUpperCase()).then(data => {
    if (data.queryCount === 0) {
      return;
    }
    return markup(data);
  });
}

function markup(data) {
  console.log(data);
  return (list.innerHTML = listOfStocks(data));
}

function listOfStocks(data) {
  const { ticker } = data;
  return `<li class="searced__stock list"><p>${ticker}</p></li>`;
}
