document.getElementById('case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true, 'case-qnt');
    updateTotalPrice(newCaseNumber, 59, 'case-price');
});


document.getElementById('case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false, 'case-qnt');
    updateTotalPrice(newCaseNumber, 59, 'case-price');
});