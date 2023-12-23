
const currentDate = document.querySelector('.cal-date');
const prevNextBtn = document.querySelectorAll(".icons span");
const daysTag = document.querySelector('.days');

let date = new Date();

const calDate = date.getDate();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function renderCalender() {

  let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(); /*get first day of month for current year*/
  let dateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); /*get all date of month for current year*/
  let lastDayofMonth = new Date(currentYear, currentMonth, dateofMonth).getDay(); /*get last day of month for current year*/
  let prevMonthDate = new Date(currentYear, currentMonth, 0).getDate(); /*get dates of previous month of the year*/

  let liTag = "";

  /*display last dates of month*/
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${prevMonthDate - i + 1}</li>`;
  }

  /*display all dates of the current month*/

  for (let i = 1; i <= dateofMonth; i++) {

    /*now we apply the active class of the current date of the month*/
    let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";

    liTag += `<li class="${isToday}">${i}</li>`;

  }

  /*display next dates of month*/
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  /*display title (current[date month year])*/
  currentDate.innerText = `${calDate} ${monthList[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;

};

renderCalender();

prevNextBtn.forEach(icons => {
  icons.addEventListener("click", () => {
    currentMonth = icons.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    }
    // else{
    date = new Date();
    // }
    renderCalender();
  })
})
