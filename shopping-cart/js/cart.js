// phone
function updatePhoneQuantity(isIncrease) {
    const phoneQuantityField = document.getElementById('phone-quantity-field');
    const previousPhoneQuantity = parseInt(phoneQuantityField.value);

    let newPhoneQuantity;
    if (isIncrease === true) {
        newPhoneQuantity = previousPhoneQuantity + 1;
    }
    else {
        newPhoneQuantity = previousPhoneQuantity - 1;
        if (newPhoneQuantity < 0) {
            alert('Invalid Number');
            return 0;
        }
    }
    phoneQuantityField.value = newPhoneQuantity;
    return newPhoneQuantity;
}
function updatePhoneToatlPrice(newPhoneQuantity) {
    const phoneTotalPrice = newPhoneQuantity * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneQuantity = updatePhoneQuantity(true);
    updatePhoneToatlPrice(newPhoneQuantity);
    calculateSubTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneQuantity = updatePhoneQuantity(false);
    updatePhoneToatlPrice(newPhoneQuantity);
    calculateSubTotal();
})

// case
function updateCaseQuantity(isIncrease) {
    const caseQuantityField = document.getElementById('case-quantity');
    const previousCaseQuantity = parseInt(caseQuantityField.value);

    let newCaseQuantity;
    if (isIncrease === true) {
        newCaseQuantity = previousCaseQuantity + 1;
    }
    else {
        newCaseQuantity = previousCaseQuantity - 1;
        if (newCaseQuantity < 0) {
            alert('Invalid Number');
            return 0;
        }
    }
    caseQuantityField.value = newCaseQuantity;
    return newCaseQuantity;
}
function updateCaseToatlPrice(newCaseQuantity) {
    const caseTotalPrice = newCaseQuantity * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseQuantity = updateCaseQuantity(true);
    updateCaseToatlPrice(newCaseQuantity);
    calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseQuantity = updateCaseQuantity(false);
    updateCaseToatlPrice(newCaseQuantity);
    calculateSubTotal();
})

// bill calculation
function getTextElementValueById(elementId) {
    const totalElementField = document.getElementById(elementId);
    const currentTotalElement = parseInt(totalElementField.innerText);
    return currentTotalElement;
}
function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}