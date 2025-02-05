function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "There are no products in the order!";
  } else if (ordered > available) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}
console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // "Your order is too large, there are not enough items in stock!"
console.log(checkStorage(70, 0)); // "There are no products in the order!"
console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 250)); // "Your order is too large, there are not enough items in stock!"
console.log(checkStorage(150, 0)); // "There are no products in the order!"
console.log(checkStorage(80, 80)); // "The order is accepted, our manager will contact you"
