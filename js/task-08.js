const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const elements = event.target.elements;
    const formData = {};

    for (let i = 0; i < elements.length -1; i += 1) {
        const element = elements[i];
        const name = element.name;
        const value = element.value.trim();

        if (!value || !name) {
            alert ('All fields must be filled');
            return;
        } 
        formData[name] = value;

    }
    console.log(formData);
    
})
form.reset()