let thingsToDo = ["exotic food", "festivals", "hiking", "boat tours", "wildlife tours", "alcohol"];

let list1a;

list1a = "<p>This place offers: " + thingsToDo[3] + ", " + thingsToDo[4] + ", and " + thingsToDo[5];

$("#output1").html(list1a);


let list2b;

list2b = "<p>This place offers: " + thingsToDo[0] + ", " + thingsToDo[3] + ", and " + thingsToDo[5];

$("#output2").html(list2b);


let list3c;

list3c = "<p>This place offers: " + thingsToDo[0] + ", " + thingsToDo[2] + ", " + thingsToDo[5] + ", " + thingsToDo[1] + ", and " + 
thingsToDo[4];

$("#output3").html(list3c)



$("#ety-buttona").click(function(){
    $("#defoutputa").html("<p>Nahuatl: Axolotla</p>")
})


$("#ety-buttonb").click(function(){
    $("#defoutputb").html("<p>Nahuatl: Ecanahuac</p>")
})


$("#ety-buttonc").click(function(){
    $("#defoutputc").html("<p>Nahuatl: Mixticpac | Yacateco: Luza</p>")
})


$(".ln1").hover(function(){
  $(this).css("background-color", "purple");
  }, function(){
  $(this).css("background-color", "black");
  });


  

  $("#cityButtona").click(function(){
    $(".cyswa").toggle();
  });

    $("#cityButtonb").click(function(){
    $(".cyswb").toggle();

  });

   $("#cityButtonc").click(function(){
    $(".cyswc").toggle();
  });

