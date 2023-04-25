// global viable
const container = document.getElementById('container')


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

// const IngArr = (drink) => {
//     drink.filter(() => {

//     })
// }