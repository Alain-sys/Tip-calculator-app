let bill = document.querySelector('.bill');
let btnPercent = document.querySelectorAll('.btn-percent');
let inputPercent = document.querySelector('.input-percent');
let people = document.querySelector('.people');
let btnOutput = document.querySelector('.btn-output');
let allInput = document.querySelectorAll('input');
let outputAccount = document.querySelector('.amount');
let outputTotal = document.querySelector('.total');
let errorNumber= document.querySelector('.errorNumber');
let tip = "";

// function calcul() {
//     if((bill.value != "") && (bill.value != 0)){
//         let tipAccount = bill.value;
//         outputAccount.textContent = `$${tipAccount}`;
//         if((inputPercent.value != "") && (inputPercent.value != 0)){
//             tipAccount = bill.value*(tip/100);
//             outputAccount.textContent = `$${tipAccount}`;
//         }
//         if((people.value != "") && (people.value != 0)){
//             tipAccount = bill.value*(tip/100)/people.value;
//             outputAccount.textContent = `$${tipAccount}`;
//         } 
//     }else{
//         outputAccount.textContent = "$0.00";
//     }
// }

// allInput.forEach(function(input) {
//     input.addEventListener("input", () => {
//         tip = inputPercent.value;
//         if (allInput.value.length != ""){
//             console.log("hello")
//             btnOutput.style.background = "#26C2AE";
//             btnOutput.style.cursor = "pointer";
//         }  else
//         {
//             console.log("nul")
//             btnOutput.style.background = "#0D686D";
//             btnOutput.style.cursor = "auto";
//         }
//         calcul();
//     })
// });

// btnPercent.forEach(function(btn) {
//     btn.addEventListener("click", () => {
//         tip = btn.value;
//         calcul();
//     })
// });














function reset() {
    allInput.forEach(input => {
        input.value="";
    });
    btnOutput.style.background = "#0D686D";
    btnOutput.style.cursor = "auto";
}

btnOutput.addEventListener("click", reset);
reset();

// Check input is empty and change the button-reset color 
allInput.forEach(function(input) {
    input.addEventListener("input", function() {
        if (allInput.value != ""){
            btnOutput.style.background = "#26C2AE";
            btnOutput.style.cursor = "pointer";
        }else{
            btnOutput.style.background = "#0D686D";
            btnOutput.style.cursor = "auto";
        }

        // show error if 0 people
        if((people.value == 0) && (people.value != "")){
            errorNumber.textContent="Can't be zero";
            errorNumber.style.color="red";
            people.style.borderColor="red";
        }else{
            errorNumber.textContent="";
        }
    });
});

// Function calcul tip
function calcul(e) {
    let ValueBtn = e.target.value;
    let tipAccount = bill.value * (ValueBtn / 100) / people.value;
    let tipAccountFix = tipAccount.toFixed(2);
    let total = bill.value / people.value + tipAccount;
 
    outputAccount.textContent = tipAccountFix;
    outputTotal.textContent = total;    
}

inputPercent.addEventListener("input", calcul);
inputPercent.addEventListener("click", calcul);

for(let i = 0; i < btnPercent.length; i++){
    btnPercent[i].addEventListener("click", calcul)
}




