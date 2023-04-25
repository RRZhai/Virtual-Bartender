const entireSearchNav = document.getElementById('searchNav')
const formSearch = document.getElementById('searchForm')
const inputSearch = document.getElementById('searchInput')
const dropDownSearch = document.getElementById('searchFilter')

let mainIngredientsSuggestions = [];
let drinkCategorySuggestions = [];

const fetchSuggestions = (listSpecifier,pushedArray) =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?`+ `${listSpecifier}` + `=list`)
    .then(res => res.json())
    .then(drinks => drinks.forEach(drink =>{ pushedArray.push(drink.strCategory)}))
    console.log(drink)
}

const mainIngredients = fetchSuggestions('i',mainIngredientsSuggestions)
const drinkCategories = fetchSuggestions('c',drinkCategorySuggestions)
console.log(mainIngredients)


//search filter will take in an array of drinks from fetch, and sort out any ones that meet the .value of searchFilter
//order of operations --> list starts empty --> on search activates searchFilter which chooses which fetch function to use, 
const searchFilter = () =>{
    let selectedFilter = searchFilter.value
    
}

const fetch4DrinkIngredients = () =>{
    fetch('')
    .then()
    .then()
}


