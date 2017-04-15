

// the parameters we need to pass in our request to Edmund's API --
var getInfo = function (make, model, year, zip) {
	console.log(make + ',' + model + ',' + year + ',' + zip);
	var request = {};
	request = {
		fmt: 'json',
		api_key: "64tb3btuj5zr4pr8zxsdg94a",
		state: 'used', // changed this to 'used' from 'new'
		year: year
};

var url = "http://api.edmunds.com/api/vehicle/v2/" + make + "/models/";
// ajax call -- set the parameters --  edmunds TMV endpoint --
$.ajax({
		url: url,
		data: request,
		type: "GET",
	})
	.done(function (result) {
		console.log(result);
		var id = result.models[0].years[0].styles[0].id;
		//list of all available cars that have an id...shown in button format back to user
		//for(var i = 0; i > result.models.length; i++;){
		//if(model == result.models[i].name){
		//	display styles...set id to object.id
		//	var styles;
		//	for()
		//		append <button attr=id> show style 
		//}
	  getValue(id, zip);
});
};

var getValue = function (id, zip) {
	var request = {
		styleid: id,
		zip: zip,
		fmt: 'json',
		api_key: "64tb3btuj5zr4pr8zxsdg94a"
};

$.ajax({
	url: "https://api.edmunds.com/v1/api/tmv/tmvservice/calculatetypicallyequippedusedtmv",
	data: request,
	type: "GET"
})
	.done(function (result) {
		console.log(result);
		showInfo(result);
});
		console.log(id);
};

// find requested items and display them --
function showInfo(item) {
	var usedValue = item.tmv.nationalBasePrice.usedPrivateParty;
	var usedRegionalAdd = item.tmv.regionalAdjustment.usedPrivateParty; //173
	var ballParkPrivate = usedValue + usedRegionalAdd;
	var curday = new Date();
	console.log(usedValue);
	console.log(usedRegionalAdd);
	console.log(ballParkPrivate);
	$('.results').append(curday + "<h2>The estimated value is:</h2>" + "$" + ballParkPrivate);
	//var tradeinValue = item.tmv.nationalBasePrice.regionalAdjustment.usedTradeIn;
	return ballParkPrivate; // added this since last session
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
	model = $(this).find("input[name='model']").val();
	year = $(this).find("input[name='year']").val();
	if (year < 1990) alert('You must enter a year from 1990 or later');
	zip = $(this).find("input[name='zip']").val();
	getInfo(make, model, year, zip);

});

	//button listener that would return the second api call showInfo(style id goes here)
});