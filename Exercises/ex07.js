var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

function makeImage (imageName) {
if (colors[colorCount] == imageName) {
       $("body").append("<img width=50 src='ex_images/" + imageName + ".png'>");
   }
}

function changeBackground(newColor){
    $("body").css("background-color", newColor);

}

function changeMood(moodCount) {
    let mood = "";
   if (moodCount < 5) { mood = "fresh and happy"; }
   else if ((moodCount >= 5) && (moodCount < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   return mood;
}

$(".colorButton").click( function () {
    changeBackground(this.id);
});

$("#needy-button").click(function () {
    let moodMessage = changeMood(count);
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage);
   changeBackground(colors[colorCount]);
   makeImage("Coral");
   makeImage("Orchid");
   makeImage("Plum");

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});