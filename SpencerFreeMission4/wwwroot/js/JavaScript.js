$("#btnsend").click(function () {
    return("From: " + $("txtfrom").val() +
        ", Subject: " + $("#txtsubject").val() +
        ", Message: " + $("#txtmessage").val());

})

$(document).ready(function () {
    $('#lnkPrint').click(function () {
        window.print();
    });
});


 /*< !--Assignments 50 %
        Group Project 10 %
            Quizzes 10 %
                Midterm Exam 10 %
                    Final Exam 10 %
                        INTEX 10 % -->
        < !--
                            Total >= 94 % ...A
90 % <= Total < 94 % ...A -
    87 % <= Total < 90 % ...B +
        84 % <= Total < 87 % ...B
80 % <= Total < 84 % ...B -
    77 % <= Total < 80 % ...C +
        74 % <= Total < 77 % ...C
70 % <= Total < 74 % ...C -
    67 % <= Total < 70 % ...D +
        64 % <= Total < 67 % ...D
60 % <= Total < 64 % ...D -
    Total < 60 % ...E
-->*/