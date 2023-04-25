
// global viable
const container = document.getElementById('container')


const fetchDrink = () => {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
    .then(resp => resp.json())
    // .then(drinkData => {debugger})
    .then(drinkData => {
        drinkData.drinks.forEach(drink => {
            renderDrink(drink)
        })
    })
}
fetchDrink()

const renderDrink = drink => {
    const drinkDtl = document.createElement('div')
    drinkDtl.className = 'single-card'
    container.appendChild(drinkDtl)
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
    drinkImg.addEventListener('click', () => handleDrink(drink))
}

const handleDrink = (drink) => {
  const drinkIngredient = document.createElement('div')
  drinkIngredient.className = "ingredient"
  const drinkReceipe = document.createElement('p')
  drinkReceipe.className = 'receipe'
  // drink.after(drinkIngredient)
  // drink.after(drinkReceipe)
  drinkReceipe.innerText = drink.strInstructions
  drinkIngredient.innerText = ingAndMea(drink)
  // `${drink.strMeasure1} ${drink.strIngredient1}, 
  // ${drink.strMeasure2} ${drink.strIngredient2}, 
  // ${drink.strMeasure3} ${drink.strIngredient3}, 
  // ${drink.strMeasure4} ${drink.strIngredient4}, 
  // ${drink.strMeasure5} ${drink.strIngredient4}`
}

const ingAndMea = (drink) => {
    const ingreArr = Object.keys(drink).filter(singleIng => {
        return singleIng[12] === 't'
    })
    return ingreArr
}

const entireSearchNav = document.getElementById("searchNav");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const dropDown = document.getElementById("searchFilter");

//Side panel constants
const sidePanelContainer = document.getElementById("filter-section");
// const presetFilters = document.getElementById("filterPresets")
const hasAlcoholFtrLst = document.getElementById("alcohol-content-list");
const spiritFtrLst = document.getElementById("spirit-filter-list");
const drinkTypeFtrLst = document.getElementById("type-filter-list");
const spiritExpandBtn = document.getElementById("spirit-expand-btn");

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

function renderOneDrinkCard(drinkObj) {}

//search filter will take in an array of drinks from fetch, and sort out any ones that meet the .value of searchFilter
//order of operations --> list starts empty --> on search activates searchFilter which chooses which fetch function to use,
const searchFilter = () => {
  let selectedFilter = searchFilter.value;
};

const fetch4DrinkIngredients = () => {
  fetch("").then().then();
};

// spiritExpandBtn.addEventListener(
//   "click",
//   e.target.child.classList.toggle("hidden")
// );

spiritExpandBtn.appendChild(spiritFtrLst);

