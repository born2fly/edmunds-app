// the parameters we need to pass in our request to YouTube's API --
var getInfo = function (tags, page) {
	console.log(page);
	var request = {};
	 
		request = {
			
			key: "2wdaf85q4nj24k5s55j5pd5y",
        };	
};

        // ajax call -- set the parameters --  youtube endpoint --
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