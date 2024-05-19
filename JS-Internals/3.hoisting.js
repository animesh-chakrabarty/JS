/*
reference video :
https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4

hoising is possible because of the memory allocation phase before the code execution is started. 
*/

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 100;
  console.log(x);
  b();

  function ax() {
    // var x = "inside function x";
    console.log(x);
  }

  ax();
}

function b() {
  var x = 10;
  console.log(x);
}
