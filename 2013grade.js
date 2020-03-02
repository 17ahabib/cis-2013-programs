//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter final midterm pts (0-35):"));

floatFinPts = parseFloat(prompt("Please enter final final pts (0-35):"));

floatTotalPts = floatHwPts + floatMidPts + floatFinPts;

intGradeOption = parseInt(prompt("Please enter 1 for a pass/fail and 0 for a letter grade."));

if (intGradeOption===1) {
    if(floatTotalPts >= 80) {
        alert("Pass");
    }
    else {
        alert("Fail");
    }
}
else if (intGradeOption===0) {
    if(floatTotalPts >= 90) {
        alert("Final grade: A");
    }
    else if(floatTotalPts >= 80 && floatTotalPts < 90) {
        alert("Final grade: B");
    }
    else if(floatTotalPts >= 70 && floatTotalPts < 80) {
        alert("Final grade: C");
    }
    else if(floatTotalPts >= 60 && floatTotalPts < 70) {
        alert("Final grade: D");
    }
    else {
        alert("Final grade: F");
    }
}