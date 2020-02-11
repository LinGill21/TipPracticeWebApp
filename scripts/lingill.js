const inputTotal = document.querySelector("#total")
const inputRate =document.querySelector("#rate")
const btnCalculate = document.getElementById("sumation")
const calculationHold = document.getElementById("calcuation")
const tipHold =document.getElementById("tip")
const taxhold = document.getElementById("tax")

btnCalculate.onClick = async function(){
    const totalstr =inputTotal.value;
    const ratestr =inputRate.value;
    const totalNum =parseInt(totalstr);
    const rateNum =parseInt(ratestr);
    const tipNum = await tip(totalNum, rateNum);
    const taxNum = await tax( totalNum, tipNum);
    const grand = await sum(totalNum, tipNum, taxNum);
    calculationHold.innerHTML = grand;
}
//tip calc

// tax calc

//sum calc
