function pingFunction(){
  var input = ($("input#one").val());
  if (input %3){
    document.write("ping");
  };
};

$(document).ready(function(){
  $("form#input-form").submit(function(event){
  pingFunction();
  event.preventDefault();
  });
});
