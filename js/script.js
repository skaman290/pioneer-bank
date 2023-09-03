//login button
const logInBtn = document.getElementById("login_btn");
logInBtn.addEventListener("click", function () {
  const logInForm = document.getElementById("login_form");
  logInForm.style.display = "none";

  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});
//deposit button
const depositBtn = document.getElementById("deposit_btn");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit_amount").value;
  const depositNumber = parseFloat(depositAmount);

  // const currentDeposit = document.getElementById("current_deposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumber;
  // document.getElementById("current_deposit").innerText = totalDeposit;
  updateSpanText("current_deposit", depositNumber);
  updateSpanText("current_balance", depositNumber);

  document.getElementById("deposit_amount").value = "";
});
// Withdraw button event handler
const withdrawBtn = document.getElementById("withdraw_btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdraw_amount");

  updateSpanText("current_withdraw", withdrawNumber);
  updateSpanText("current_balance", -1 * withdrawNumber);

  document.getElementById("withdraw_amount").value = "";
});

function getInputNumber(id) {
  const withdrawAmount = document.getElementById(id).value;
  const withdrawNumber = parseFloat(withdrawAmount);
  return withdrawNumber;
}

function updateSpanText(id, depositNumber) {
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById(id).innerText = totalBalance;
}