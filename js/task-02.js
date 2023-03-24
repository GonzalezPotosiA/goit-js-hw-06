const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients=document.querySelector('ul#ingredients');

for(let i=0; i<ingredients.length; i++){
  let fruits=document.createElement('li');
  fruits.classList.add('item');
  fruits.textContent=ingredients[i];
  allIngredients.append(fruits);
}

