// LINES WITH ** in comment are lines that seem like we can delete(?) or were commented out before and need looking at
//////global constants/////

//search Bar/Nav constants (nolan)
const entireSearchNav = document.querySelector('#searchNav')
const formSearchInput = document.querySelector('#searchInput')
const searchFilterDD = document.querySelector('#searchFilter')
const ingrFilter = document.querySelector('#ingrFilter')
const nameFilter = document.querySelector('#nameFilter')
const searchForm = document.querySelector('#searchForm')

//Side panel constants (ren)
const sidePanelContainer = document.getElementById("filter-section");
//**  const presetFilters = document.getElementById("filterPresets")
const hasAlcoholFtrLst = document.getElementById("alcohol-content-list");
const spiritFtrLst = document.getElementById("spirit-filter-list");
const drinkTypeFtrLst = document.getElementById("type-filter-list");
const spiritExpandBtn = document.getElementById("spirit-expand-btn");

//card constants (shiyao)
const cards = document.querySelector('.cards')
const modalName = document.getElementById('drink-name-modal')
const modalImg = document.getElementById('img-modal')
const ingAndMea = document.getElementById('ingredient-measure')
const modalInst = document.getElementById('instructions-modal')

//buttons n stuff constants:
const surpriseBtn = document.querySelector('#random-filter-btn')
const popularBtn = document.querySelector('#most-popular-btn')
const latestDrinksBtn = document.querySelector('#new-recipies-btn')
//functions

const userSearchByName = (drinkName) => {
    const input = (formSearchInput.value)
    const URLinput = encodeURI(input.replace(' ','_'));
   // console.log(URLinput)
   const query = drinkName ? drinkName : URLinput 
   const searchNameUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + query
    fetch(searchNameUrl)
    .then(res => res.json())
    .then(searchedArray => {
        searchedArray.drinks.forEach(drink => {
            renderDrink(drink)
        })
    })
}

const userSearchByIngredient = () => {
    const input = (formSearchInput.value)
    URLinput = encodeURI(input.replace(' ','_'));
    const searchNameUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=' + URLinput
    console.log(URLinput)
    fetch(searchNameUrl)
    .then(res => res.json())
    .then(searchedArray => {
        const namesArray = searchedArray.drinks.map(drink =>{
        return drink.strDrink
        })
        namesArray.forEach(userSearchByName)
    })
}
const fetchPopular = () => {
    fetch('http://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
    .then(res => res.json())
    .then(drinkData => {
        drinkData.drinks.forEach(drink => {
            renderDrink(drink)
        })
    })
}
const fetchLatest = () =>{
    fetch('http://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
    .then(res => res.json())
    .then(searchedArray => {
        searchedArray.drinks.forEach(drink =>{
            renderDrink(drink)
        })
    })
}

const fetchDrink = () => {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
    .then(resp => resp.json())
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
    drinkImg.src = drink.strDrinkThumb
    drinkImg.className = 'drink-img'
    drinkDtl.appendChild(drinkImg)
    
    const drinkInfo = document.createElement('div')
    drinkInfo.className = "drink-info"
    drinkDtl.appendChild(drinkInfo)


const handleDrink = (drink) => {
  modalImg.src = drink.strDrinkThumb
  ingAndMea.innerText = `${ingredientList(drink)}  
                        ${measureList(drink)}`
  modalName.innerText = drink.strDrink
  modalInst.textContent = drink.strInstructions
}


const ingredientList = (drink) => {
    let ingreKeyArr = Object.keys(drink).filter(keys => {
        return keys[12] === 't'
    })
    const ingreArr = []
    for (let i = 0; i < ingreKeyArr.length; i++ ){
      if (drink[ingreKeyArr[i]]){
        ingreArr.push(drink[ingreKeyArr[i]])
      }
    }
    return ingreArr
}


    drinkImg.addEventListener('click', () => handleDrink(drink))
    

const measureList = (drink) => {
  let meaKeyArr = Object.keys(drink).filter(keys => {
      return keys[9] === 'e'
  })
  const meaArr = []
  for (let i = 0; i < meaKeyArr.length; i++ ){
    if (drink[meaKeyArr[i]]){
      meaArr.push(drink[meaKeyArr[i]])
    }
  }
  return meaArr
}

const drinkInfo = (drink, drinkName) => {
  const drinkType = document.createElement('li')
  drinkType.textContent = drink.strAlcoholic
  const drinkIng1 = document.createElement('li')
  drinkIng1.textContent = drink.strIngredient1
  drinkName.append(drinkType, drinkIng1)
}

const renderDrink = drink => {
  const card = document.createElement('div')
  card.className = 'single-card'
  cards.appendChild(card)
  const drinkImg = document.createElement('img')
  drinkImg.className = 'drink-img'
  drinkImg.src = drink.strDrinkThumb
  const drinkName = document.createElement('div')
  drinkName.className = 'drink-info'
  drinkName.innerText = drink.strDrink
  card.append(drinkImg, drinkName)
  drinkInfo(drink, drinkName)
  drinkImg.addEventListener('click', () => handleDrink(drink))
}

const fetchDrink = () => {
  fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
  .then(resp => resp.json())
  // .then(drinkData => {debugger})
  .then(drinkData => {
      drinkData.drinks.forEach(drink => {
        renderDrink(drink);
        // ingredientList(drink);
        // measureList(drink)
      })
  })
}
fetchDrink()

// S end

//Initial Page fetch with 10 random drinks for
function fetchRandom() {
  fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
    .then(res => res.json())
    .then(randomDrinksArray => randomDrinksArray.drinks.forEach(oneRandomDrink =>renderDrink(oneRandomDrink)));
}

//** 
//function renderOneDrinkCard(drinkObj) {}
//** spiritExpandBtn.addEventListener(
//   "click",
//   e.target.child.classList.toggle("hidden")
// );

//*** spiritExpandBtn.appendChild(spiritFtrLst);


///event listeners:
latestDrinksBtn.addEventListener('click', ()=>{
    container.innerHTML =''
    fetchLatest()
})
popularBtn.addEventListener('click',()=>{
    container.innerHTML = ''
    fetchPopular()
} )
surpriseBtn.addEventListener('click', () =>{
    container.innerHTML = '' 
    fetchRandom()
    })
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    container.innerHTML = ''
    if (searchFilter.value === 'Drink'){
        userSearchByName()
    }else{
        userSearchByIngredient()
    }
    
})

