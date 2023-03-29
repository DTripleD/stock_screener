import debounce from 'lodash.debounce';

const input = document.querySelector("#stock-list");
const btn = document.querySelector(".button");
const list = document.querySelector(".stock-list");
const form = document.querySelector(".form");
const calendar = document.querySelector(".calendar-list");
const holydays = document.querySelector(".calendar-table");


input.addEventListener("input", debounce(responseOfInput, 1000));

function showStocks(name){
    const API_KEY = "UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP"; 
    return fetch(`https://api.polygon.io/v2/aggs/ticker/${name}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`).then((response) => { return response.json()})
}

function responseOfInput(event){
    event.preventDefault();
    const stockNameInput = event.target.value;

    return showStocks(stockNameInput.toUpperCase()).then((data) => markup(data));
}


function markup(data){
    console.log(data);
    return list.innerHTML = listOfStocks(data);
}

function listOfStocks(data){
    const {ticker} = data;
    return `<li><p>${ticker}</p></li>`
}

function marketHolidays(){
    const API_KEY = "UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP"; 
    return fetch(`https://api.polygon.io/v1/marketstatus/upcoming?apiKey=${API_KEY}`).then((response) => { return response.json()})
}


marketHolidays().then((data) => markupForCalendar(data)).catch(console.log)

function markupForCalendar(data) {
    holydays.innerHTML = data.map(({date, exchange, name, status}) => {
        return `<tr>
                    <td>${date}</td>
                    <td>${exchange}</td>
                    <td>${name}</td>
                    <td>${status}</td>
                </tr>`
    }).join("");
}


// `<li>
//                     <p>Date: ${date}</p>
//                     <p>Exchange: ${exchange}</p>
//                     <p>Name of holyday: ${name}</p>
//                     <p>Market status: ${status}</p>
//                 </li>`