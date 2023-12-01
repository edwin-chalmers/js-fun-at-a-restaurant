function nameMenuItem(food) {
  return `Delicious ${food}`
}



function createMenuItem() {
  var menuItem = {
    name: "Delicious French Toast",
    price: 10.99,
    type: "breakfast"
    }
    return menuItem
}



// // // Why did this one not work?
// function addIngredients(toppings, ingredients) {
//   if (ingredients.includes(toppings) = false) {
//     ingredients.push(toppings)
//   }
//   return ingredients
// }

function addIngredients(toppings, ingredients) {
  if (!ingredients.includes(toppings)) {
    ingredients.push(toppings)
  }
  return ingredients
}


function formatPrice(initialPrice) { 
  return `$${initialPrice}`;
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

function decreasePrice() {
  var newPrice = createMenuItem()
    newPrice.price = 6.00
    var decreasedPrice = newPrice.price * 0.9
    return decreasedPrice
 }

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}

