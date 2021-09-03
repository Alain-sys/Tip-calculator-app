let bill = document.querySelector('.bill');
let btnPercent = document.getElementsByClassName('btn-percent');
let inputPercent = document.querySelector('.input-percent');
let people = document.querySelector('.people');
let btnOutput = document.querySelector('.btn-output');
let allInput = document.querySelectorAll('input');
let outputAccount = document.querySelector('.amount');
let outputTotal = document.querySelector('.total');


// Check input is empty and change the button-reset color 
allInput.forEach(function(input) {
    input.addEventListener("input", function() {
        if ((bill.value != "") || (people.value != "") || (inputPercent.value != "")){
            btnOutput.style.background = "#26C2AE";
            btnOutput.style.cursor = "pointer";
        }else{
            btnOutput.style.background = "#0D686D";
            btnOutput.style.cursor = "auto";
        }
    });
});

function calcul(e) {
    let ValueBtn = e.target.value;
    let tipAccount = bill.value * (ValueBtn / 100) / people.value;
    let total = bill.value / people.value + tipAccount;
    outputAccount.innerHTML = tipAccount;
    outputTotal.innerHTML = total;
}

for(let i = 0; i < btnPercent.length; i++){
    btnPercent[i].addEventListener("click", calcul)
}

inputPercent.addEventListener("input", calcul);
inputPercent.addEventListener("click", calcul);


            
btnOutput.addEventListener("click", function() {
    bill.value= "";
})