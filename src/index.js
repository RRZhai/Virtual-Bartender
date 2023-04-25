//global constants
const entireSearchNav = document.querySelector('#searchNav')
const formSearch = document.querySelector('#searchInput')
const searchFilterDD = document.querySelector('#searchFilter')
const ingrFilter = document.querySelector('#ingrFilter')
const nameFilter = document.querySelector('#nameFilter')


//helper functions
const handleSubmit = (e) =>{
    //always inlcude p.dflt
    e.preventDefault()
    //user search as var.
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mar -> this works
    //why do you hate me Mr. URL
    const userSearch = encodeURI(e.target['searchInput'].value)
    if (searchFilterDD.textContent === 'Drink Name'){
        const searchNameURL = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + userSearch
        fetch(searchNameURL)
        .then(res => res.json())
        .then(drinksArray => drinksArray.forEach(drink=> {soughtDrinksClicker(drink)}))}
    else if(searchFilterDD.textContent === 'Ingredient Filter'){
        const searchNameURL = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + userSearch
        fetch(searchNameURL)
        .then(res => res.json())
        .then(drinksArray => drinksArray.forEach(drink=> {soughtDrinksClicker(drink)}))}
}

//search filter will take in an array of drinks from fetch, the fetch should be already sorted --> just need to append them and make em clickable
//order of operations --> list starts empty --> on search activates searchFilter which chooses which fetch function to use, 



///event listeners:
document.addEventListener('submit', handleSubmit)