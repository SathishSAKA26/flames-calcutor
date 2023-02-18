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

let listEl = document.getElementById("list");
let resetEl = document.getElementById("reset");

// globule verbals
listEl.innerHTML = null;
// only function
function flames() {
  var yourName = document.getElementById("You").value;
  var crushName = document.getElementById("crush").value;

  // Add arr value
  var yourName_arr = yourName.split("");
  var crushName_arr = crushName.split("");

  // For loop
  for (var i = 0; i < yourName_arr.length; i++) {
    for (var j = 0; j < crushName_arr.length; j++) {
      if (yourName_arr[i] == crushName_arr[j]) {
        yourName_arr.splice(i, 1);
        crushName_arr.splice(j, 1);
        i--;
        break;
      }
    }
  }

  var count = yourName_arr.length + crushName_arr.length;
  var result = "";

  if (count == 0) {
    result = "இரண்டு பெயர்களும் தேவை!❤️😞..";
  } else {
    var flames_arr = [
      "Friends",
      "Lovers",
      "Angry",
      "Married",
      "Engaged",
      "Siblings",
    ];

    while (flames_arr.length > 1) {
      var index = count % flames_arr.length;
      if (index == 0) {
        index = flames_arr.length;
      }
      flames_arr.splice(index - 1, 1);
    }
    result = flames_arr[0];
    listEl.innerHTML = result;
  }
}
