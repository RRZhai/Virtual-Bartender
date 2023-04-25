//global constants
const entireSearchNav = document.querySelector('#searchNav')
const formSearch = document.querySelector('#searchInput')
const searchFilterDD = document.querySelector('#searchFilter')
const ingrFilter = document.querySelector('#ingrFilter')
const nameFilter = document.querySelector('#categoryFilter')


//helper functions
const handleSubmit = (e) =>{
    //always inlcude p.dflt
    e.preventDefault()
    
    //user search as var.
    const userSearch = encodeURI(e.target['searchInput'].value)
    debugger
    //if (searchFilterDD.textContent === 'Drink Name')
        fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearch}`)
        .then(res => res.json())
        .then(drinksArray => console.log(drinksArray))
        debugger
    
   
}




//search filter will take in an array of drinks from fetch, and sort out any ones that meet the .value of searchFilter
//order of operations --> list starts empty --> on search activates searchFilter which chooses which fetch function to use, 



///event listeners:
document.addEventListener('submit', handleSubmit)