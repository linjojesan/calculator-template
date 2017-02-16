// business logic:
var add = function(number1, number2) {
  return number1 + number2;
};

<<<<<<< HEAD
var BMI = function(number1, number2) {
  return number1/(number2^2)
=======
var subtract = function(number1, number2) {
  return number1 - number2;
>>>>>>> origin/master
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic:


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
var number1 = parseInt($("#add1").val());
var number2 = parseInt($("#add2").val());
<<<<<<< HEAD
var result = BMI(number1,number2);
=======
var result = multiply(number1,number2);
>>>>>>> origin/master
$("#output").text(result);





  });
});
