//This Function Calculates and Prints the Final Grade

$("#btnSend").click(function () {
    //Declare Calculated Variable
    var myCalculation = 0;

    //Add each category to calculated variable
    myCalculation = $("#assignments").val() * .5
    myCalculation = myCalculation + $("#group").val() * .1
    myCalculation = myCalculation + $("#quizzes").val() * .1
    myCalculation = myCalculation + $("#midterm").val() * .1
    myCalculation = myCalculation + $("#final").val() * .1
    myCalculation = myCalculation + $("#intex").val() * .1

    //declare letter grade variable
    var letterGrade = ""

    //check to see what letter grade is earned based on percentage
    if (myCalculation >= 94) {
        letterGrade = "A"
    }
    else if (myCalculation > 89) {
        letterGrade = "A-"
    }
    else if (myCalculation > 86) {
        letterGrade = "B+"
    }
    else if (myCalculation > 83) {
        letterGrade = "B"
    }
    else if (myCalculation > 79) {
        letterGrade = "B-"
    }
    else if (myCalculation > 76) {
        letterGrade = "C+"
    }
    else if (myCalculation > 73) {
        letterGrade = "C"
    }
    else if (myCalculation > 69) {
        letterGrade = "C-"
    }
    else if (myCalculation > 66) {
        letterGrade = "D+"
    }
    else if (myCalculation > 63) {
        letterGrade = "D"
    }
    else if (myCalculation > 59) {
        letterGrade = "D-"
    }
    else if (myCalculation < 60) {
        letterGrade = "E"
    }

    //output the final grade percentage and the letter grade
    $("#output").val("Final Grade: "+ myCalculation + "% ("+ letterGrade+ ")");

})