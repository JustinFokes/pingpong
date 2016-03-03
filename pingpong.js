function divisibleBy(inputOne){
  //need to write a loop to take from userInput a specified number range...
  if(inputOne %15 === 0){
    return ("pingpong");
  }
  else if (inputOne %3 === 0 && inputOne %15 !== 0){
    return ("ping");
  }
  else if (inputOne %5 === 0){
    return ("pong");
  }
  else{
    return (inputOne)
  }
};


$(document).ready(function(){
  $("form#input-form").submit(function(event){
    var inputOne = parseInt($("input#one").val());

    var pingPongOne = divisibleBy(inputOne)

    for (pingPongOne; pingPongOne >= 1; pingPongOne -=1)
    $("#result").append(pingPongOne);

    event.preventDefault();
  });
});
