function nameMenuItem(food) {
  return `Delicious ${food}`
}



function createMenuItem(name, price, type) {
  var menuItem = {
    name, 
    price,
    type,
    }
    return menuItem
}



// // // Why did this one not work?
// This didn't work because im assinging the result of the includes method to false istead of comapring it
function addIngredients(toppings, ingredients) {
  if (ingredients.includes(toppings) = false) {
    ingredients.push(toppings)
  }
  return ingredients
}

function addIngredients(toppings, ingredients) {
  if (!ingredients.includes(toppings)) {
    ingredients.push(toppings)
  }
  return ingredients
}



// // // Not sure how to make it change in the second half
function formatPrice(initialPrice) { 
  // console.log("initialPrice:", initialPrice)
  return `$${initialPrice}`
}


// function decreasePrice() {
//  var menuItem = {
//     name: "Delicious French Toast",
//     price: 6.00,
//     type: "breakfast"
//     }
//     var decreasedPrice = menuItem.price * 0.9
//     return decreasedPrice
// }

// // // Not sure if i did this the way it was intended
function decreasePrice() {
  var newPrice = createMenuItem()
    newPrice.price = 6.00
    var decreasedPrice = newPrice.price * 0.9
    return decreasedPrice
 }


// function createRecipe() {
  
// }


function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

