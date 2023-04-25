// global variable
const container = document.getElementById("container");

const fetchDrink = () => {
  fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
    .then((resp) => resp.json())
    // .then(drinkData => {debugger})
    .then((drinkData) => {
      drinkData.drinks.forEach((drink) => {
        renderDrink(drink);
        // ingArr(drink)
      });
    });
};
fetchDrink();

const presetFilterBtns = document.querySelector(".preset-filter-btn");
presetFilterBtns.addEventListener("click", (e) => fetchPresets(e));

const fetchPresets = (e) => {
  debugger;
  const presetName = e.target.value;
  fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/${presetName}.php`)
    .then((res) => res.json())
    .then((drinkData) =>
      drinkData.drinks.forEach((drink) => renderDrink(drink))
    );
};

const renderDrink = (drink) => {
  const cards = document.createElement("div");
  cards.className = "cards";
  container.appendChild(cards);
  //We can remove the above because we'll append to the existing HTML section
  const drinkDtl = document.createElement("div");
  drinkDtl.className = "single-card";
  cards.appendChild(drinkDtl);
  //Can we change this variable to be about a single card like drinkCard?
  const drinkImg = document.createElement("img");
  drinkImg.className = "drink-img";
  drinkDtl.appendChild(drinkImg);
  const drinkInfo = document.createElement("div");
  drinkInfo.className = "drink-info";
  drinkDtl.appendChild(drinkInfo);
  const drinkName = document.createElement("div");
  drinkName.className = "drink-name";
  drinkInfo.appendChild(drinkName);
  //let's make this a header within the card instead of it's own div
  const drinkType = document.createElement("li");
  const drinkIng = document.createElement("li");
  drinkInfo.appendChild(drinkType);
  drinkInfo.appendChild(drinkIng);
  //these can be p's which just have less default formatting
  drinkImg.src = drink.strDrinkThumb;
  drinkName.textContent = drink.strDrink;
  drinkType.textContent = drink.strCategory;
  drinkIng.textContent = drink.strIngredient1;
  //

  // Let's separate these fucntions and use "drink" as the argument
  cards.addEventListener("click", (e) => {
    const drinkIngredient = document.createElement("div");
    drinkIngredient.className = "ingredient";
    const drinkReceipe = document.createElement("p");
    drinkReceipe.className = "receipe";
    drinkInfo.after(drinkIngredient);
    drinkInfo.after(drinkReceipe);
    drinkReceipe.innerText = drink.strInstructions;
    drinkIngredient.innerText = `${drink.strMeasure1} ${drink.strIngredient1}, 
        ${drink.strMeasure2} ${drink.strIngredient2}, 
        ${drink.strMeasure3} ${drink.strIngredient3}, 
        ${drink.strMeasure4} ${drink.strIngredient4}, 
        ${drink.strMeasure5} ${drink.strIngredient4}`;
  });
};

// const IngArr = (drink) => {
//     drink.filter(() => {

//     })
// }

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

//search filter will take in an array of drinks from fetch, and sort out any ones that meet the .value of searchFilter
//order of operations --> list starts empty --> on search activates searchFilter which chooses which fetch function to use,
const searchFilter = () => {
  let selectedFilter = searchFilter.value;
};

const fetch4DrinkIngredients = () => {
  fetch("").then().then();
};

//create an array of the first couple ingredients for each card, this will be rendered with card
const ingStr1 = drink.strIngredient1.toLowerCase();
const ingStr2 = drink.strIngredient2.toLowerCase();
drinkCard.classList.add(ingStr1(ingStr2));

const allFilterOptions = document.getElementsByClassName("filter-input");
allFilterOptions.addEventListener("change", e, handleFilter(e));

function handleFilter(returnArray) {
  //can I get this to find if the value is contained in ingredients
  if (drinkCard.CalssList.contains(e.target.value)) {
    return true;
  }
}
