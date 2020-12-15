// Input activity

//display activity in

// Wire it

var input9am = document.getElementById("input9am");
var input10am = document.getElementById("input10am");
var input11am = document.getElementById("input11am");
var input12pm = document.getElementById("input12pm");
var input1pm = document.getElementById("input1pm");
var input2pm = document.getElementById("input2pm");
var input3pm = document.getElementById("input3pm");
var input4pm = document.getElementById("input4pm");
var input5pm = document.getElementById("input5pm");

// Current time
console.log(moment().format("LT"));

var currentTime = moment().format("LT");

console.log("Input1", input5pm);
console.log("Moment:", moment());

// console.log("Testing catching a field", input10am.placeholder);
// console.log("Placeholder", input10am.placeholder);
// console.log("Field Value:", input10am.value);

// logic to disable-ish
if (true) {
  // input9am.setAttribute("disabled", "true");
  input10am.setAttribute("disabled", "true");
  input11am.setAttribute("disabled", "true");
  input12pm.setAttribute("disabled", "true");
  input1pm.setAttribute("disabled", "true");
}

// console.log("Testing catching a field", testField);
// console.log("Placeholder", testField.placeholder);
// console.log("Field Value:", testField.value);
// console.log("Moment:", moment());

// logic to disable fields once activity is added
if (false) {
  testField.setAttribute("disabled", "true");
}

// Save button functionality. save tasks to local storage
