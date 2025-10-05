document.getElementById('checkBtn').addEventListener('click', function() {
  const age = parseInt(document.getElementById('age').value);
  const income = parseFloat(document.getElementById('income').value);
  const creditScore = parseInt(document.getElementById('creditScore').value);
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);

  const statusElement = document.getElementById('statusResult');
  let status = '';
  let color = '';

  // Input validation
  if(isNaN(age) || isNaN(income) || isNaN(creditScore) || isNaN(loanAmount)){
    statusElement.innerText = "Please enter valid numbers for all fields.";
    statusElement.style.color = "red";
    return;
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