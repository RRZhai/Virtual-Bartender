// const allDrinkCheckbox = document.querySelectorAll("input[type=checkbox]"); //finding all checkbox types. Avoids having to pick by the different classes
// const activePageDrinks = Array.from(document.querySelectorAll(".single-card"));
// const checked = {};

// getChecked("alcoholic");
// getChecked("spirit");
// getChecked("type");

// Array.prototype.forEach.call(allDrinkCheckbox, function (elem) {
//   elem.addEventListener("change", toggleCheckbox);
// });

// function toggleCheckbox(e) {
//   debugger;
//   getChecked(e.target.name);
//   setVisibility();
// }

// function getChecked(name) {
//   debugger;
//   checked[name] = Array.from(
//     document.querySelectorAll("input[name=" + name + "]:checked")
//   ).map(function (elem) {
//     return elem.value;
//   });
// }

// function setVisibility() {
//   activePageDrinks.map(function (drinkCard) {
//     const drinkAttr = drinkCard.dataset.checkBoxTags;
//     const alcoholic = checked.alcoholic.length
//       ? Array.from(drinkAttr).filter((values) =>
//           checked.alcoholic.includes(values)
//         ).length
//       : true;
//     const spirit = checked.spirit.length
//       ? Array.from(drinkAttr).filter((values) =>
//           checked.spirit.includes(values)
//         ).length
//       : true;
//     const type = checked.type.length
//       ? Array.from(drinkAttr).filter((values) => checked.type.includes(values))
//           .length
//       : true;
//     if (alcoholic && spirit && type) {
//       drinkCard.classList.remove("hidden");
//     } else {
//       drinkCard.classList.add("hidden");
//     }
//   });
// }

  document.getElementById("alcoholic").checked
    ? currentCheckArray.push("Alcoholic")
    : null;
  document.getElementById("non-alcoholic").checked
    ? currentCheckArray.push("Non alcoholic")
    : null;
  document.getElementById("optional-alcohol").checked
    ? currentCheckArray.push("Optional Alcohol")
    : null;
  document.getElementById("cocktail").checked
    ? currentCheckArray.push("Cocktail")
    : null;
  document.getElementById("shot").checked
    ? currentCheckArray.push("Shot")
    : null;
  document.getElementById("punch").checked
    ? currentCheckArray.push("Punch / Party Drink")
    : null;


      filteredAlcMatches.length === 0 &&
    filteredSpiritMatches.length === 0 &&
    filteredTypeMatches.length === 0


    const filteredAlcMatches = cardAlcAttr
    .split(",")
    .filter((value) => currentCheckArray.includes(value));


    const filteredTypeMatches = cardTypeAttr
    .split(",")
    .filter((value) => currentCheckArray.includes(value));

    const cardTypeAttr = drinkCardDiv.dataset.typeTags;
      const cardAlcAttr = drinkCardDiv.dataset.alcTags;

          drink.strAlcoholic,

              drink.strCategory,