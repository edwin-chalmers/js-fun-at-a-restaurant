function createRestaurant(restaurantName) { 
  var place = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }  
  } 
  return place
} 


// // // Why does this code work without a declared varible but the code withdeclared varibles doesn;t
// function createRestaurant(restaurantName) { 
//   return {
//     name: restaurantName,
//     menus: {
//       breakfast: [],
//       lunch: [],
//       dinner: []
//     }    
//   };   
// }   


// function addMenuItem(pizzaRestaurant, pizzaType) {
//   pizzaRestaurant.menus.lunch.push(pizzaType)
// }


// function addMenuItem(pizzaRestaurant, pizzaType) {
//   for (var i = 0; i < pizzaRestaurant.menus; i++) {
//     if (pizzaRestaurant.menus[i].type = "breakfast" ) {
//       pizzaRestaurant.menus.breakfast.push(pizzaType)
//     } else if { 
//       (pizzaRestaurant.menus[i].type = "lunch")
//     } pizzaRestaurant.menus.lunch.push(pizzaType) 
//   }
// }


// function addMenuItem(pizzaRestaurant, pizzaType) {
//   pizzaRestaurant.menus[pizzaType.type].push(pizzaType)
// }

// function addMenuItem(pizzaRestaurant, pizzaType) {
//   if (!pizzaRestaurant.menus[pizzaType.type] === pizzaType.type) {
//   pizzaRestaurant.menus[pizzaType.type].push(pizzaType)
//   }
// }


function addMenuItem(pizzaRestaurant, pizzaType) {
  var menuType = pizzaRestaurant.menus[pizzaType.type];
  var itemExists = false;

  for (var i = 0; i < menuType.length; i++) {
    if (menuType[i].name === pizzaType.name) {
      itemExists = true;
    }
  }

  if (!itemExists) {
    menuType.push(pizzaType);
  }
}



function removeMenuItem(pizzaRestaurant, itemName, menuType) {
  var menu = pizzaRestaurant.menus[menuType];
  var itemIndex = -1;

  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === itemName) {
      itemIndex = i;
    }
  }

  if (itemIndex !== -1) {
    menu.splice(itemIndex, 1);
    return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`;
  } else {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
}




// // // Why is .type necessary for this code to work? 
// // // Is it because they're bring categories by their type, 
// // // and being putt into the arrays from createRestaurant.

function checkForFood(restaurant, foodItem) {
  var menu = restaurant.menus[foodItem.type]


  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === foodItem.name) {
      return `Yes, we're serving ${foodItem.name} today!`;
    }
  }

return `Sorry, we aren't serving ${foodItem.name} today.`;
}







module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}