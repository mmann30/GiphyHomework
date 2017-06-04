// Giphy Homework JS

// SETUP VARIABLES
//==========================================

var apiKey  = "dc6zaTOxFJmzC";

var queryTerm = "";
var limit = 10;		// number of gifs to display
var rating = "g";  	// gif rating

var arrIngredients = ["chicken", "hamburger", "rice", "tomato", "potato", "corn"];

var queryURLBase = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey;


// FUNCTIONS
//============================================

function renderButtons() {
	$("#button-display").empty();

	for(var i = 0; i < arrIngredients.length; i++){
		var $button = $("<button>");
		$button.addClass("giphy btn btn-primary");
		$button.attr("data-value", arrIngredients[i]);
		$button.text(arrIngredients[i]);

		$("#button-display").append($button);
		console.log(arrIngredients[i]);
	}
}

renderButtons();

$("#submit-ingredient").on("click", function(event) {
	
	event.preventDefault();

	var newIngredient = $("#new-ingredient").val().trim();
	arrIngredients.push(newIngredient);

	renderButtons();
});


// TODO: Create gif pause/play event
// TODO: 

// .on("click") triggers the AJAX call
// add click event to document so it applies to newly generated buttons
$(document).on("click", ".giphy", function(event){
	
	var queryTerm = $(this).data("value") + "+recipie";
	console.log(queryTerm);
	var queryURLNew = queryURLBase + "&q=" + queryTerm;

	console.log(queryURLNew);
	// AJAX call for giphy api
	$.ajax({
		url: queryURLNew,
		method: "GET"
	}).done(function(response){
		console.log(queryURLNew);
		console.log(response);
		
		// TODO:  create div space for each gif (for loop) 
		

		// class=gif for each data-state=still/animate ...?
		// TODO:  limit display to 10 gifs
		// TODO:  limit gifs shown to "g" rating

	//>>>>>> Ends AJAX Call
	});
//>>>>>>>>Ends Giphy click	
});




