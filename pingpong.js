function divisibleByThree(inputOne){
  //need to write (and not divisible by 15, or, divisible by 3 only...)
  if(inputOne %15 === 0){
    return ("pingpong");
  }
  else if (inputOne %3 === 0 && inputOne %15 !== 0){
    return ("ping");
  }
  else if (inputOne %5 === 0){
    return ("pong");
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
