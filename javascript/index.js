"use strict";
const closeButton = document.getElementById('closeButton');
const blackBox = document.getElementById('blackBox');
closeButton.addEventListener('click', () => {
    blackBox.style.top = '200px';
    blackBox.style.left = '200px';
});
