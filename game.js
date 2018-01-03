$(document).ready(function () {

    $("#row1col1").click(function () {
       $(this).fadeIn(1000, function () {
           $(this).html("X");
       });
    });
    $("#row1col2").on("click", function () {
        $(this).text("X");
    });
    $("#row1col3").on("click", function () {
        $(this).text("X");
    });


    $("#row2col1").on("click", function () {
        $(this).text("X");
    });
    $("#row2col2").on("click", function () {
        $(this).text("X");
    });
    $("#row2col3").on("click", function () {
        $(this).text("X");
    });


    $("#row3col1").on("click", function () {
        $(this).text("X");
    });
    $("#row3col2").on("click", function () {
        $(this).text("X");
    });
    $("#row3col3").on("click", function () {
        $(this).text("X");
    });
});