/*
callback Hell :



*/

/*
Problem Statement :
Ecommerce cart with the following features -
1. createOrder
2. showOrderSummary
3. proceedToPayment
4. updateWallet
5. takeBackToHomePage
*/
const cart = ["shoes", "shirt", "trouser"];

const createOrder = (cart, showOrderSummary) => {
  console.log("created Order for items : ", cart);
  showOrderSummary();
};

const showOrderSummary = (order, proceedToPayment) => {
  console.log("Order for below items are placed : ", order);
  proceedToPayment();
};

const proceedToPayment = (updateWallet) => {
  console.log("Payment processing");
  setTimeout(() => {
    console.log("payment done");
    updateWallet();
  }, 2000);
};

const updateWallet = (takeBackToHomePage) => {
  setTimeout(() => {
    console.log("Your wallet is updated");
    takeBackToHomePage();
  }, 1000);
};

const takeBackToHomePage = () => {
  setTimeout(() => {
    console.log("User returned to homePage");
  }, 1000);
};

// This is callback hell
createOrder(cart, () => {
  showOrderSummary(cart, () => {
    proceedToPayment(() => {
      updateWallet(() => {
        takeBackToHomePage();
      });
    });
  });
});
