//function divisibleBy(inputOne){
  //var inputOne = parseInt($("input#one").val());
  //for (var i = 1; i <=inputOne; i++){
  //if(inputOne %15 === 0){
    //return ("pingpong");
  //}
  //else if (inputOne %3 === 0 && inputOne %15 !== 0){
    //return ("ping");
  //}
  //else if (inputOne %5 === 0){
    //return ("pong");
  //}
  //else{
    //return (inputOne)
    //};
  //};
//};

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
    $("#result").append(pingDing);
    //createList.innerHTML = createList.innerHTML + '<p>' + word + '</p>';
  };
};


$(document).ready(function(){
  $("form#input-form").submit(function(event){
    
    pingPongOne();

    
  
    event.preventDefault();

    });
  });

 //var inputOne = parseInt($("input#one").val());
  
    //var pingPongOne = divisibleBy(inputOne);



  //need to write a loop to take from userInput a specified number range...
  //or... potentially take users input, create an array, then loop through that array printing each number and replacing certain numbers with ping, pong, and pingpong...
  
  //for(var index = 0; index < inputOne; index ++)


