function divisibleByThree(inputOne){
  if (inputOne /3){
    return ("ping");
  }
};


$(document).ready(function(){
  $("form#input-form").submit(function(event){
    var inputOne = parseInt($("input#one").val());

    var pingPongOne = divisibleByThree(inputOne)
    $("#result").text(pingPongOne);

    event.preventDefault();
  });
});
