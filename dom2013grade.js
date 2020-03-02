var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, stringMessage;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatMidPts = parseFloat($("fin_pts").value);
    floatTotalPts = floatHwPts + floatMidPts + floatFinPts;
    intGradeOption = parseInt($("grade_option").value); 

if (intGradeOption===1) {
    if(floatTotalPts >= 80) {
        stringMessage = "Pass";
    }
    else {
        stringMessage = "Fail";
    }
}
else if (intGradeOption===0) {
    if(floatTotalPts >= 90) {
        stringMessage = "Final grade: A";
    }
    else if(floatTotalPts >= 80 && floatTotalPts < 90) {
        stringMessage = "Final grade: B";
    }
    else if(floatTotalPts >= 70 && floatTotalPts < 80) {
        stringMessage = "Final grade: C";
    }
    else if(floatTotalPts >= 60 && floatTotalPts < 70) {
        stringMessage = "Final grade: D";
    }
    else {
        stringMessage = "Final grade: F";
    }
}
$("final_grade").value = stringMessage;

};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};