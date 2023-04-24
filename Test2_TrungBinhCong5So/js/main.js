
function average(){
    var number01 = document.getElementById("number1").value;
    var number02 = document.getElementById("number2").value;
    var number03 = document.getElementById("number3").value;
    var number04 = document.getElementById("number4").value;
    var number05 = document.getElementById("number5").value;

    var sum = Number(number01) + Number(number02) + Number(number03) + Number(number04) + Number(number05);

    document.getElementById("txtResult").innerHTML = "Giá trị trung bình của 5 số bằng:  " + sum/5;

}

document.getElementById("btnCalc").onclick = average;