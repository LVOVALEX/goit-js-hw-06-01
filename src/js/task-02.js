const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const someIngredients = document.querySelector('#ingredients');

const markup = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = `${ingredient}`;
  return ingredientsItem;
});

someIngredients.append(...markup);
console.log(someIngredients);