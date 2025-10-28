function askNumber(whatNumber) {

let userNumber = prompt("Guess 1-10?"); 
if (userNumber == whatNumber) {
    $("#output").html("BANG! BANG! BANG!!!");
}
    else {
        $("#output").html("Not even close.");
    }
}

$("#good-button").click( function (){
    askNumber(2);
});