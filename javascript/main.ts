const loginButton = document.querySelector('.login-button') as HTMLButtonElement | null;
const inputs = document.querySelectorAll('.text-input') as NodeListOf<HTMLInputElement>;
const unfilledboxes = document.getElementById('error1');

loginButton?.addEventListener('click', function() {

    const anyEmpty = Array.from(inputs).some(input => input.value.trim() === '');
    
    if (anyEmpty) {
        if (unfilledboxes) {
            unfilledboxes.innerText = "Please fill in all the gaps!";
        }
    } else {
        if (unfilledboxes) {
            unfilledboxes.innerText = "";
        }
        window.location.replace("index.html"); 
    }
});
