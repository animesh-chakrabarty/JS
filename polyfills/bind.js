let user1 = {
  firstName: "Animesh",
  lastName: "Chakrabarty",
};

const printName = function (city, state, country) {
  console.log(
    this.firstName + " " + this.lastName + ", " + city + ", " + state + ", " + country
  );
};

Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printUser1Name = printName.myBind(user1, "BHR");
printUser1Name("WB", "IN");
