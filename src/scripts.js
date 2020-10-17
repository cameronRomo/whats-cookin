//const recipeData = require("../data/recipes");
// Get the modal

//const recipeData = require("../data/recipes");

//const ingredientsData = require("../data/ingredients");

//const ingredientsData = require("../data/ingredients");
let modal;
function openModals(event) {
  let eventId = event.target.id;
  modal = document.getElementById(eventId + 'modal');
  modal.style.display = 'block';
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");


// query selectors
const recipeSection = document.querySelector('.body__main__section');

// render recipes
const recipeInstantiation = createRecipes();
const userInstantiation = createUsers();
console.log(userInstantiation);
const ingredientHashmap = createIngredientHash();

window.onload = displayHandler;

// //When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




function displayHandler() {
  showRecipes();
  const allModals = document.getElementsByClassName("body__main__section__article__button");
  for (let i = 0; i < allModals.length; i++) {
    allModals[i].addEventListener('click', openModals)
  }
  for (let i = 0; i < span.length; i++) {
    span[i].addEventListener('click', () => {
      modal.style.display = "none";
    })
  }
  recipeInstantiation;
}

function createUsers() {
  const userInstances = [];
  usersData.forEach(user => {
    let newUser = new User(user.id, user.name, user.pantry);
    userInstances.push(newUser);
  })
  return userInstances;
}

function createIngredientHash() {
  return ingredientsData.reduce((ingredientDetails, ingredient) => {
    ingredientDetails[ingredient.id] = ingredient;
    return ingredientDetails
  }, {})
}

function createRecipes() {
  const recipeInstances = [];
  recipeData.forEach(recipe => {
    let newRecipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
    recipeInstances.push(newRecipe);
  })
  return recipeInstances;
}
function showRecipes() {
  let recipeHTML = '';
  recipeInstantiation.forEach(recipe => {
    let recipeNames = recipe.getIngredients();
    let showInstructions = recipe.getInstructions();
    let instructionsHTML = showInstructions.reduce((instructionDetail, instruction) => {
      instructionDetail += `<li>${instruction}</li>`;
      return instructionDetail;
    }, '')
    let ingredientHTML = recipeNames.reduce((ingredientDetail, ingredient) => {
      ingredientDetail += `<li>${ingredient}</li>`;
      return ingredientDetail;
    }, '')
    let recipeDisplay = `<article class="body__main__section__article">
                          <img class="body__main__section__article__image" src="${recipe.image}">
                          <div class="body__main__section__article__text">${recipe.name}</div>
                          <button class="body__main__section__article__button" id="${recipe.id}">Open Recipe</button>
                          <div class="body__main__section__article__modal" id="${recipe.id + 'modal'}">
                            <div class="body__main__section__article__modal__content">
                              <span class="close">&times;</span>
                              <div clas="body__main__section__article__modal__content__wrapper">
                                <img src="${recipe.image}">
                                <ul>
                                  ${ingredientHTML}
                                </ul>
                                <ol>
                                  ${instructionsHTML}
                                </ol>
                              </div>
                            </div>
                          </div>
                        </article>`;
    recipeHTML += recipeDisplay;
  })
  recipeSection.innerHTML = recipeHTML;
}
