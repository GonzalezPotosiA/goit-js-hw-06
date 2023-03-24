const categories=document.querySelectorAll('li.item');
console.log('Number of categories: ', categories.length);

for(let i=0; i<categories.length; i++){
    let category= categories[i].querySelector('h2');
    console.log("Category: ", category.textContent);
    let elementsCategory=categories[i].querySelectorAll('ul li');
    console.log("Elements: ", elementsCategory.length);
    
}

