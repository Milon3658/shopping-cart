// document.getElementById('case-plus').addEventListener('click', function(){
//     const quantity = document.getElementById('case-qnt');
//     const quantityString = quantity.value;
//     const previousQuantity = parseInt(quantityString);
//     const newQuantity = previousQuantity +1;
//     quantity.value = newQuantity;
// });
// document.getElementById('case-minus').addEventListener('click', function(){
//     const quantity = document.getElementById('case-qnt');
//     const quantityString = quantity.value;
//     const previousQuantity = parseInt(quantityString);
//     const newQuantity = previousQuantity - 1;
//     quantity.value = newQuantity;
// });
function updateCaseNumber(isIncrease, id){

    const quantity = document.getElementById(id);
    const quantityString = quantity.value;
    const previousQuantity = parseInt(quantityString);
    let newQuantity;
    if(isIncrease === true){
        newQuantity = previousQuantity + 1;
    }else{
        newQuantity = previousQuantity - 1;
    }
    quantity.value = newQuantity;
}
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true, 'case-qnt');
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false, 'case-qnt');
})