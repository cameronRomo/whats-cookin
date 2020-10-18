let currentUser;
let modal;
let currentRecipe;
function openModals(event) {
  let eventId = event.target.id;
  currentRecipe = eventId;
  modal = document.getElementById(eventId + 'modal');
  modal.style.display = 'block';
}

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close");
const favoriteButton = document.getElementsByClassName('favorite-button');
const allModals = document.getElementsByClassName("body__main__section__article__button");
const groceryButton = document.getElementsByClassName('grocery-button');
const cookButton = document.getElementsByClassName("cook-button");
// query selectors
const navDivDropdown = document.querySelector('.nav__div__one__dropdown');
const recipeSection = document.querySelector('.body__main__section');

// render recipes
const recipeInstantiation = createRecipes();
const userInstantiation = createUsers();
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
  showUsers();
  modalListener();
  modalCloseListener();
  favoriteListener();
  groceryListener();
  cookListener();
  // for (let i = 0; i < allModals.length; i++) {
  //   allModals[i].addEventListener('click', openModals)
  // }
  // for (let i = 0; i < span.length; i++) {
  //   span[i].addEventListener('click', () => {
  //     modal.style.display = "none";
  //   })
  // }
  // for (let i = 0; i < favoriteButton.length; i++) {
  //   favoriteButton[i].addEventListener('click', addFavoriteRecipe);
  // }
  // for (let i = 0; i < groceryButton.length; i++) {
  //   groceryButton[i].addEventListener('click', addGroceryList);
  // }
  recipeInstantiation;
}

function modalListener() {
  for (let i = 0; i < allModals.length; i++) {
    allModals[i].addEventListener('click', openModals)
  }
}

function cookListener() {
  for (let i = 0; i < cookButton.length; i++) {
    cookButton[i].addEventListener('click', addToCook)
  }
}

function modalCloseListener() {
  for (let i = 0; i < span.length; i++) {
    span[i].addEventListener('click', () => {
      modal.style.display = "none";
    })
  }
}

function favoriteListener() {
  for (let i = 0; i < favoriteButton.length; i++) {
    favoriteButton[i].addEventListener('click', addFavoriteRecipe);
  }
}

function groceryListener() {
  for (let i = 0; i < groceryButton.length; i++) {
    groceryButton[i].addEventListener('click', addGroceryList);
  }
}

function addFavoriteRecipe() {
  let recipeNumber = Number(currentRecipe);
  recipeInstantiation.forEach(item => {
    if (item.id === recipeNumber) {
      currentUser.addToFavoriteRecipes(item);
    }
  })
}

function addToCook() {
  let recipeNumber = Number(currentRecipe);
  recipeInstantiation.forEach(recipe => {
    if (recipe.id === recipeNumber) {
      currentUser.addRecipeToCook(recipe);
    }
  })

}

function addGroceryList() {
  console.log('what up');
  //how to invoke user method?
 //addRecipeToCook(recipe)
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
function showUsers() {
  let userDropDownList = userInstantiation.reduce((usersHTML, user) => {
    usersHTML += `<option class="nav__div__one__dropdown__choice" value="${user.id}">${user.name}</option>`
    return usersHTML;
  }, '')
  navDivDropdown.innerHTML = userDropDownList
  userDropDownList = userInstantiation.reduce((usersHTML, user) =>
    usersHTML +=
    `<option class="nav__div__one__dropdown__choice" value="${user.name}">${user.name}</option>`
  , '')
  document.querySelector(".nav__div__one__dropdown").innerHTML = userDropDownList;
}


function changed(option){
 currentUser = userInstantiation.find(user => {
   return option.value === user.name;
 })
 console.log(currentUser);
}

function getAmounts() {
  recipeInstantiation.forEach(recipe => {
    recipe.ingredients.map(item => {
      item.quantity.amount = +item.quantity.amount.toFixed(2);
      return item.quantity.amount + ' ' + item.quantity.unit + ' ';
    })
  })
}

function showRecipes() {
  let recipeHTML = '';
  recipeInstantiation.forEach(recipe => {
    const recipeNames = recipe.getIngredients();
    const showInstructions = recipe.getInstructions();
    let instructionsHTML = showInstructions.reduce((instructionDetail, instruction) => {
      instructionDetail += `<li>${instruction}</li>`;
      return instructionDetail;
    }, '')
    const amounts = recipe.ingredients.map(item => {
      item.quantity.amount = +item.quantity.amount.toFixed(2);
      return item.quantity.amount + ' ' + item.quantity.unit + ' ';
    })
    const ingredientNames = recipeNames.reduce((ingredientDetail, ingredient) => {
      ingredientDetail.push(ingredient)
      return ingredientDetail;
    }, [])
    const combineIngredientInfo = amounts.map((value, index) => {
     return value + ingredientNames[index]
     })
    const ingredientsHTML = combineIngredientInfo.reduce((displayData, info) => {
      displayData += `<li>${info}</li>`;
      return displayData;
    }, '')
    let recipeDisplay = `<article class="body__main__section__article">
                          <img class="body__main__section__article__image" src="${recipe.image}">
                          <div class="body__main__section__article__text">${recipe.name}</div>
                          <button class="body__main__section__article__button" id="${recipe.id}">Open Recipe</button>
                          <div class="body__main__section__article__modal" id="${recipe.id + 'modal'}">
                            <div class="body__main__section__article__modal__content">
                              <span class="close">&times;</span>
                              <img class="favorite-button" src="../assets/002-star.svg" height="25" width="25">
                              <img class="grocery-button" src="../assets/grocery-cart.svg" height="25" width="25">
                              <img class="cook-button" src="../assets/cooking.svg" height="25" width="25">
                              <div clas="body__main__section__article__modal__content__wrapper">
                                <h2>${recipe.name}</h2>
                                <div class="body__main__section__article__modal__content__wrapper__div">
                                  <img src="${recipe.image}">
                                  <ul>
                                  ${ingredientsHTML}
                                  </ul>
                                </div>
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
