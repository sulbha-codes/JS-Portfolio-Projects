// Elements
const themeToggle = document.getElementById("themeToggle");
const loanType = document.getElementById("loanType");
const ageInput = document.getElementById("age");
const incomeInput = document.getElementById("income");
const creditScoreInput = document.getElementById("creditScore");
const loanAmountInput = document.getElementById("loanAmount");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Load saved theme
document.body.classList.toggle("dark", localStorage.getItem("theme") === "dark");
themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

// Toggle dark/light theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
  themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";
});

// Loan rules
const loanRules = {
  home: { rate: 7.5, maxRatio: 0.6, minSalary: 25000 },
  car: { rate: 7.9, maxRatio: 0.5, minSalary: 20000 },
  personal: { rate: 10.6, maxRatio: 0.4, minSalary: 30000 },
};

// Eligibility check
checkBtn.addEventListener("click", () => {
  const age = parseInt(ageInput.value);
  const income = parseFloat(incomeInput.value);
  const creditScore = parseInt(creditScoreInput.value);
  const loanAmount = parseFloat(loanAmountInput.value);
  const type = loanType.value;

  // Validation
  if (isNaN(age) || isNaN(income) || isNaN(creditScore) || isNaN(loanAmount)) {
    result.innerHTML = "⚠️ Please fill all fields correctly!";
    result.style.color = "var(--error)";
    result.style.opacity = 1;
    return;
  }

  let message = "";
  let color = "";

  if (age < 21 || age > 60) {
    message = "❌ Denied: Age not eligible";
    color = "var(--error)";
  } else if (creditScore < 600) {
    message = "❌ Denied: Credit score too low";
    color = "var(--error)";
  } else if (income < 30000) {
    message = "⚠️ Conditional: Income below threshold, need co-signer";
    color = "var(--warn)";
  } else if (loanAmount > income * 10) {
    message = "⚠️ Conditional: Loan amount too high";
    color = "var(--warn)";
  } else {
    message = "✅ Approved: You are eligible for the loan!😃";
    color = "var(--accent)";
  }

  result.innerHTML = message;
  result.style.color = color;
  result.style.opacity = 1;
});