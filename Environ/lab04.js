//declaring an array with name myCommutes
let myCommutes = ["walking","UCSC Metro", "roommate's car","my fiancee's car"];
//declaring an object with name myFavoriteCommute
let myFavoriteCommute = {
    type: "Car",
    myVehicle: false,
    makeModel: "Toyota Prius C",
    driver: "Lizzie"
};
//stitching all the data together for my top two commutes
let megaSentence;
megaSentence = "<p>My top two commutes from the array are: " + myCommutes[0] + ", " + myCommutes[3] + "</p>";
//biggest sentence for the attributes of my favorite commute
megaSentence = megaSentence +"<p>My favorite commute possesses the characteristics: type - " + myFavoriteCommute.type + ", make and model " + myFavoriteCommute.makeModel + ", and my wonderful fiancee " + myFavoriteCommute.driver + "</p>"
//displays megaSentence to the element with the output ID
$("#output").html(megaSentence);