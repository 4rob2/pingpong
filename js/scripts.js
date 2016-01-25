$(document).ready(function() {
  $("form#paddle").submit(function(event) {
  var inputA = parseInt($("input#ending").val());

  for(var i=1;inputA >= i; i++) {
    if (i % 15 === 0)
     document.write("pingpong" + "<br/>");

   else if
     (i % 5 === 0)
      document.write("pong" + "<br/>");

   else if (i % 3 === 0)
     document.write("ping" + "<br/>");
     else
       document.write((i) + "<br/>");

    event.preventDefault();
   }
   var ask = prompt("Want to play again?");
      if (ask = "true"){
        return

    {

      }
    }

  })
});
