$(document).ready(function () {

    var user = "X";
    var board = [];
    var boardIDs = ["row1col1", "row1col2", "row1col3",
                    "row2col1", "row2col2", "row2col3",
                    "row3col1", "row3col2", "row3col3"];
    //user gets to pick whether they are playing as "X" or "O"
    $(".btn").click(function () {
        if($(this).attr("id") === "X"){
            user = "X";
            pickSymbol(user);
        }
        else{
            user = "O";
            pickSymbol(user);
        }
    });

    //adds user's symbol to the board and the board array
    $("td").click(function () {
        var id = $(this).attr("id");

        switch(id){
            case "row1col1":
                check(7, user, id);
                break;
            case "row1col2":
                check(8, user, id);
                resetBoard();
                break;
            case "row1col3":
                check(9, user, id);
                break;
            case "row2col1":
                check(4, user, id);
                break;
            case "row2col2":
                check(5, user, id);
                break;
            case "row2col3":
                check(6, user, id);
                break;
            case "row3col1":
                check(1, user, id);
                break;
            case "row3col2":
                check(2, user, id);
                break;
            case "row3col3":
                check(3, user, id);
                break;
        }

    });


    function check(spot, value, Id){
        if(board[spot] !== "X" && board[spot] !== "O"){
            board[spot] = value;
            var val = "#" + Id;
            //console.log(val + " " + value);
            $(val).text(value);
        }
    }

    function resetBoard() {
        for(var i = 0; i < boardIDs.length; i++){
            board.pop();
            $(boardIDs[i]).text(board[i]);
        }
    }

    function pickSymbol(symbol) {
        $(symbol).css("background", "white");
        $(symbol).css("color", "black");
        if(symbol === "X"){
            $("#O").css({"background": "black", "color": "white"});
        }
        else {
            $("#X").css({"background": "black", "color": "white"});
        }
    }

});