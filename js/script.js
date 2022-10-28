'use strict';

const toggle = document.querySelector('.side-toggle');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');

let toggleStat = true;

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
