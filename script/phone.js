document.getElementById('phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updateCaseNumber(true, 'phoneQty');
    updateTotalPrice(newPhoneNumber, 1219, 'phone-price');
});


document.getElementById('phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updateCaseNumber(false, 'phoneQty');
    updateTotalPrice(newPhoneNumber, 1219, 'phone-price');
});