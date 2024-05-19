/*
Promise has two main components -
1. consuming promise (then , catch)
2. producing promise (resolve , reject)

whatever we pass inside resolve function will be recieved by the callback inside .then method. 
*/

const cart = ["shoe", "belt", "shirt"];

// Producing promise
const createOrder = (cart) => {
  return new Promise((resolve, reject) => {
    // 1.validate cart
    // 2.create order and return orderID

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderID = generateOrderID(cart);
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 2000);
    } else {
      const err = new Error("something went wrong");
      reject(err);
    }
  });
};

const proceedToPayment = (orderID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment succesful");
    }, 2000);
  });
};

const validateCart = (cart) => {
  return true;
};

const generateOrderID = (cart) => {
  const orderID = 123456;
  return orderID;
};

// Consuming promise
createOrder(cart)
  .then((orderID) => {
    console.log(orderID);
    return orderID;
  })
  .then((orderID) => {
    return proceedToPayment(orderID);
  })
  .then((statement) => {
    console.log(statement);
  })
  .catch((err) => {
    console.log(err.message);
  });
