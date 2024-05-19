const parentSelector = document.querySelector("#parent");

parentSelector.addEventListener("click", (e) => {
  let route = e.target.id;
  console.log(route);
  window.location.href = "18.event_delegation.html/" + route;
});
