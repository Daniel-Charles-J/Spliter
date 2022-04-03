'use strict'
 
// variable
let totalBill = 0;
let totalPeople = 0;
let tipSelected = 0;

//Helper function
const isNumeric = function (number) {
    return !isNaN(number) && isFinite(number);
  };

//total Bill Per Person
const totalBillPerPerson = function (totalTip) {
    const totalPerPerson = ((totalBill + totalTip) / totalPeople).toFixed(2);
  
    const amountPerPerson = document.getElementById('total-amount-per-person');
  
    if (isNumeric(totalPerPerson)) {
      return (amountPerPerson.innerHTML = `$${totalPerPerson}`);
    }
  };


  //Tip per person
const tipPerPerson=function(){
    const totalTip = totalBill * (tipSelected / 100);
    const tipPerPersonNode = document.getElementById('total-tip-per-person');
    const tipPerPerson=(totalTip/totalPeople).toFixed(2);
    if(isNumeric(tipPerPerson)){
        totalBillPerPerson(totalTip);
    return (tipPerPersonNode.innerText = `$${tipPerPerson}`);
    }
}


//Function to get bill amount
const billInput=function(){
   totalBill = Number(document.getElementById('bill-charge').value);
   if(totalBill<=0){
       document.getElementById('bill-error-message').style.display = 'block';
   }else{
       document.getElementById('bill-error-message').style.display='none';
   }
}
 
//Function to get number of people
const peopleInput=function(e){
    totalPeople=Number(e.target.value);
    if(totalPeople<=0){
        document.getElementById('people-error-message').style.display = 'block';
    }else{
        document.getElementById('people-error-message').style.display='none';
        tipPerPerson();
    }
}

const tipInput = function (event) {
    let tipNode = document.getElementsByClassName('tip-value-active')[0];
  
    if (tipNode !== undefined) {
      tipNode.classList.remove('tip-value-active');
    }
  
    event.target.className += ' tip-value-active';
  
    tipSelected = Number(event.target.value);
  
    if (tipSelected < 0) {
      document.getElementById('tip-error-message').style.display = 'block';
    } else {
      document.getElementById('tip-error-message').style.display = 'none';
      tipPerPerson();
    }
  };