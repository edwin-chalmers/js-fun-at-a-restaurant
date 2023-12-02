// function takeOrder(orders, deliveryOrders) {
//   deliveryOrders.push(orders)
// }

// function takeOrder(orders, deliveryOrders) {
//   if (!deliveryOrders.includes(orders))
//   deliveryOrders.push(orders)
// }

// function takeOrder(orders, deliveryOrders) {
//   if (!deliveryOrders.includes(orders)) 
//   if (deliveryOrders.length < 3) 
//   deliveryOrders.push(orders); 
// }

function takeOrder(orders, deliveryOrders) {
  if (!deliveryOrders.includes(orders) && deliveryOrders.length < 3) 
  deliveryOrders.push(orders); 
}







function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i,1)
    }
    // console.log("order number:", deliveryOrders[i].orderNumber)
  }
}


// // // probably should have used .join but i'm in too deep
function listItems(deliveryOrders) {
  var combinedString = ""
  for (var i = 0; i < deliveryOrders.length; i++) {
    combinedString += deliveryOrders[i].item 
    if (i < deliveryOrders.length - 1) {
      combinedString += ", ";
    }
  }
return combinedString
}  




// function searchOrder(deliveryOrders, option) {
//   var hasItem = true
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if (deliveryOrders[i].item === option) {
//       hasItem = false
//     } else {
//       hasItem = true
//     }
//   } return hasItem
// }

// Why does the location of the return statment matter so much?
function searchOrder(deliveryOrders, searchItem) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === searchItem) {
      return true;
    }
  }
return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}