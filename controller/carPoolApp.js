$(function(){

	// dynamically populate an array with all of the rides available
	ridesArray = [];
	for(var i = 0; i < rides.length;i++){
		if( $.inArray( rides[i].ride, ridesArray) == -1){
			ridesArray.push(rides[i].ride);
		}
	};
  
});