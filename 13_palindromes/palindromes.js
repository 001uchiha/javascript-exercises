const palindromes = function (s) {
	const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	return cleaned === [...cleaned].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
