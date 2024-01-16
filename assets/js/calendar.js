



function createCalendar(elem, year, month) {

  let events = [
    {
      start: '1',
      month: '11',
      end: '3'
    },
    {
      start: '6',
      month: '10',
      end: '7'
    }

  ]

  elem = document.querySelector(elem);
  let calendarMonthYear = document.querySelector(".calendar-month-year");
  let mon = month - 1;
  const date = new Date(year, mon);
  const monthName = date.toLocaleString("default", { month: "long" });
  let d = new Date(year, mon);

  calendarMonthYear.innerHTML = `${monthName} ${year}`;

  const monthName = date.toLocaleString("default", { month: "long" });
  let d = new Date(year, mon);

  calendarMonthYear.innerHTML = `${monthName} ${year}`;

  let table = `
      <div id="calendar-frame">
        <table class="curr">
          <tbody>
            <tr>
    `;

  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
    table += "<td></td>";
  }

  while (d.getMonth() == mon) {

    table += "<td>" + d.getDate() + "</td>";
    if (getDay(d) % 7 == 6) {
      table += "</tr><tr>";
      table += "</tr><tr>";
    }
    d.setDate(d.getDate() + 1);
    d.setDate(d.getDate() + 1);
  }
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
      table += "<td></td>";
    }
  }

  table += `</tr></tbody>
        </table>
      </div>`;

  elem.innerHTML = table;



  calendarTd = document.querySelectorAll('.curr td')
  console.log(mon);
  console.log(events);
  events.forEach(event => {
    calendarTd.forEach(element => {
      if (Number(element.innerHTML) >= event.start && Number(element.innerHTML) <= event.end && month == event.month) {
        element.classList.add("event-active")
      }
    });
  });

}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
  return day - 1;
}

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let year = new Date().getFullYear();
let month = new Date().getMonth();
createCalendar("#calendar-frame", year, month + 1);
prev.addEventListener("click", () => {
  month--;
  if (month == -1) {
    year--;
    month = 11;
  }
  createCalendar("#calendar-frame", year, month + 1);
});
next.addEventListener("click", () => {
  month++;
  if (month == 12) {
    year++;
    month = 0;
  }
  createCalendar("#calendar-frame", year, month + 1);
});
let month = new Date().getMonth();
createCalendar("#calendar-frame", year, month + 1);
prev.addEventListener("click", () => {
  month--;
  if (month == -1) {
    year--;
    month = 11;
  }
  createCalendar("#calendar-frame", year, month + 1);
});
next.addEventListener("click", () => {
  month++;
  if (month == 12) {
    year++;
    month = 0;
  }
  createCalendar("#calendar-frame", year, month + 1);
});
