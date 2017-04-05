/* 
Get the true market value of a used vehicle based on it's current location, using the Edmunds API.
                    
					 Note to self - Coding Requirements:

        1- Obtain Edmunds vehicle ID# based on make, model and year.
        2- Use that ID# to initate a search for vehicles True Market Value based on zip.
        3- Return TMV info to user. 

	question - How do I append values to the endpoint after getting input val's??

*/

// the parameters we need to pass in our request to Edmund's API --
var getInfo = function (make, model, year, zip) {
	console.log(make + ',' + model + ',' + year + ',' + zip);
	var request = {};
	request = {
		fmt: 'json',
		api_key: "2wdaf85q4nj24k5s55j5pd5y",
		state: 'used' // changed this to 'used' from 'new'
	};
	var url = "http://api.edmunds.com/api/vehicle/v2/" + make;
	// ajax call -- set the parameters --  edmunds TMV endpoint --
	$.ajax({
			url: url,
			data: request,
			type: "GET",


		})
		.done(function (result) {
			console.log(result);
			var id = result.id;
			getValue(id, zip);
		});
};

var getValue = function (id, zip) {
	var request = {
		styleid: id,
		zip: zip,
		fmt: 'json',
		api_key: "2wdaf85q4nj24k5s55j5pd5y"
	};
	$.ajax({
			url: "https://api.edmunds.com/v1/api/tmv/tmvservice/calculatetypicallyequippedusedtmv",
			data: request,
			type: "GET"

		})
		.done(function (result) {
			console.log(result);
		});
	console.log(id);
};


// find requested items and display them --
function showInfo(item) {
	var usedValue = item.tmv.nationalBasePrice.regionalAdjustment.usedPrivateParty;
	var tradeinValue = item.tmv.nationalBasePrice.regionalAdjustment.usedTradeIn;
	return usedValue + tradeinValue + curday;    // added this since last session

	// console.log(usedValue);
	// console.log(tradeinValue);
	// console.log();
	// return  usedValue +  + tradeinValue + ;
}



// listener --
$(document).ready(function () {
	var make = ' ';
	var model = ' ';
	var year = ' ';
	var zip = ' ';
	var curday = new Date();
	console.log(curday);

	$('.vehicle-value').submit(function (e) {
		e.preventDefault();
		// reset results div -- clear results
		$('.results').html('');

		// read user input --
		make = $(this).find("input[name='make']").val();
		if (make < 1990) alert("You must enter a year from 1990 or later");
		model = $(this).find("input[name='model']").val();
		year = $(this).find("input[name='year']").val();
		zip = $(this).find("input[name='zip']").val();
		getInfo(make, model, year, zip);

	});

});