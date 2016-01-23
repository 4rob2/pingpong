$(document).ready(function() {
  $("form#paddle").submit(function(event) {
  var inputA = parseInt($("input#ending").val());
  var index = 0;

  for(inputA;inputA < index;index++) {

    do {
      if (index % 15 === 0) {
      $("#pingpong").alert();
     }else if
     (index % 5 === 0) {
     $ ("#pong").show();
     }else if (index % 3 === 0) {
     $ ("#ping").show();
     }else
      return document.write(index);

    while (inputA <= index);
    $("#completed").show();

  event.preventDefault();
  });
}):
