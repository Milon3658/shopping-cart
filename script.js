
function updateCaseNumber(isIncrease, id) {

    const quantity = document.getElementById(id);
    const quantityString = quantity.value;
    const previousQuantity = parseInt(quantityString);
    let newQuantity;
    if (isIncrease === true) {
        newQuantity = previousQuantity + 1;
    } else {
        newQuantity = previousQuantity - 1;
    }
    quantity.value = newQuantity;
    return newQuantity;
};
document.getElementById('case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true, 'case-qnt');
    const totalCasePrice = newCaseNumber * 59;
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = totalCasePrice;

});
document.getElementById('case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false, 'case-qnt');
    const totalCasePrice = newCaseNumber * 59;
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = totalCasePrice;
});