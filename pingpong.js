function pingPongOne(){
    var userInput = ($("input#one").val());
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
    
    $("#result").append('<p>' + pingDing + '</p>');
    
  };


}


$(document).ready(function(){
  $("form#input-form").submit(function(event){
    
    pingPongOne();
  

    
  
    event.preventDefault();

    });
  });


