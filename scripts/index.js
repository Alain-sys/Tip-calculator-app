let bill = document.querySelector('.bill');
let btnPercent = document.querySelectorAll('.btn-percent');
let inputPercent = document.querySelector('.input-percent');
let people = document.querySelector('.people');
let btnOutput = document.querySelector('.btn-output');
let outputAmount = document.querySelector('.amount');
let total = document.querySelector('.total');
let peopleText = document.querySelector('.people-text');
let contributor = document.querySelector('.attribution');
let percent = 0;

// Add text error when the content of people is empty or 0
function error() {
  peopleText.classList.add('active-error');
  peopleText.textContent = "Can't be zero";
  people.classList.add('error');
}

// remove text error when the user add content and don't write 0
function removeError() {
  peopleText.classList.remove('active-error');
  peopleText.textContent = '';
  people.classList.remove('error');
}

// function who calcul the bill with the percent and the numbers of people
function calcul() {
  if (people.value >= 1 && bill.value >= 0 && percent >= 0) {
    removeError();
    let calculPercent = (bill.value * percent) / 100;
    let calculTotal = bill.value / people.value + calculPercent / people.value;
    outputAmount.textContent = `$${(calculPercent / people.value).toFixed(2)}`;
    total.textContent = `$${calculTotal.toFixed(2)}`;
  } else {
    error();
  }
}

// remove the class "select" to the btnPercent
function removeClass() {
  btnPercent.forEach((btn) => {
    btn.classList.remove('select');
  });
}

// when the content of bill, inputPercent or people is type add the class "active" to the btnOutput and "effect" to the contributor else if nothing is type remove the class "active" and "effect"
function reset() {
  if (bill.value.length || inputPercent.value.length || people.value.length != '') {
    btnOutput.classList.add('active');
    contributor.classList.add('effect');
  } else {
    btnOutput.classList.remove('active');
    contributor.classList.remove('effect');
  }
}

// clear content of inputForm
function clearInput() {
  let inputForm = document.getElementsByClassName('refresh');
  for (let a = 0; a < inputForm.length; a++) {
    inputForm[a].value = '';
  }
  outputAmount.textContent = '$0.00';
  total.textContent = '$0.00';
  reset();
}
clearInput();

// call the function calcul and remove the class "select" for the previous button and add it to the new when the btnPercent is clicked
btnPercent.forEach((btn) => {
  btn.addEventListener('click', () => {
    percent = btn.value;
    removeClass();
    btn.classList.add('select');
    calcul();
  });
});

// call the function calcul when the user click on inputPercent
inputPercent.addEventListener('click', () => {
  percent = inputPercent.value;
  removeClass();
  calcul();
});

// call the function calcul and reset when the user type content in bill
inputPercent.addEventListener('input', () => {
  percent = inputPercent.value;
  calcul();
  reset();
});

// call the function calcul and reset when the user type content in bill
bill.addEventListener('input', () => {
  calcul();
  reset();
});

// call the function calcul and reset when the user type content in people
people.addEventListener('input', () => {
  calcul();
  reset();
});

// call the function clearInput when btnOutput is clicked
btnOutput.addEventListener('click', () => {
  removeClass();
  clearInput();
});
