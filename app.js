/* 
Get the true market value of a used vehicle based on it's current location, using the Edmunds API.
                                Coding Requirements:

        1- Obtain Edmunds vehicle ID# based on make, model and year.
        2- Use that ID# to initate a search for vehicles True Market Value based on zip.
        3- Return TMV info to user. 

*/


// the parameters we need to pass in our request to Edmund's API --
var getInfo = function (tags, page) {
	console.log(page);
	var request = {};
	 
		request = {
			
			key: "2wdaf85q4nj24k5s55j5pd5y",
        };	
};

        // ajax call -- set the parameters --  edmunds TMV endpoint --
	$.ajax({
			url: "https://api.edmunds.com/v1/api/tmv/tmvservice/calculatetypicallyequippedusedtmv",
			data: request,
			dataType: "jsonp", //use jsonp to avoid cross origin issues --
			type: "GET",
		});


        // find requested items and display them --
function showInfo(item) {
	var usedValue = item.regionalAdjustment.usedPrivateParty;
	var tradeinValue = item.regionalAdjustment.usedTradeIn;
	
	// console.log();
	// console.log();
	// console.log();
	// return '<a href=https://' + videoID + '>' + getTitle + '<br><img src="' + videoThumb + '"></a><br>';
}



    // listener --
$(document).ready(function () {
	var tags = ' ';
	var zip = ' ';
	$('.vehicle-value').submit(function (e) {
		e.preventDefault();

		// reset results div -- clear results
		$('.results').html('');

		// read user input --
		tags = $(this).find("input[name='tags']").val();
		getInfo(tags);
	});

});