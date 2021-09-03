let bill = document.querySelector('.bill');
let btnPercent = document.getElementsByClassName('btn-percent');
let inputPercent = document.querySelector('.input-percent');
let people = document.querySelector('.people');
let btnOutput = document.querySelector('.btn-output');
let outputAmount = document.querySelector('.amount');
let total = document.querySelector('.total');

function calcul(e) {
  let x = bill.value;
  let y = e.target.value;
  let w = people.value;
  // if (w == '') {
  //   people.classList.add('error');
  // }
  console.log(x);
  console.log(y);
  console.log(w);
  let calculPercent = (x * y) / 100;
  let calculTip = calculPercent / w;
  outputAmount.innerHTML = calculTip.toFixed(2);

  let calculTotal = x / w + calculTip;
  total.innerHTML = calculTotal.toFixed(2);
}

for (let i = 0; i < btnPercent.length; i++) {
  btnPercent[i].addEventListener('click', calcul, false);
}

inputPercent.addEventListener('input', calcul, false);
inputPercent.addEventListener('click', calcul, false);

// clear inputForm when website refresh
function clearInput() {
  let inputForm = document.getElementsByClassName('refresh');
  for (let a = 0; a < inputForm.length; a++) {
    inputForm[a].value = '';
  }
}
clearInput();
