const whatToCookButton = document.getElementById('cook-button');
const viewFavsButton = document.getElementById('favorite-button');
const viewGroceriesButton = document.getElementById('grocery-button');
const span = document.getElementsByClassName("close");
const grocerySpan = document.querySelector('.grocery-close');
const groceryModal = document.getElementsByClassName('grocery-modal')[0];
const favoriteButton = document.getElementsByClassName('favorite-button');
const allModals = document.getElementsByClassName("body__main__section__article__button");
const groceryButton = document.getElementsByClassName('grocery-button');
const cookButton = document.getElementsByClassName("cook-button");
const recipeSection = document.querySelector('.body__main__section');
const input = document.querySelector('input');
const searchButton = document.querySelector('.nav__div__one__button');
const filterDropDown = document.querySelector('#filter-ingredients');
const searchText = document.querySelector('.nav__div__one__input');
const filterText = document.querySelector('#filter-text');
const recipeInstantiation = createRecipes();
const userInstantiation = createUsers();
const ingredientHashmap = createIngredientHash();
const shuffleRecipes = shuffle(recipeInstantiation);

let currentUser;
let modal;
let currentRecipe;

viewFavsButton.addEventListener('click', viewFavs);
viewGroceriesButton.addEventListener('click', viewGroceryList);
whatToCookButton.addEventListener('click', whatToCook);
grocerySpan.addEventListener('click', closeGroceryModal);
searchButton.addEventListener('click', displaySearchResults);
input.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    searchButton.click();
  }
});

window.onload = displayHandler;
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function displayHandler() {
  showRecipes(recipeInstantiation);
  showUsers();
  showFilterOptions();
}


function closeGroceryModal() {
  groceryModal.style.display = "none";
}

function openModals(event) {
  let eventId = event.target.id;
  currentRecipe = eventId;
  modal.style.display = 'block';
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
    span[i].addEventListener('click', function() {
      modal.style.display = "none";
    })
  }
}

function favoriteListener() {
  for (let i = 0; i < favoriteButton.length; i++) {
    favoriteButton[i].addEventListener('mousedown', addFavoriteRecipe);
    favoriteButton[i].addEventListener('mouseup', toggleFavoriteImage)
  }
}

function groceryListener() {
  for (let i = 0; i < groceryButton.length; i++) {
    groceryButton[i].addEventListener('click', addGroceryList);
  }
}

function toggleFavoriteImage(event) {
  if (event.target.src.includes('assets/002-star.svg')) {
    event.target.src = '../assets/001-favorite.svg';
  } else {
    event.target.src = '../assets/002-star.svg';
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporayValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporayValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporayValue;
  }
  return array;
}

function whatToCook() {
  if (!currentUser) {
    alert ('Pick a user then add a recipe to cook first!');
  } else if (!currentUser.recipesToCook.length) {
    alert ('Add a recipe to cook first!');
  } else {
    document.querySelector('#filter-text').innerText = "Filter your recipes";
    showRecipes(currentUser.recipesToCook);
    searchButtonCookListenHandler();
    searchButtonCookFilterHandler();
  }
}

function displayCookSearchResults() {
  let userResults = recipeInstantiation[0].searchRecipeByIngredient(input.value, currentUser.recipesToCook);
  showRecipes(userResults);
}
function searchButtonCookFilterHandler() {
  filterDropDown.setAttribute("onchange", "filterByType(this, currentUser.recipesToCook)");
}

function searchButtonCookListenHandler() {
  searchButton.removeEventListener('click', displaySearchResults);
  searchButton.addEventListener('click', displayCookSearchResults);
}

function viewFavs() {
  if (!currentUser) {
    alert ('Pick a user then favorite a recipe first!');
  } else if (!currentUser.favoriteRecipes.length) {
    alert ('Favorite a recipe first!');
  } else {
    searchText.placeholder = "-- Search your recipes --";
    filterText.innerText = "Filter your recipes";
    showRecipes(currentUser.favoriteRecipes);
    searchButtonFavListenHandler();
    searchButtonFavFilterHandler();
  }
}

function searchButtonFavFilterHandler() {
  filterDropDown.setAttribute("onchange", "filterByType(this, currentUser.favoriteRecipes)");
}

function searchButtonFavListenHandler() {
  searchButton.removeEventListener('click', displaySearchResults);
  searchButton.addEventListener('click', displayFavSearchResults);
}

