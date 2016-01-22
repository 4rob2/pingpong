$(document).ready(function() {
  $("form#ending")=.submit(function(event) {
    var product = parseInt($("input#ending").val());
    var end = "Completed! Want to play again?"
    var count = []

    for (var index = 1; index = product) {
    if (index< product) {
      $("#upwards").append("<p>" + index + " " + "</p>");
    }
    else {
      $("#there").append("<p>" + end + "</p>");
    }
  }
  event.preventDefault();
  });
});
