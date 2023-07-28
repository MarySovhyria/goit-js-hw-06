let counterValue = 0;
const plus = () => {
    counterValue += 1;
    sp.textContent = counterValue;
}
const minus = () => {
    counterValue -= 1;
    sp.textContent = counterValue;
}
const sp = document.querySelector('#counter #value');
const decr = document.querySelector('[data-action="decrement"]');
const incr = document.querySelector('[data-action="increment"]');
decr.addEventListener("click", minus);
incr.addEventListener("click", plus);
