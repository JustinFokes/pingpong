function loopPractice(inputOne){
	alert(inputOne);
};


$(document).ready(function(){
  $("form#input-form").submit(function(event){
    var inputOne = parseInt($("input#one").val());
    

    for (inputTwo = 0; inputOne >= 1; inputTwo -=1){
    loopPractice(inputOne);
	};

	$("#result").append(inputOne);

	event.preventDefault();
	});
});