function displayFavSearchResults() {
  let userResults = recipeInstantiation[0].searchRecipeByIngredient(input.value, currentUser.favoriteRecipes);
  showRecipes(userResults);
}

function viewGroceryList() {
  if (!currentUser) {
    alert ('Pick a user then create a grocery list for your recipe!');
  } else {
    if (currentUser.thingsToBuy[0] === undefined) {
      alert ('You have enough ingredients! No need to go to the store!');
    } else {
      let groceryListHTML = '';
      currentUser.thingsToBuy.forEach(item => {
        let ingredientNumber = item.ingredient;
        let ingredientName = ingredientHashmap[ingredientNumber].name;
        let amountToBuy = item.amountNeeded;
        let groceryDisplay = amountToBuy + ' ' + ingredientName;
        groceryListHTML += groceryDisplay;
      })
      grocerySpan.insertAdjacentHTML('afterend', groceryListHTML)
      groceryModal.style.display = "block";
    }
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
  let recipeNumber = Number(currentRecipe);
  recipeInstantiation.forEach(recipe => {
    if (recipe.id === recipeNumber) {
      let itemsNeeded = currentUser.pantry.checkPantry(recipe)
      currentUser.addIngredientToGroceryList(itemsNeeded[0]);
    }
  })
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
    return ingredientDetails;
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
    usersHTML += `<option class="nav__div__one__dropdown__choice" value="${user.name}">${user.name}</option>`;
    return usersHTML;
  }, '')
  document.querySelector('#user-drop').insertAdjacentHTML("afterend", userDropDownList);
}

function showFilterOptions() {
  let dropDownListOptions = identifyFilterOptions();
  let showOptions = dropDownListOptions.reduce((tagHTML, tag) => {
    tagHTML += `<option class="nav__div__one__dropdown__choice" value="${tag}">${tag}</option>`;
    return tagHTML;
  }, '');
  document.querySelector('#type-drop').insertAdjacentHTML("afterend", showOptions);
}

function identifyFilterOptions() {
  let filterOptions = recipeData.reduce((recipeTags, recipe) => {
    recipe.tags.forEach(tag => {
      if (!recipeTags.includes(tag)) {
        recipeTags.push(tag);
      }
    })
    return recipeTags;
  }, [])
  return filterOptions;
}

function filterByType(type, recipesContainer) {
  let filteredRecipe = recipesContainer.reduce((filteredRecipes, recipe) => {
    recipe.tags.forEach(tag => {
      if (tag === type.value) {
        filteredRecipes.push(recipe);
      }
    })
    return filteredRecipes;
  }, [])
  if (type.value === 'all-recipes') {
    showRecipes(recipeInstantiation);
  } else {
    showRecipes(filteredRecipe);
  }
}

function chooseUser(option) {
  currentUser = userInstantiation.find(user => {
    return option.value === user.name;
  })
}

function showRecipes(recipes) {
  let recipeHTML = '';
  recipes.forEach(recipe => {
    const showInstructions = recipe.getInstructions();
    let instructionsHTML = showInstructions.reduce((instructionDetail, instruction) => {
      instructionDetail += `<li>${instruction}</li>`;
      return instructionDetail;
    }, '')
    const amounts = recipe.getAmounts();
    const ingredientNames = recipe.getIngredients();
    const combineIngredientInfo = amounts.map((value, index) => {
      return value + ingredientNames[index];
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
                               <img class="favorite-button" src="../assets/002-star.svg" height="25" width="25" title="Add Recipe To Favorites">
                               <img class="cook-button" src="../assets/cooking.svg" height="25" width="25" title="Add Recipe To Your Cook List">
                               <img class="grocery-button" src="../assets/grocery-cart.svg" height="25" width="25" title="Add Missing Ingredients To Grocery List">
                               <div clas="body__main__section__article__modal__content__wrapper">
                                 <h2>${recipe.name}</h2>
                                 <div class="body__main__section__article__modal__content__wrapper__div">
                                   <img src="${recipe.image}" alt="${recipe.name}">
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
  modalListener();
  modalCloseListener();
  favoriteListener();
  groceryListener();
  cookListener();
}

function returnSearchResults() {
  return recipeInstantiation[0].searchRecipeByIngredient(input.value.toLowerCase(), recipeInstantiation);
}

function displaySearchResults() {
  let results = returnSearchResults();
  if (!results) {
    alert ('No recipes with that ingredient!');
  } else {
    showRecipes(results);
  }
}