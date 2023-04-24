

function showSalary(){
    var salaryOneDay = document.getElementById("inputSalary").value;
    var dayNumber = document.getElementById("inputDays").value;

    var salary = salaryOneDay * dayNumber;
    document.getElementById("txtResult").innerHTML = "Lương của bạn là:  "+ salary +".000 VNĐ";
}


document.getElementById("btnCalc").onclick = showSalary;