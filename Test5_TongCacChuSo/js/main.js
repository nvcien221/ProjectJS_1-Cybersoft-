
function count(){
    var sumNumber = 0;
    var numberToSum = document.getElementById("number").value;

    var tensDigit = Math.floor(numberToSum/10);
    var unitDigit = numberToSum%10;
    
    sumNumber = tensDigit + unitDigit;

    document.getElementById("txtResult").innerHTML = "Tổng các chữ số của số "+numberToSum+" bằng: "+ sumNumber;
}
document.getElementById("btnCalc").onclick = count;