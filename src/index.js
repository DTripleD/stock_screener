import debounce from 'lodash.debounce';

const input = document.querySelector("#stock-list");
const btn = document.querySelector(".button");
const list = document.querySelector(".stock-list");


input.addEventListener("input", debounce(responseOfInput, 1000));

function showStocks(name){
    const API_KEY = "UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP";
    return fetch(`https://api.polygon.io/v2/aggs/ticker/${name}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP`).then((response) => { return response.json()})
}








function responseOfInput(event){
    const stockNameInput = event.target.value;

    showStocks(stockNameInput).then((data) => markup(data));
}


function markup(data){
    console.log(data);
    return list.innerHTML = listOfStocks(data);
}

function listOfStocks(data){
    const {ticker} = data;
    return `<li><p>${ticker}</p></li>`
}
