
$(document).ready(function() {
  $("form#paddle").submit(function(event) {
  event.preventDefault();
  var count = $("#ending").val()

    for (var i = 1; i <= count; i++) {
      if (i % 15 === 0) {
        $("#results").append("<li>"+"Ping-Pong"+"</li>");
      }
      else if (i % 3 === 0) {
        $("#results").append("<li>"+"Ping"+"</li>");
      }
      else if (i % 5 === 0) {
        $("#results").append("<li>"+"Pong"+"</li>");
      }
      else{
        $("#results").append("<li>"+i+"</li>");
      }
    };
  });
});
