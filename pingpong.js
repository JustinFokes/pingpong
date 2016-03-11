function pingPongOne(number){
    var inputAll = [];
    for (var i = 1; i <= number; i++){
      if (i %15 === 0){
         inputAll.push("<br>" + "<li>" + 'pingpong' + "</li>");
        }
      else if (i %3 === 0){
        inputAll.push("<br>" + "<li>" + 'ping' + "</li>");
        }
      else if (i %5 === 0){
        inputAll.push("<br>" + "<li>" + 'pong' + "</li>");
        }
      else{
        inputAll.push("<br>" + "<li>" + i + "</li>");
    }
  }
    return inputAll;
}

$(document).ready(function(){
  $("form#input-form").submit(function(event){
    $("#result").empty();

    var numberInput = parseInt($("input#one").val());
    var pingDing = pingPongOne(numberInput);

    $("#result").html(pingDing);

    event.preventDefault();

  });
});