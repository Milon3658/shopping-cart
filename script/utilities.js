
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
function updateTotalPrice(newCaseNumber, mainPrice, updateId) {
    const totalCasePrice = newCaseNumber * mainPrice;
    const casePrice = document.getElementById(updateId);
    casePrice.innerText = totalCasePrice;
}
