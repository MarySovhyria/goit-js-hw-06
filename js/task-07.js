const slider = document.querySelector("#font-size-control");
const text = document.querySelector('#text');
slider.value = 56;
slider.step = 1;
slider.addEventListener("input", (event) => {
    const font = event.target.value + 'px';
    text.style.fontSize = font;
})