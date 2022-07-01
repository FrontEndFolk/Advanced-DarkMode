"use strict";
let darkmode = localStorage.getItem('darkmode');
const button = document.querySelector('#button');

button.addEventListener('click', changeMode);


const enableDarkMode = () => {
    button.classList.add('active');
    document.body.classList.add('darkmode');

};

const disableDarkMode = () => {
    button.classList.remove('active');
    document.body.classList.remove('darkmode');

};

function changeMode() {
    if (localStorage.getItem('darkmode') === 'enabled') {
        localStorage.setItem('darkmode', 'disabled');
        disableDarkMode();
    } else {
        localStorage.setItem('darkmode', 'enabled');
        enableDarkMode();
    }
};

function checkDarkMode() {
    if (darkmode === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

checkDarkMode();