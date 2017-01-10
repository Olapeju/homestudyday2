function words(string){
	var splittedString = string.split(/\s+|\n/m);
	var finalObj = {};
	function stringCounter(string, word){
		var count = 0;
		string = string.split(/\s+|\n/m);
		for (var i = 0; i < string.length; i++) {
			if (string[i] === word){
				count++;
			}
		}
		return count;
	}
	for (var i = 0; i < splittedString.length; i++) {
		if ( ! finalObj.hasOwnProperty(splittedString[i])){
			var value = splittedString[i];
			finalObj[splittedString[i]] = stringCounter(string, splittedString[i]);
			
		}
	}
	return finalObj;
}