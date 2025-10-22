// ======= Loan Eligibility Checker =======
// This JavaScript checks if a person is eligible for a loan
// based on their age, income, credit score, and loan amount.

// Instructions:
// 1. Input values are taken from HTML input fields.
// 2. Validation ensures all inputs are numbers.
// 3. Eligibility is checked using if–else statements.
// 4. The result is displayed dynamically with color feedback.



document.getElementById('checkBtn').addEventListener('click', function() {
  
  // Get values from input boxes
  const age = parseInt(document.getElementById('age').value);
  const income = parseFloat(document.getElementById('income').value);
  const creditScore = parseInt(document.getElementById('creditScore').value);
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);

  //Addition👇

const themeToggle = document.getElementById("themeToggle");

// Load saved theme from localStorage
document.body.classList.toggle("dark", localStorage.getItem("theme") === "dark");
themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

// Toggle dark/light mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
  themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";
});

// 👆🏻Addition//

// Get the element where the result will be displayed
const statusElement = document.getElementById('statusResult');
let status = ''; // Message to show
let color = '';  // Color of the message

  // Check if all inputs are valid 
  if(isNaN(age) || isNaN(income) || isNaN(creditScore) || isNaN(loanAmount)){
    statusElement.innerText = "Please enter valid numbers for all fields.";
    statusElement.style.color = "red";
    return;// Stop the code if any input is missing or invalid
  }

  // Eligibility checks using conditionals
  if(age < 21 || age > 60){
    status = "Denied: Age not eligible";
    color = "red";
  } else if(creditScore < 600){
    status = "Denied: Credit score too low";
    color = "red";
  } else if(income < 30000){
    status = "Conditional: Income below threshold, need co-signer";
    color = "orange";
  } else if(loanAmount > income * 10){
    status = "Conditional: Loan amount too high";
    color = "orange";
  } else {
    status = "Approved: You are eligible for the loan!";
    color = "green";
  }

  // Display result
  statusElement.innerText = status;
  statusElement.style.color = color;
});