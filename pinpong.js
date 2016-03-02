function ping(){
  var input = ($("input#one").val());
  if (input === "test"){
    document.write("test");
  };
};

$(document).ready(function(){
  $("form#input-form").submit(function(event){
ping();
  event.preventDefault();
  });
});
