//create counter for clicks starting at 0
let totalNumber = 0;
//find element with id "needy button" tell it what to do when clicked
$("#needy-button").html("Click me 50 times and I explode!")
$("#needy-button").click( function(){
    
    //
    totalNumber = totalNumber + 3;

    $("#needy-button").html("I am so clicked this many (" + totalNumber + ") times!");
    
})
//when button is clicked
//when it is clicked
//add one to the toal number
//show the total number
//on our button
//show "clicked total number of times"
//a top limit