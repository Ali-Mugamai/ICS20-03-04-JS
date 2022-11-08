// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-03-04-JS/sw.js", {
    scope: "/ICS20-03-04-JS/",
  })
}
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
  // process
  const temp = ((fahrenheit - 32) * 5 / 9 ).toFixed(2)
  // output
  document.getElementById("temp").innerHTML = "temperature is: " + temp + " °C"
}
