
function currencyConversion(){
    var numberUnit = 23500;
    var number = document.getElementById("numberToChange").value;

    var numberChange = numberUnit * number;
    var numberChangeVN =  new Intl.NumberFormat('vn-VN').format(numberChange);

    document.getElementById("txtResult").innerHTML = numberChangeVN + " VNĐ";

}

document.getElementById("btnCalc").onclick = currencyConversion;