// Giphy Homework JS

// SETUP VARIABLES
//==========================================

var apiKey  = "dc6zaTOxFJmzC";

var queryTerm = "";
var limit = 0;
var rating = 0  // Is this necesarry?

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


function newIngredient(){
	// creates new button from form input
}



// add form functionality
// get user input from search bar through "search" button
// populate button array with user input
// button data value == user input



// .on("click") triggers the AJAX call
$(".giphy").on("click", function(event){
	
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
		
		// create div space for each gif (for loop) 
		

		// class=gif for each data-state=still/animate ...?
		//get some number of gifs
		// giphy api query will be based on button value

	//>>>>>> Ends AJAX Call
	});
//>>>>>>>>Ends Giphy click	
});




