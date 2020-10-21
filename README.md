# What's Cookin'? _*group project*_

## Contributors
  - [Mike Flynn](https://github.com/mdflynn)
  - [Cameron Romo](https://github.com/cameronRomo)

## Context

<details>
  <summary>**Set up**</summary>
  
* *Click* the **Fork** button on the top right-hand corner of this page
* Clone the repository down and cd into the repo on your local machine by running:
  * `git clone <url>`
  * `cd whats-cookin`
* Run `npm install`
* Deploy site by running: `open src/index.html`
</details>

### Technologies used:
> * JavaScript
> * HTML
> * CSS
> * git
> * GitHub
> * Terminal
> * [Color Safe Color Picker](http://colorsafe.co/)
> * [Flaticon](https://www.flaticon.com/)


## Wins
* Displaying data in a modal view
* Successfully filtering through data with iterator methods
* Using the GitHub project board along with issues and labels
* Utilizing TDD
* More success with OOP

## Challenges
* Understanding the complexity of the incoming nested data types
* Knowing what to test for
* Understanding exactly what classes are needed
* Developing model views

## Lessons Learned
* More elaborate planning would have helped with:
  * Understanding the flow between classes
  * Seeing the utility of an ingredients class
  * More thoughtful TDD

## Features

#### Take 1:
* When entering the site the user is presented with the website
  - From here they can scroll through recipes, view them, filter by type, and search by ingredient.

![at a glance](https://user-images.githubusercontent.com/63012953/96791694-232c1800-13b6-11eb-9185-d41e9f55d576.gif)

#### Take 2:
* When choose a user is utilized, the user can now add a recipe to their favorites.
  - To do this a recipe must be viewed in the modal and the star icon must be clicked
  - Once one or more recipes have been stared, the user can then view them by clicking on the **Favorite Recipes** button
    - A display of all the favorited recipes will then take the place of the recipes main page
    - To go back to all recipes simply use the filter recipes dropdown and select **All Recipes**

![view favorites](https://user-images.githubusercontent.com/63012953/96791765-4951b800-13b6-11eb-8298-42fe63384b76.gif)

#### Take 3:
* When a user is still specified a what to cook option is available to add recipes to cook that week
  - To populate this view, simply open a recipe to add and click the cook icon in the upper left-hand corner.

![what to cook](https://user-images.githubusercontent.com/63012953/96791796-5c648800-13b6-11eb-9fff-714aa4ee515b.gif)

#### Take 4:
* Under user still, there is an option to check what items are still needed. This can be accessed by clicking the **Your Grocery List** button.
  * First groceries must be added by viewing a recipe and clicking the cart icon.
  * After groceries have been added and the **Your Grocery List** button has been clicked -- a modal will pop up displaying the amount of each ingredient that will need to be purchased in order to cook the meals added.

![grocery list](https://user-images.githubusercontent.com/63012953/96791846-730adf00-13b6-11eb-866e-c17c5dee4ca9.gif)


The details of this project are outlined in this <a href="https://frontend.turing.io/projects/whats-cookin.html" target="\__blank">project spec</a>.

### Project Manager
- [Bob Gu](https://github.com/BobGu)
