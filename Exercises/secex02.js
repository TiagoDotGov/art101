
function checkMood(score) {
    let result;
    if (score > 7) {result = "Feeling great!"}
    else if (score > 4) {result = "Just fine"}
    else {result = "Not so well..."};
    console.log(result)
    return result;
  }

  function showMood(result) {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);

    if (randomScore>7) {$("body").css("background-color", "lightblue")}
    else if (randomScore>4) {$("body").css("background-color", "lightyellow")}
    else {$("body").css("background-color","lightred")}


    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }


  $("#mood-button").click(function () {
    showMood();

  });