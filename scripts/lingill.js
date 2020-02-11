const inputTotal = document.querySelector("#total")
const inputRate =document.querySelector("#rate")
const btnCalculate = document.getElementById("sumation")
const calculationHold = document.getElementById("calcuation")
const tipHold =document.getElementById("tip")
const taxhold = document.getElementById("tax")

inputTotal.onclick = function () {
    alert("thanks for clicking input 1!");
  };
  
//gerneral call to functions and returning
btnCalculate.onClick = async function(){
    console.log('INFO: Declaring functions');
    const totalstr =inputTotal.value;
    const ratestr =inputRate.value;
    const totalNum =parseInt(totalstr);
    const rateNum =parseInt(ratestr);
    //const tipNum = await tip(totalNum, rateNum);
    const tipNum = (totalNum*rateNum).toFixed(2);
    tipHold.innerHTML = tipNum;
    const taxNum = await tax( totalNum);
    taxhold.innerHTML = taxNun;
    const grand = await sum(totalNum, tipNum, taxNum);
    calculationHold.innerHTML = grand;
}
//tip calc
const tip = async function ( totalNum, rateNum){
  const giventip = totalNum *rateNum
  return giventip.toFixed(2);

}

// tax calc
//found .fixed() at https://www.w3schools.com/jsref/jsref_tofixed.asp
const tax =async function (totalNum){
    const totaltax =(totalNum * 0.055);
    return totaltax.toFixed(2);
}
//sum calc
const sum = async function (totalNum, tipNum, taxNum){
    return totalNum + tipNum + taxNum;
}
