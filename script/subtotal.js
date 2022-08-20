function getElementId(elementID){
    const totalElement = document.getElementById(elementID);
    const totalElementstr = totalElement.innerText;
    const totalPrice = parseFloat(totalElementstr);
    // console.log(totalPrice);
    return totalPrice;
}
// function setFieldValue(id, value){
//     const id = document.getElementById(id);
//     id.innerText = value;
// }
function subTotal(){
    const currentPhonePrice = getElementId('phone-price');
    const currentCasePrice = getElementId('case-price');
    const finalSubTotal = currentPhonePrice + currentCasePrice ;
    const subTotalField = document.getElementById('subtotal');
    subTotalField.innerText = finalSubTotal;
    // setFieldValue('subtotal', finalSubTotal)

    const taxAmountField =document.getElementById('tax');
    const texAmountStr = taxAmountField.innerText;
    const taxAmount = parseFloat(texAmountStr);
    const taxStr = (finalSubTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxStr);
    taxAmountField.innerText = tax;


    const totalAmountField = document.getElementById('total');
    const totalAmountstr = totalAmountField.innerText;
    const totalAmount = parseFloat(totalAmountstr);

    const totalPrice = finalSubTotal + tax ;

    totalAmountField.innerText = totalPrice;
}