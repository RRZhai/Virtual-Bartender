
# Phase 1 Table 5 Project: Flatiron Virtual Bartender

## PROJECT INFO:

Hello and welcome to Flatiron Virtual Bartender! Flatiron Virtual Bartender is a single page JavaScript application intended to allow users to seach/find a wide variety of drinks (both with and without alcohol) they can make with the ingredients in their home. To do this the application allows a user to search by either the name of a drink or by a specific ingredient. Users are then able to filter the results with clickable filter options. The results are placed into a scrollable list, that on clicking a drink presents the user with a full ingredient list as well as how to make the drink. This project uses JavaScript and CSS to interact with HTML

## FEATURES

The project incluedes several key features intended to demonstrate comprehensive knowledge of DOM events, fetch requests from a database and generally highlight the skills learned in Phase 1 here at flatiron school. In our application you can see
*Search Bar With Dropdown Filter

    *The search bar has two selectable dropdowns which allow you to change how you search:
        *The Drink Name filter is the default filter and will return all drinks whos name contains the users search
        *The ingredient filter is a bit more complicated, it initially returns all drinks containing the ingredient the user searched for, however the format it gets return in is not viable with the function rendering the drinks to the cards on the screen, so the name of each drink returned from the search is mapped into a new array and then that array is sent to the same fetch function used for the names filter

*clickable Further Filter Options
*The spirit filter allows you to narrow down the search results once to focus just on the spirit of your choice. Multi-filter coming soon!
*Buttons To Provide preset selection options

**Clickable Drink Cards in a scrollable box - a click provides. Once you click the card, you will be able to see a the receipe with a enlarged image. 


### To install this application all you need to do is:

1: Fork and clone this repository from GitHub into your personal environment and local directory \* Your environment must be able to run JavaScript
2: CD into the parent directory and enter `code .`
3: Once you have cloned the repository and confirmed you have your environment set up, all that needs to be done is opening the `index.html` folder in your chosen browser to begin using the application

## LICENSE, ACKNOWLEDGEMENTS and FURTHER READING:

**Read Our Phase One Blog Posts**
    [Shiyao's Blog](https://medium.com/@zsshiyaozhai/behind-the-screen-my-journey-as-a-coding-rookie-through-phase-1-in-coding-bootcamp-7f3217cb7bb2)
    [Ren's Blog](https://dev.to/rcblake)
    [Nolan's Blog](https://nolan.hashnode.dev/)


**sources**
https://www.thecocktaildb.com/api.php
    *Database used for application
    
background:
https://codepen.io/P1N2O/pen/pyBNzX
