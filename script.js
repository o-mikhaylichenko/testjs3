const buttonEl = document.querySelector('.buttonUp');
let counter = 0;
buttonEl.textContent = counter;

buttonEl.addEventListener('click', function () {
    counter += 3;
    buttonEl.textContent = counter;
});
