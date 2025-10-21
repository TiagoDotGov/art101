//make an array with the colors red orange yellow and green
let count = 0;
let colors = ["red","orange", "yellow", "green"];
//on button click move through list
$("#colorButton").click( function() {
    //move back to front of list
    let reminder = count % colors.length;
   //change background color
    $("body").css("background-color", colors[reminder]);
    count = count + 1;
})