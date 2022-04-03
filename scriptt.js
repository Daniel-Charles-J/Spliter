'use strict'
 
// variable
let totalBill = 0;
let totalPeople = 0;
let tipSelected = 0;

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
    }
}