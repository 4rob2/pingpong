$(document).ready(function() {
    var index =["#ending"];
    var primes=[]

  if ((index[0]>15) && (index[0]%15 === 0)) {
    $("pingpong").show();
} else if
     ((index[0]>5) && (index[0]%5 === 0)) {
     $ ("pong").show();
} else if ((index[0]>3) && (index[0] === 0)) {
      $ ("ping").show();
} else {
    $(index[0]).show;
}
event.preventDefault();
});
