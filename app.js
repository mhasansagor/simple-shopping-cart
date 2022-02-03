document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-number');
    const phoneNumber = phoneInput.value;
    phoneInput.value = parseInt(phoneNumber) + 1;
    const phonePrice = phoneInput.value * 1229;
    const price = document.getElementById('current-price');
    price.innerText = phonePrice;
    subTotal();

})

document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneOutput = document.getElementById('phone-number');
    const phoneNumber = phoneOutput.value;
    if(phoneOutput.value == 0){
        return;
    }
    phoneOutput.value = parseInt(phoneNumber) - 1;
    const phonePrice = phoneOutput.value * 1229;
    const price = document.getElementById('current-price');
    price.innerText = phonePrice;
    subTotal();
})

document.getElementById('case-plus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    const casePrice = caseInput.value * 59;
    const price = document.getElementById('case-price');
    price.innerText = casePrice;
    subTotal();
})

document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if(caseInput.value == 0){
        return;
    }
    caseInput.value = parseInt(caseNumber) - 1;
    const casePrice = caseInput.value * 59;
    const price = document.getElementById('case-price');
    price.innerText = casePrice;
    subTotal();
})

function getValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}

function subTotal(){
    const phoneTotal = getValue('phone') * 1229;
    const caseTotal = getValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const subtotalvalue = document.getElementById('sub-total');
    subtotalvalue.innerText=subtotal;
    const tax= Math.ceil(subtotal * .1);
    const totalAmount = subtotal + tax;
    const taxInput= document.getElementById('tax');
    taxInput.innerText= tax;
    const totalAmountInput = document.getElementById('total');
    totalAmountInput.innerText= totalAmount;
}