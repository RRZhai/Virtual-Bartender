let mainIngredientsSuggestions = [];
let drinkCategorySuggestions = [];

const fetchDrinkCategorySuggestions = (listSpecifier,pushedArray) =>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?'+ ${listSpecifier}+ '=list')
    .then(res => res.json())
    .then(drinks => drinks.forEach(drink => pushedArray.push(drink.strCategory)))
}



fetchSuggestions(i,mainIngredientsSuggestions)
fetchDrinkCategorySuggestions(c,drinkCategorySuggestions)