//create objects for each item on the page (Oryx, monkey, teapot, hot spring)
//fix object attributes so I can print them all without doing a bunch of stupid shit
var states = ["Sunny", "Snowy"]
var countWeather = 0
let count = 0
let oryx = {
    epitaph: "Epitaphs: The First Navigator, The Taken King",
    age: " <br>Age: ???",
    home: " <br>Home World: Fundament",
    state: " <br>Goals: To reach the Final Shape...and maybe release some muscle tension"
}

let macaque = {
    name: "Name: Bink Jr.",
    occupation: "<br>Occupation: Bather",
    home: "<br>Home: Hokkaido",
    favoriteAct: "<br>Favorite Pastime: Taking a nice, hot, bath"
}

let tea = {
    flavor: "Flavor: Green",
    temperature: "<br>Temp: Just right",
    steepTime: "<br>Steeped For: 1 minute 36 seconds"
}

let hotSpring = {
    location: "Location: Sapporo, Hokkaido, Japan",
    snowy: "<br>Snowy: False",
    temp: "<br>Temp: 40 degrees Celsius",
    entranceFee: "<br>Entrance Fee: 4,500 yen"
}
//create array of all the objects
let characters = [oryx, macaque, tea, hotSpring]
let charNames = ["Oryx", "The Monkey", "The Tea", "The Hot Spring"]

function fadeOutAnimation() {
    $(this).stop();
    $(this).fadeOut(300);
};

function fadeInAnimation() {
    $(this).stop();
    $(this).fadeIn(170)
};

function enterToSubmit(e) {
    if (e.which === 13) {
        let thrName = $("#nameThrall").val();
        $("#thrallTitle").text(thrName);
        $("#nameThrall").val("");
    }
};

function moveThrall() {
    $(document).mousemove(function (e) {
        $("#thrallMover").css({
            left: e.pageX - 270,
            top: e.pageY - 300,
            position: "absolute"
        })
    }
    )
};

function printDescriptions() {
    let reminder = count % characters.length;
    $("#descTitle").html("Meet " + charNames[reminder] + "!");
    let myArray = Object.values(characters[reminder])
    $("#descContents").html(myArray.toString());
    count = count + 1
};

function changeWeather(weather) {
    $("body").css("background-image", "url('images/" + weather + ".jpg')")
};
function hideMonkey() {
    if (countWeather == 1) { $("#monkeyGroup").css("display", "block") }
    else { $("#monkeyGroup").css("display", "none") }
}

function weatherEvent (){
    countWeather = countWeather + 1;
    if (countWeather == 2) { countWeather = 0 };
    hideMonkey();
    changeWeather(states[countWeather]);

}

$("#weatherButton").click(weatherEvent)
//              Old code 
//                  |
//                  V
//find button to click
//when clicked, cycle weather (sunny, snowy)
// $("#weatherButton").click(function () {
//     countWeather = countWeather + 1;
//     if (countWeather == 2) { countWeather = 0 };
//     hideMonkey();
//     changeWeather(states[countWeather]);
// })
//change parameter to the current weather
//when parameter is snowy, set background to "snowy" picture, add monkey group
//when the parameter is sunny, set background to the normal one, remove monkey group

$("#mover").click(printDescriptions);
//              Old code 
//                  |
//                  V
//find button in flexbox
//$("#mover").click(function () {
//change contents of flexbox on click to cycle through the array
//let reminder = count % characters.length;
// let remTwo = count % charNames.length;
//change #descTitle to this text plus this indexed value in the array charNames
//$("#descTitle").html("Meet " + charNames[reminder] + "!");
//create a new array of just the object values from this indexed object in the array characters
//let myArray = Object.values(characters[reminder])
//print the array as a string in the element #descContents
//$("#descContents").html(myArray.toString());
//count = count + 1
//});

$("#takenking").hover(fadeOutAnimation, fadeInAnimation)
//              Old code 
//                  |
//                  V
//$("#takenking").hover(function () {
//     $(this).stop();
//     $(this).fadeOut(300);
// }, function () {
//     $(this).stop();
//     $(this).fadeIn(170)
// });

$("#textHider").click(function () {
    $(".text").toggle()
    $("#thrallBox").toggle()
});

$('#nameThrall').bind('keypress', enterToSubmit);
//               Old code 
//                  |
//                  V
// $('#nameThrall').bind('keypress', function (e) {
//     if (e.which === 13) {
//         let thrName = $("#nameThrall").val();
//         $("#thrallTitle").text(thrName);
//         $("#nameThrall").val("");
//     }
// });

$("#thrall").dblclick(moveThrall);
