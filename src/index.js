const entireSearchNav = document.getElementById("searchNav");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const dropDown = document.getElementById("searchFilter");

//Initial Page fetch with 10 random drinks
fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
  .then((res) => res.json())
  .then((randomDrinksArray) =>
    randomDrinksArray.forEach((oneRandomDrink) =>
      renderOneDrinkCard(oneRandomDrink)
    )
  );

function renderOneDrinkCard(drinkObj) {
    
}

//search filter will take in an array of drinks from fetch, and sort out any ones that meet the .value of searchFilter
//order of operations --> list starts empty --> on search activates searchFilter which chooses which fetch function to use,
const searchFilter = () => {
  let selectedFilter = searchFilter.value;
};

const fetch4DrinkIngredients = () => {
  fetch("").then().then();
};
