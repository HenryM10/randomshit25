"use strict";
const loginButton = document.querySelector('.login-button');
const inputs = document.querySelectorAll('.text-input');
const unfilledboxes = document.getElementById('error1');
loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener('click', function () {
    const anyEmpty = Array.from(inputs).some(input => input.value.trim() === '');
    if (anyEmpty) {
        if (unfilledboxes) {
            unfilledboxes.innerText = "Please fill in all the gaps!";
        }
    }
    else {
        if (unfilledboxes) {
            unfilledboxes.innerText = "";
        }
        window.location.replace("index.html");
    }
});
