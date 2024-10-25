const closeButton = document.getElementById('closeButton') as HTMLButtonElement;
const blackBox = document.getElementById('blackBox') as HTMLDivElement;

closeButton.addEventListener('click', () => {
    blackBox.style.top = '200px';
    blackBox.style.left = '200px';
});
