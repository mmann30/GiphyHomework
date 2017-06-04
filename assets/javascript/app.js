// Giphy Homework JS

// Example url http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC 

// add form functionality
// get user input from search bar through "search" button
// populate button array with user input
// button data value == user input

// .on("click") triggers the AJAX call
$(".giphy").on("click", function(event){
	
	var query = $(this).data("value");
	var apiKey = "dc6zaTOxFJmzC";
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey;
	console.log(query);

	// AJAX call for giphy api
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(queryURL);
		console.log(response);
		
		// create div space for each gif (for loop) 
		// class=gif for each data-state=still/animate ...?
		//get some number of gifs
		// giphy api query will be based on button value

	});

function newButton(){
	// creates new button from form input
}

});
