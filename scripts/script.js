"use strict";

// // Get elements values
// const yourEl = document.getElementById("You");
// const crushEl = document.getElementById("crush");

// const listEl = document.getElementById("list");

// // button elements
// const flamesBtnEl = document.getElementById("flames-button");
// const resetBtnEl = document.getElementById("reset");

// global variable

// init function

// event listeners

// create objects
// class Flames () => {
//   // The constructor takes both names as parameters
//   constructor((yourEl, crushEl) => {
//     this.yourEl = yourEl;
//     this.crushEl = crushEl;
// We then create a clone of both name and convert them

// if (yourEl === undefined || crushEl === undefined)
//   throw Error("இரண்டு பெயர்களும் தேவை!❤️😞");

//     this.a = this.yourEl.toLowerCase().replace(/s/g, "");
//     this.b = this.crushEl.toLowerCase().replace(/s/g, "");
//   })
// }

// Flames();

// console.log(Flames);

// only function
function flames() {
  var yourName = document.getElementById("You").value;
  var crushName = document.getElementById("crush").value;

  // Add arr value
  var yourName_arr = yourName.split("");
  var crushName_arr = crushName.split("");

  // No name enter alert message send in user
  if (yourName === undefined || crushName === undefined) {
    throw Error("இரண்டு பெயர்களும் தேவை!❤️😞");
  }

  // For loops
  for (var i = 0; i < yourName_arr.length; i++) {
    for (var j = 0; i < crushName_arr.length; i++) {
      if (yourName_arr[i] == crushName_arr[j]) {
      }
    }
  }
}
