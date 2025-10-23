/*
  LoanLogic - JavaScript
  ----------------------
  Purpose:
  - Handles loan eligibility checking based on user input.
  - Applies real-world inspired rules for Home, Personal, Car, and Education loans.
  - Displays approval, conditional, or denial messages dynamically.
  - Shows interest rate for approved loans.
  - Supports dark/light theme toggle with localStorage persistence.

  Instructions:
  1. Ensure HTML inputs have the correct IDs: themeToggle, loanType, age, income, creditScore, loanAmount, checkBtn, result.
  2. Add new loan types by updating the loanRules object.
  3. Eligibility logic can be modified inside the checkBtn click event or refactored into a separate function.
  4. All results are displayed in the #result div, with colors for feedback.
  5. Theme toggle automatically saves preference in localStorage.
  */






//// Elements References//////
const themeToggle = document.getElementById("themeToggle");
const loanType = document.getElementById("loanType");
const ageInput = document.getElementById("age");
const incomeInput = document.getElementById("income");
const creditScoreInput = document.getElementById("creditScore");
const loanAmountInput = document.getElementById("loanAmount");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

//// Load saved theme from localstorage///
document.body.classList.toggle("dark", localStorage.getItem("theme") === "dark");
themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

///// Toggle dark/light theme on click/////
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
  themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";
});

// Loan Rules//
// Define eligibility criteria and interest rates per loan type///
const loanRules = {
  home: { minSalary: 40000, minCredit: 650, maxMultiplier: 15, rate: 7.5 },
  personal: { minSalary: 30000, minCredit: 700, maxMultiplier: 10, rate: 10.6 },
  car: { minSalary: 25000, minCredit: 600, maxMultiplier: 12, rate: 8.2 },
  education: { minSalary: 20000, minCredit: 650, maxMultiplier: 8, rate: 9.1 },
};





//// Eligibility check////
checkBtn.addEventListener("click", () => {
  // Parse user inputs //
  const age = parseInt(ageInput.value);
  const income = parseFloat(incomeInput.value);
  const creditScore = parseInt(creditScoreInput.value);
  const loanAmount = parseFloat(loanAmountInput.value);
  const type = loanType.value;

//// Get selected loan rules, default to personal if type not found///
const rule = loanRules[type] || loanRules.personal; 

  //  Input Validation
  if (isNaN(age) || isNaN(income) || isNaN(creditScore) || isNaN(loanAmount)) {
    result.innerHTML = "⚠️ Please fill all fields correctly!";
    result.style.color = "var(--error)";
    result.style.opacity = 1;
    return;
  }

  let message = "";
let color = "";

// Apply eligibility logic
if (age < 21 || age > 60) {
  message = "❌ Denied: Age not eligible";
  color = "var(--error)";
} else if (creditScore < rule.minCredit) {
  message = `❌ Denied: Credit score too low (need ≥ ${rule.minCredit})`;
  color = "var(--error)";
} else if (income < rule.minSalary) {
  message = `⚠️ Conditional: Income below threshold (need ₹${rule.minSalary.toLocaleString()} or co-signer)`;
  color = "var(--warn)";
} else if (loanAmount > income * rule.maxMultiplier) {
  message = `⚠️ Conditional: Loan amount too high (max ₹${(income * rule.maxMultiplier).toLocaleString()})`;
  color = "var(--warn)";
} else {
  message = `✅ Approved: You are eligible for the loan! 😃<br>💰 Interest Rate: ${rule.rate}%`;
  color = "var(--accent)";
}
  
//Display result
  result.innerHTML = message;
  result.style.color = color;
  result.style.opacity = 1;
});