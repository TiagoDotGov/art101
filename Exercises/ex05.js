//create counter for clicks starting at 0
let count = 0;
//create array of colors
let colors = ["Orchid","Coral","HotPink","Plum"];
let cat = {
    says: "Meow",
    color: "tabby",
    age: 45,
    size: "fat",
}
//rename element with id "needy-button"
$("#needy-button").html("Click me 50 times and I explode!")
//find element with id "needy-button" tell it what to do when clicked
$("#needy-button").click( function () {
    //returns the remainder of division as the value of the variable
    let reminder = count % colors.length;
    //print this text when clicked
    $("#needy-button").html( "I am so clicked this many (" + count + ") times!" + " Color: " + colors[reminder]);
   //change the background color to match the current array element
    $("body").css("background-color", colors[reminder]);
    //increment the count by one when clicked
    count = count + 1;
})