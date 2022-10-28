'use strict';

const toggle = document.querySelector('.side-toggle');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const dashboardItems = document.querySelectorAll('.dashboard-item');
const calendarDays = document.querySelectorAll('.day');

let toggleStat = true;

// Toggles sidebar on and off
toggle.addEventListener('click', () => {
  if (toggleStat) {
    container.classList.remove('with-sidebar');
    sidebar.classList.add('hidden');
    toggleStat = false;
  } else {
    container.classList.add('with-sidebar');
    sidebar.classList.remove('hidden');
    toggleStat = true;
  }
});

// Sets active state on navbar

dashboardItems.forEach((item) =>
  item.addEventListener('click', function () {
    dashboardItems.forEach((item) => item.classList.remove('active'));
    item.classList.add('active');
  })
);

// Sets active state on calendar date

calendarDays.forEach((day) =>
  day.addEventListener('click', function () {
    calendarDays.forEach((day) => day.classList.remove('active'));
    day.classList.add('active');
  })
);
