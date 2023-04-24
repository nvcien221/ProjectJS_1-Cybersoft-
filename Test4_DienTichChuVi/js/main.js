
function count(){
    var lengthMeasure = document.getElementById("length").value;
    var widthMeasure = document.getElementById("width").value;
    console.log(lengthMeasure);

    document.getElementById("txtResult").innerHTML = "Diện tích bằng: " + lengthMeasure * widthMeasure   + "<br> Chu vi bằng: " + (Number(lengthMeasure)+Number(widthMeasure)) *2 ;
}
document.getElementById("btnCalc").onclick = count;