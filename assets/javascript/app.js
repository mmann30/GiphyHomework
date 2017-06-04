// Giphy Homework JS

// SETUP VARIABLES
//==========================================

var apiKey  = "dc6zaTOxFJmzC";

var queryTerm = "";
var limit = 10;		// number of gifs to display
var rating = "g";  	// gif rating

var arrIngredients = ["chicken", "hamburger", "tacos", "salad", "french fries", "bacon", "pasta", "dessert"];

var queryURLBase = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey;


// FUNCTIONS
//============================================

function renderButtons() {
	$("#button-display").empty();

	for(var i = 0; i < arrIngredients.length; i++){
		var button = $("<button>");
		button.addClass("giphy btn btn-primary");
		button.attr("data-value", arrIngredients[i]);
		button.text(arrIngredients[i]);

		$("#button-display").append(button);
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

$(document).on("click", ".gif", function(event){
	//  Sets state of the gif
	var state = $(this).attr("data-state");
	//  Checks the state and either animates or stops gif on.click
	if(state === "still"){
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	} else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}
});

// .on("click") triggers the AJAX call
// add click event to document so it applies to newly generated buttons
$(document).on("click", ".giphy", function(event){
	// clears previously displayed gifs
	$("#giphy-display").empty();
	
	var queryTerm = $(this).data("value") + "+recipe";
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
		
		// Creates and displays number of gifs based on limit value
		for(var i = 0; i < limit; i++){ 

			var giphyURLStill = response.data[i].images.fixed_width_still.url;
			var giphyURLAnimate = response.data[i].images.fixed_width.url;
			var giphyImage = $("<img>");

			giphyImage.attr("src", giphyURLStill);
			giphyImage.attr("data-state", "still");
			giphyImage.attr("data-still", giphyURLStill);
			giphyImage.attr("data-animate", giphyURLAnimate);
			giphyImage.attr("alt", "gif image");
			giphyImage.addClass("gif");
			$("#giphy-display").prepend(giphyImage);

		}
		// class=gif for each data-state=still/animate ...?
		// TODO:  limit display to 10 gifs
		// TODO:  limit gifs shown to "g" rating

	//>>>>>> Ends AJAX Call
	});
//>>>>>>>>Ends Giphy click	
});




