const input = document.querySelector('#name-input');
const holder = document.querySelector('#name-output');

input.addEventListener("keydown", events => {
    // input.textContent = input.textContent.trim();
    if (holder.textContent == "Anonymous" && input != '') {
        holder.textContent = '';
    }
    holder.append(events.key);
}
)