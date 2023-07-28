const input = document.querySelector('#validation-input');
const number = input.getAttribute('data-length');

input.addEventListener("blur", () => {
    const lengthT = input.value;
    if (lengthT.length == number) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        console.log("true");
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        console.log("false");
    }
})
