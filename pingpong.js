function pingPongOne(){
    var userInput = parseInt($("input#one").val());
    var pingDing = '';
    for (var i = 1; i <= userInput; i++){
      if (i %15 === 0){
        pingDing = 'pingpong';
        }
      else if (i %3 === 0 && userInput %15 !== 0){
        pingDing = 'ping';
        }
      else if (i %5 === 0){
        pingDing = 'pong';
        }
      else{
        pingDing = i;
        }
    $("#result").append('<li>' + pingDing + '</li>');

  };
}

$(document).ready(function(){
  $("form#input-form").submit(function(event){
  $("#result").empty();
    pingPongOne();


    event.preventDefault();
    });
  });
