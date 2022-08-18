//Utilities
//Price incress and decress
function currentCaseNumber(isIncress, input) {
  const previousCaseNumber = parseInt(
    document.getElementById(input).value
  );
  let newCaseNumber;

  if (isIncress) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  document.getElementById(input).value = newCaseNumber;
  return newCaseNumber;
}

//Calculat subtotal

function subtotalAmount(){
    const phoneTotalPrice = parseInt(document.getElementById('phone-price').innerText);
    const caseTotalPrice = parseInt(document.getElementById('case-price').innerText);
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = phoneTotalPrice + caseTotalPrice;
}

//claculat tax
function getTax(){
    const subtotal = parseInt(document.getElementById('subtotal').innerText);
    const taxField = document.getElementById('tax');
    taxField.innerText =  (subtotal * 0.1).toFixed(2);
}


//Total Amount Calculat

function getTotal(){
    const subtotal = parseInt(document.getElementById('subtotal').innerText);
    const tax = parseFloat(document.getElementById('tax').innerText);
    const total = document.getElementById('total');
    total.innerText = subtotal + tax;

}
//AddEventListener
//Price for Phone Case
document.getElementById("case-plus").addEventListener("click", () => {
  const newCaseNumber = currentCaseNumber(true, 'case-number');
  const casePrice = document.getElementById("case-price");
  casePrice.innerText = newCaseNumber * 59;
  subtotalAmount();
  getTax();
  getTotal()

});

document.getElementById("case-minus").addEventListener("click", () => {
  const newCaseNumber = currentCaseNumber(false, 'case-number');
  const casePrice = document.getElementById("case-price");
  casePrice.innerText = newCaseNumber * 59;
  subtotalAmount()
  getTax();
  getTotal()
});


//Price for Phone
document.getElementById('phone-plus').addEventListener('click', ()=>{
    const newPhoneNumber = currentCaseNumber(true, 'phone-number');
    const phonePrice = document.getElementById("phone-price");
    phonePrice.innerText = newPhoneNumber * 1219;
    subtotalAmount()
    getTax();
    getTotal()
})

document.getElementById('phone-minus').addEventListener('click', ()=>{
    const newPhoneNumber = currentCaseNumber(false, 'phone-number');
    const phonePrice = document.getElementById("phone-price");
    phonePrice.innerText = newPhoneNumber * 1219;
    subtotalAmount();
    getTax();
    getTotal()
})