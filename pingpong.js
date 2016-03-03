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
};


$(document).ready(function(){
  $("form#input-form").submit(function(event){
    var inputOne = parseInt($("input#one").val());

    var pingPongOne = divisibleBy(inputOne)
    $("#result").append(pingPongOne);

    event.preventDefault();
  });
});
