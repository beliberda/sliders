

function createCalendar(elem, year, month) {
  elem = document.querySelector(elem)
  let mon = month - 1
  const date = new Date(year, mon);
  const monthName = date.toLocaleString('default', { month: 'long' });
  let d = new Date(year, mon)
  let table = `
    <div class="calendar-header">
        <span class="calendar-left-button" id="prev"> &#9668;</span>

        <span class="calendar-month-year" id="label">${monthName} ${year}</span>

        <span class="calendar-right-button" id="next"> &#9658;</span>
      </div>
      <table id="days">
        <tbody>
          <td>Пн</td>
          <td>Вт</td>
          <td>Ср</td>
          <td>Чт</td>
          <td>Пт</td>
          <td>Сб</td>
          <td>Вс</td>
        </tbody>
      </table>
      <div id="calendar-frame">
        <table class="curr">
          <tbody>
            <tr>
          
    `

  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>'
  }

  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>'
    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>'
    }
    d.setDate(d.getDate() + 1)
  }
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>'
    }
  }

  table += `</tr></tbody>
        </table>
      </div>`

  elem.innerHTML = table
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1
}





document.addEventListener("DOMContentLoaded", () => {


});

let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
console.log(prev);
let year = new Date().getFullYear();
let month = new Date().getMonth()
createCalendar('#calendar', year, month + 1)
prev.addEventListener('click', () => {
  console.log('dwqdw');
  month = month - 1
  createCalendar('#calendar', year, month + 1)
})
