function pingPongOne(number){
    for (var i = 1; i <= number; i++){
      if (i %15 === 0){
        return ('pingpong');
        }
      else if (i %3 === 0 && number %15 !== 0){
        return('ping');
        }
      else if (i %5 === 0){
        return ('pong');
        }
      else{
        return(i);
  //push to empty array
    }
  }
}

$(document).ready(function(){
  $("form#input-form").submit(function(event){
    var numberInput = $("input#one").val();
    var pingDing = pingPongOne(numberInput);
    $("#result").empty();

    event.preventDefault();
    });
  });
