function divisibleByThree(inputOne){
  //need to write (and not divisible by 15, or, divisible by 3 only...)
  if (inputOne %3 === 0){
    return ("ping");
  }
  else if (inputOne %5 === 0){
    return ("pong");
  }
  if (inputOne /15){
    return ("pingpong");
    //the problem is that anything divisible by 15 is divisible by 3, for instance 15... divisible by both itself and 3. It's running 3 before 15 and hence, is returning "ping" and not "pingpong".
  }
};


$(document).ready(function(){
  $("form#input-form").submit(function(event){
    var inputOne = parseInt($("input#one").val());

    var pingPongOne = divisibleByThree(inputOne)
    $("#result").append(pingPongOne);

    event.preventDefault();
  });
});
