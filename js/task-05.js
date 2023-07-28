const input = document.querySelector('#name-input');
const holder = document.querySelector('#name-output');

input.addEventListener("keyup", (events) => {
    const inputValue = input.value.trim();

    if (inputValue === '') {
      holder.textContent = 'Anonymous';
    } else {
      holder.textContent = inputValue;
    }
    
}
)