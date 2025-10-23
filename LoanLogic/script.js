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
const themeToggle = document.getElementById("themeToggle"); // Dark/Light mode toggle button
const loanType = document.getElementById("loanType");       // Dropdown for loan type selection
const ageInput = document.getElementById("age");            // Input for user's age
const incomeInput = document.getElementById("income");      // Input for monthly income
const creditScoreInput = document.getElementById("creditScore");  // Input for credit score
const loanAmountInput = document.getElementById("loanAmount");    // Input for desired loan amount
const checkBtn = document.getElementById("checkBtn");             // Button to trigger eligibility check

const result = document.getElementById("result");                // Div to display eligibility result

//// Load saved theme from localstorage and set toggle icon accordingly ////
document.body.classList.toggle("dark", localStorage.getItem("theme") === "dark"); // Apply dark mode if previously saved
themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"; // Update button icon based on current theme

///// Toggle dark/light theme on click/////
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // Switch between dark and light theme
  const mode = document.body.classList.contains("dark") ? "dark" : "light"; // Determine current mode
  localStorage.setItem("theme", mode); // Save user preference in localStorage
  themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";  // Update toggle button icon
});

// Loan Rules//
// Define eligibility criteria and interest rates per loan type///

    //minSalary:      // Minimum monthly income required
    //minCredit:       // Minimum credit score required
    //maxMultiplier:   // Maximum loan amount = income * multiplier
    //rate:            // Interest rate (%) for approved loans
const loanRules = {
  home: { minSalary: 40000, minCredit: 650, maxMultiplier: 15, rate: 7.5 }, 
  personal: { minSalary: 30000, minCredit: 700, maxMultiplier: 10, rate: 10.6 },
  car: { minSalary: 25000, minCredit: 600, maxMultiplier: 12, rate: 8.2 },
  education: { minSalary: 20000, minCredit: 650, maxMultiplier: 8, rate: 9.1 },
};





//// Eligibility check////
checkBtn.addEventListener("click", () => {
  // Parse user inputs //
  const age = parseInt(ageInput.value);  // convert age input to integer//
  const income = parseFloat(incomeInput.value); //convert income input to float
  const creditScore = parseInt(creditScoreInput.value); // convert credit score input to integer
  const loanAmount = parseFloat(loanAmountInput.value); // convert desired loan amount to float
  const type = loanType.value; // Get selected loantype from dropdown

//// Get the rules for the selected loan type ////
// If the selected type is not found in loanRules, default to personal loan rules
const rule = loanRules[type] || loanRules.personal; 

  //  Input Validation: Ensure all fields are filled correctly
  if (isNaN(age) || isNaN(income) || isNaN(creditScore) || isNaN(loanAmount)) {
    result.innerHTML = "⚠️ Please fill all fields correctly!"; // Show warning if any input is invalid
    result.style.color = "var(--error)"; // Set text color to error
    result.style.opacity = 1; // Make message visible
    return;   // Stop further execution
  }

  let message = "";
let color = "";

// Apply eligibility logic
if (age < 21 || age > 60) {
  // Deny if age is not within eligible range
  message = "❌ Denied: Age not eligible";
  color = "var(--error)";
} else if (creditScore < rule.minCredit) {
  // Deny if credit score is below minimum required for the loan type
  message = `❌ Denied: Credit score too low (need ≥ ${rule.minCredit})`;
  color = "var(--error)";
} else if (income < rule.minSalary) {
  // Conditional approval if income is below minimum salary
  message = `⚠️ Conditional: Income below threshold (need ₹${rule.minSalary.toLocaleString()} or co-signer)`;
  color = "var(--warn)";
} else if (loanAmount > income * rule.maxMultiplier) {
  // Conditional approval if requested loan exceeds maximum allowed
  message = `⚠️ Conditional: Loan amount too high (max ₹${(income * rule.maxMultiplier).toLocaleString()})`;
  color = "var(--warn)";
} else {
  // Approve if all conditions are met
  message = `✅ Approved: You are eligible for the loan! 😃<br>💰 Interest Rate: ${rule.rate}%`;
  color = "var(--accent)";
}
  
// Display the result message with appropriate color and make it visible
  result.innerHTML = message;
  result.style.color = color;
  result.style.opacity = 1;
});