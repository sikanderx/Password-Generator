var alphabets_lower = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
var alphabets_upper = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
var digits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
var special_characters = new Array('!', '@', '#', '$', '%', '?', '&', '*', '(', ')', ',', '.', '+', '-');

$("#generatorForm").submit(function (e) {
	var listchars = new Array();
	if ($('#lower').is(':checked')) {
		listchars = listchars.concat(alphabets_lower);
	}
	if ($('#upper').is(':checked')) {
		listchars = listchars.concat(alphabets_upper);
	}
	if ($('#digits').is(':checked')) {
		listchars = listchars.concat(digits);
	}
	if ($('#special').is(':checked')) {
		listchars = listchars.concat(special_characters);
	}
	lgt = listchars.length;
	if (lgt == 0) {
		$('input.result').val('');
	}
	else {
		pass = '';
		for (i = 1; i <= $('#number').val(); i++) {
			pass = pass + '' + listchars[Math.floor(Math.random() * lgt)];
		}
		$('#result').val(pass);
	}
	return false;
});