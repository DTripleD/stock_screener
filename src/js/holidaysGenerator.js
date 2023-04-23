import {marketHolidays} from '../js/fetchData'

// const calendar = document.querySelector(".calendar-list");
const holydays = document.querySelector(".calendar-table");

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
