$(document).ready(function () {

    var user;
    var board = [];


    //user gets to pick whether they are playing as "X" or "O"
    $(".btn").click(function () {
        if($(this).attr("id") === "X"){
            user = "X";
            $(this).css("background", "white");
            $(this).css("color", "black");
            $("#O").css({"background": "black", "color": "white"});
        }
        else{
            user = "O";
            $(this).css("background", "white");
            $(this).css("color", "black");
            $("#X").css({"background": "black", "color": "white"});
        }

    });


    //adds user's symbol to the board and the board array
    $("td").click(function () {
        var id = $(this).attr("id");

        switch(id){
            case "row1col1":
                board[7] = user;
                break;
            case "row1col2":
                board[8] = user;
                break;
            case "row1col3":
                board[9] = user;
                break;
            case "row2col1":
                board[4] = user;
                break;
            case "row2col2":
                board[5] = user;
                break;
            case "row2col3":
                board[6] = user;
                break;
            case "row3col1":
                board[1] = user;
                break;
            case "row3col2":
                board[2] = user;
                break;
            case "row3col3":
                board[3] = user;
                break;
        }

        $(this).text(user);
        console.log(board);
    });


});