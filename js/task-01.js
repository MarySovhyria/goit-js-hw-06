const items = document.querySelectorAll('.item');
const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);
items.forEach(element => {
    const title = element.querySelector('h2');
    const number = element.querySelectorAll('li');
    console.log(`Category: ${title.textContent}\nElements: ${number.length}`);
    
}
);


