//create objects for each item on the page (Oryx, monkey, teapot, hot spring)
//fix object attributes so I can print them all without doing a bunch of stupid shit
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
//find button in flexbox
$("#mover").click( function () {
    //change contents of flexbox on click to cycle through the array
    let reminder = count%characters.length;
    let remTwo = count%charNames.length;
    $("#descTitle").html("Meet " + charNames[remTwo] +"!" );
    let myArray = Object.values(characters[reminder])
    $("#descContents").html(myArray.toString());

    count = count + 1

})

//display the attributes of the objects in array
