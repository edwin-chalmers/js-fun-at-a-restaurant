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





module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}