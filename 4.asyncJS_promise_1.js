/*
Promise (Interview Defination) : Promise is an object that represents eventual completion or failure of an asynchrounous operation. 
*/

// Previous Example of createOrder using callback
createOrder(cart, () => {
  showOrderSummary(cart, () => {
    proceedToPayment(() => {
      updateWallet(() => {
        takeBackToHomePage();
      });
    });
  });
});

// Same code with promise chaining
createOrder(cart)
  .then((orderId) => {
    return showOrderSummary(orderId);
  })
  .then((orderSummary) => {
    return proceedToPayment(orderSummary);
  })
  .then((paymentInfo) => {
    return updateWallet(paymentInfo);
  })
  .then((orderSuccess) => {
    if (orderSuccess) return takeBackToHomePage();
  });
