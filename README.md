# What's Cookin'? _*group project*_

## Contributors
  - [Mike Flynn](https://github.com/mdflynn)
  - [Cameron Romo](https://github.com/cameronRomo)

## Context

### Set up
* *Click* the **Fork** button on the top right-hand corner of this page
* Clone the repository down and cd into the repo on your local machine by running:
  * `git clone <url>`
  * `cd whats-cookin`
* Run `npm install`
* Deploy site by running: `open src/index.html`

### Technologies used:
* JavaScript
* HTML
* CSS
* git
* GitHub
* Terminal
* [Color Safe Color Picker](http://colorsafe.co/)
* [Flaticon](https://www.flaticon.com/)

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


![what to cook](https://user-images.githubusercontent.com/63012953/96791796-5c648800-13b6-11eb-9fff-714aa4ee515b.gif)

![grocery list](https://user-images.githubusercontent.com/63012953/96791846-730adf00-13b6-11eb-866e-c17c5dee4ca9.gif)


The details of this project are outlined in this <a href="https://frontend.turing.io/projects/whats-cookin.html" target="\__blank">project spec</a>.

## Set Up

1. Within your group, decide on one person to have the project repository on their Github account. This person will *fork* this repository - on the top right corner of the page, click the fork button.
2. Both group members should then clone down the forked repository (make sure that everyone is added as a collaborator as well). Since you don't want your project to be named "whats-cookin-starter-kit", add an optional argument after the repo url when cloning. The command should look like this: `git clone [remote-address] [what you want to name the repo]`.
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run npm install to install project dependencies.
4. Run open src/index.html in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)
5. Make sure both members of your team are collaborators on the forked repo.
