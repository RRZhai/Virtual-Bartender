// LINES WITH ** in comment are lines that seem like we can delete(?)
//////global constants/////

//search Bar/Nav constants
const entireSearchNav = document.querySelector('#searchNav')
const formSearchInput = document.querySelector('#searchInput')
const searchFilterDD = document.querySelector('#searchFilter')
const ingrFilter = document.querySelector('#ingrFilter')
const nameFilter = document.querySelector('#nameFilter')
const searchForm = document.querySelector('#searchForm')

//Side panel constants
const sidePanelContainer = document.getElementById("filter-section");
// const presetFilters = document.getElementById("filterPresets")
const hasAlcoholFtrLst = document.getElementById("alcohol-content-list");
const spiritFtrLst = document.getElementById("spirit-filter-list");
const drinkTypeFtrLst = document.getElementById("type-filter-list");
const spiritExpandBtn = document.getElementById("spirit-expand-btn");

const container = document.getElementById('container')

//functions

const userSearchByName = () => {
    input = encodeURI(formSearchInput.value)
    const searchNameUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + input
    console.log(searchNameUrl)
    fetch(searchNameUrl)
    .then(res => res.json())
    .then(searchedArray => {searchedArray.drinks.forEach(drink => renderDrink(drink))})
}
const userSearchByIngredient = (e) => {
    input = encodeURI(e.target['searchInput'].value)
    const searchNameUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + input
    console.log(searchNameUrl)
    fetch(searchNameUrl)
    .then(res => res.json())
    .then(drinksArray => drinksArray.drinks.forEach(drink => renderDrink(drink)))
}


const fetchDrink = () => {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
    .then(resp => resp.json())
    // .then(drinkData => {debugger})
    .then(drinkData => {
        drinkData.drinks.forEach(drink => {
            renderDrink(drink)
            // ingArr(drink)
        })
    })
}

fetchDrink()

const renderDrink = drink => {
    const cards = document.createElement('div')
    cards.className = 'cards'
    container.appendChild(cards)
    const drinkDtl = document.createElement('div')
    drinkDtl.className = 'single-card'
    cards.appendChild(drinkDtl)
    const drinkImg = document.createElement('img')
    drinkImg.className = 'drink-img'
    drinkDtl.appendChild(drinkImg)
    const drinkInfo = document.createElement('div')
    drinkInfo.className = "drink-info"
    drinkDtl.appendChild(drinkInfo)
    const drinkName = document.createElement('div')
    drinkName.className = 'drink-name'
    drinkInfo.appendChild(drinkName)
    const drinkType = document.createElement('li')
    const drinkIng = document.createElement('li')
    drinkInfo.appendChild(drinkType)
    drinkInfo.appendChild(drinkIng)
    drinkImg.src = drink.strDrinkThumb
    drinkName.textContent = drink.strDrink
    drinkType.textContent = drink.strCategory
    drinkIng.textContent = drink.strIngredient1
    cards.addEventListener('click', (e) => {
        const drinkIngredient = document.createElement('div')
        drinkIngredient.className = "ingredient"
        const drinkReceipe = document.createElement('p')
        drinkReceipe.className = 'receipe'
        drinkInfo.after(drinkIngredient)
        drinkInfo.after(drinkReceipe)
        drinkReceipe.innerText = drink.strInstructions
        drinkIngredient.innerText = `${drink.strMeasure1} ${drink.strIngredient1}, 
        ${drink.strMeasure2} ${drink.strIngredient2}, 
        ${drink.strMeasure3} ${drink.strIngredient3}, 
        ${drink.strMeasure4} ${drink.strIngredient4}, 
        ${drink.strMeasure5} ${drink.strIngredient4}` 
    })
}

//** 
// const IngArr = (drink) => {
//     drink.filter(() => {

//     })
// }



//Initial Page fetch with 10 random drinks for
function retchRandom() {
  fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
    .then((res) => res.json())
    .then((randomDrinksArray) =>
      randomDrinksArray.forEach((oneRandomDrink) =>
        renderOneDrinkCard(oneRandomDrink)
      )
    );
}

//** 
//function renderOneDrinkCard(drinkObj) {}

//helper functions




// spiritExpandBtn.addEventListener(
//   "click",
//   e.target.child.classList.toggle("hidden")
// );

spiritExpandBtn.appendChild(spiritFtrLst);


///event listeners:
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    userSearchByName()
})