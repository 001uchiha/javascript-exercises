const repeatString = function(str, n) {
	if (n < 0) return "ERROR";
	
	strCount = ''
  	for (let i = 0; i < n; i++) {
    	strCount += str;
  	}

  	return strCount;
};

// Do not edit below this line
module.exports = repeatString;
