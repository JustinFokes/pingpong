function divisibleByThree(inputOne){
  if (inputOne %3 === 0){
    return ("ping");
  }
  else if (inputOne %5 === 0){
    return ("pong");
  }
  else if (inputOne %15 === 0){
    return ("ping" + "pong");
  };
};


$(document).ready(function(){
  $("form#input-form").submit(function(event){
    var inputOne = parseInt($("input#one").val());

    var pingPongOne = divisibleByThree(inputOne)
    $("#result").append(pingPongOne);

    event.preventDefault();
  });
});
