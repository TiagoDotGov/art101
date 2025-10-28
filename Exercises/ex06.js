//create counter for clicks starting at 0
let count = 0;
let clicks = 0;
let mood;
//create array of colors
let colors = ["Orchid","Coral","Hot Pink","Plum"];

//rename element with id "needy-button"
$("#needy-button").html("Click me 50 times and I explode!")
//find element with id "needy-button" tell it what to do when clicked
$("#needy-button").click( function () {
        if (clicks < 5) { mood = " fresh and happy";}
        else if ((clicks>=5) && (clicks<10)) {mood = " keep pushing";}
        else {mood = " so tired..."};
    //returns the remainder of division as the value of the variable
    //print this text when clicked
    $("#needy-button").html( clicks + " clicks" + " Color: " + colors[count] + mood);
   //change the background color to match the current array element
    $("body").css("background-color", colors[count]);
    $("body").append("<img src='ex_images/orchid.png'")
    if (colors[orange]) {}
    //increment the count by one when clicked
    count = count + 1;
    if (count == 4) { count = 0 };
    clicks = clicks + 1;
})