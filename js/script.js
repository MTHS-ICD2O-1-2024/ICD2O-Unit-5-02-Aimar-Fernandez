// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  const positiveNumber = document.getElementById("positive-option").checked
  if (positiveNumber==true) {
    document.getElementById("answer").innerHTML = 
      "<p>The random number is: " + randomNumber + "</p>"
  } 
  else {
    document.getElementById("answer").innerHTML = 
      "<p>The random number is: -" + randomNumber + "</p>"
  }
  
}