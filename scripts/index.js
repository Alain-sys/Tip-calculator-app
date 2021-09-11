let bill = document.querySelector('.bill');
let btnPercent = document.querySelectorAll('.btn-percent');
let inputPercent = document.querySelector('.input-percent');
let people = document.querySelector('.people');
let btnOutput = document.querySelector('.btn-output');
let outputAmount = document.querySelector('.amount');
let total = document.querySelector('.total');
let peopleText = document.querySelector('.people-text');

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
  if (people.value >= 1 && bill.value >= 0) {
    removeError();
    let calculPercent = (bill.value * percent) / 100;
    let calculTotal = bill.value / people.value + calculPercent / people.value;
    outputAmount.textContent = `$${(calculPercent / people.value).toFixed(2)}`;
    total.textContent = `$${calculTotal.toFixed(2)}`;
  } else {
    error();
  }
}

function removeClass() {
  btnPercent.forEach((btn) => {
    btn.classList.remove('select');
  });
}

btnPercent.forEach((btn) => {
  btn.addEventListener('click', () => {
    percent = btn.value;
    removeClass();
    btn.classList.add('select');
    calcul();
  });
});

// call the function calcul when the user type content in bill
inputPercent.addEventListener('input', () => {
  percent = inputPercent.value;
  btnPercent.forEach((btn) => {
    btn.classList.remove('select');
  });
  calcul();
});

// call the function calcul when the user click on inputPercent
inputPercent.addEventListener('click', () => {
  percent = inputPercent.value;
  calcul();
});

// call the function calcul when the user type content in bill
bill.addEventListener('input', () => {
  calcul();
});

// call the function calcul when the user type content in people
people.addEventListener('input', () => {
  calcul();
});

// clear inputForm when btnOutput is clicked by the user
btnOutput.addEventListener('click', clearInput, false);

// when the content of bill, inputPercent or people is type add the class active to the btnOutput
function reset() {
  if (bill.value.length || inputPercent.value.length || people.value.length != 0) {
    btnOutput.classList.add('active');
  } else if (bill.value.length || inputPercent.value.length || people.value.length == '') {
    btnOutput.classList.remove('active');
  }
}
inputPercent.addEventListener('input', reset, false);
bill.addEventListener('input', reset, false);
people.addEventListener('input', reset, false);

// clear inputForm when the website is refresh
function clearInput() {
  let inputForm = document.getElementsByClassName('refresh');
  for (let a = 0; a < inputForm.length; a++) {
    inputForm[a].value = '';
  }
  outputAmount.textContent = '$0.00';
  total.textContent = '$0.00';
}
clearInput();
