function pingPongOne(number){
    var inputAll = [];
    for (var i = 1; i <= number; i++){
      if (i %15 === 0){
         inputAll.push('pingpong')
        }
      else if (i %3 === 0 && number %15 !== 0){
        inputAll.push('ping');
        }
      else if (i %5 === 0){
        inputAll.push('pong');
        }
      else{
        inputAll.push(i);
    }
      $("#result").html("<li>" + inputAll + "</li>");
      //prints the array each time through
  }
}

$(document).ready(function(){
  $("form#input-form").submit(function(event){
    $("#result").empty();
    var numberInput = parseInt($("input#one").val());
    var pingDing = pingPongOne(numberInput);

    
    event.preventDefault();
    });
  });
