// UI variables
const loanAmount = document.querySelector("#amount"),
  interestRate = document.querySelector("#interest"),
  repaymentYears = document.querySelector("#years"),
  form = document.querySelector("form"),
  monthlyPaymentField = document.querySelector("#monthly-payment"),
  totalPaymentField = document.querySelector("#total-payment"),
  totalInterestField = document.querySelector("#total-interest"),
  loadingDiv = document.querySelector("#loading"),
  resultDiv = document.querySelector("#result");

form.addEventListener("submit", calculateLoan);

function calculateLoan(e) {
  resultDiv.style.display = "none";
  loading();

  const principal = parseFloat(loanAmount.value),
    calculatedInterest = parseFloat(interestRate.value) / 100 / 12,
    calculatedPayment = parseFloat(repaymentYears.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest) / (x - 1);
  console.log(x, monthly);

  if (isFinite(monthly)) {
    monthlyPaymentField.value = monthly.toFixed(2);
    totalPaymentField.value = (monthly * calculatedPayment).toFixed(2);
    totalInterestField.value = (
      monthly * calculatedPayment -
      principal
    ).toFixed(2);
  }

  e.preventDefault();
}

function loading() {
  loadingDiv.style.display = "block";
  setTimeout(() => {
    loadingDiv.style.display = "none";
    resultDiv.style.display = "block";
  }, 2000);
}
