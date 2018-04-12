$(document).ready(function() {

	$('.submit').click(function(){
		var date = $("#start_date").val();
    	var number_of_days = $("#number_of_days").val();
    	var country_code = $("#country").val();


    	dateArray = date.split('/');

    	month = parseInt(dateArray[0]);
    	day = parseInt(dateArray[1]);
    	year = parseInt(dateArray[2]);

    	//Check if leap year
    	if (((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)){
    		console.log(true)
    	}else{
    		console.log(false)
    	}
    	
    	console.log(month);
    	console.log(day);
    	console.log(year);
	});
});