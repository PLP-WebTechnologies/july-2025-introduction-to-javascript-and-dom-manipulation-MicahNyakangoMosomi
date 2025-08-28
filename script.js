// Covers: Variables, Conditionals, Functions, Loops, DOM Manipulation

// ------------------------------------
// PART 1: BASICS - Variables & Conditionals
// ------------------------------------
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const userOutput = document.getElementById("userOutput");

checkAgeBtn.addEventListener("click", () => {
  let age = parseInt(ageInput.value);

  if (isNaN(age)) {
    userOutput.textContent = "Please enter a valid number!";
  } else if (age >= 18) {
    userOutput.textContent = `You are ${age}. You are an adult`;
  } else {
    userOutput.textContent = `You are ${age}. You are still a minor`;
  }
});

// ------------------------------------
// PART 2: FUNCTIONS - Reusable Logic
// ------------------------------------
function calculateTotal(a, b) {
  return a + b;
}

function formatResult(num1, num2, total) {
  return `The sum of ${num1} and ${num2} is ${total}`;
}

const calcBtn = document.getElementById("calcBtn");
const calcOutput = document.getElementById("calcOutput");

calcBtn.addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    calcOutput.textContent = "Enter valid numbers!";
  } else {
    let total = calculateTotal(num1, num2);
    calcOutput.textContent = formatResult(num1, num2, total);
  }
});

// ------------------------------------
// PART 3: LOOPS 
// ------------------------------------
const fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
const fruitsList = document.getElementById("fruitsList");
const showListBtn = document.getElementById("showListBtn");

showListBtn.addEventListener("click", () => {
  fruitsList.innerHTML = ""; // clear old list

  // Example 1: for loop
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitsList.appendChild(li);
  }

  // Example 2: forEach loop
  console.log("Fruit list using forEach:");
  fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
  });
});

// ------------------------------------
// PART 4: DOM MANIPULATION
// ------------------------------------
const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  toggleText.classList.toggle("highlight"); // toggle CSS class
});

const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

let itemCount = 0;

addItemBtn.addEventListener("click", () => {
  itemCount++;
  let li = document.createElement("li");
  li.textContent = `Dynamic Item ${itemCount}`;
  dynamicList.appendChild(li);
});
