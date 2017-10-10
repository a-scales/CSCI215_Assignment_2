

// window.onload = randomPic;


function randomPic() {
	var I = ['imgs/img1.jpg','imgs/img2.jpg','imgs/img3.jpg','imgs/img4.jpg','imgs/img5.jpg'];
	var randInt = Math.floor((Math.random() * 4));
	console.log(randInt);
	document.getElementById("image").style.backgroundImage = "url('"+I[randInt]+"')";

}


function sentenceParse() {		
	var inputString;
	inputString = document.getElementById("input").innerHTML;
	inputString = inputString.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"").toUpperCase();
	var stringArr = inputString.split(" ");
	var uniqueWords = Object.create(null);
	for (var word in stringArr) {
		if(uniqueWords[stringArr[word]] == null) {
			// console.log(stringArr[word]);
			uniqueWords[stringArr[word]] = 1;
		}
		else if(uniqueWords[stringArr[word]] != null) {
			uniqueWords[stringArr[word]] += 1;
		}
	}
	console.log(stringArr);
	console.log(uniqueWords);
	var formatString = function() {
		var outputString = "";
		for (var i in uniqueWords) {
			outputString += i + " " + uniqueWords[i] + " ";
		}
		return outputString;
	};
	document.getElementById("output").innerHTML	= formatString();
}

function morseParse() {
	var inputString
	inputString = document.getElementById("morseInput").innerHTML;
	inputString = inputString.split("   ");
	var m = [
		['.-','A'],
		['-...','B'],
		['-.-.','C'],
		['-..','D'],
		['.','E'],
		['..-.','F'],
		['--.','G'],
		['....','H'],
		['..','I'],
		['.---','J'],
		['-.-','K'],
		['.-..','L'],
		['--','M'],
		['-.','N'],
		['---','O'],
		['.--.','P'],
		['--.-','Q'],
		['.-.','R'],
		['...','S'],
		['-','T'],
		['..-','U'],
		['...-','V'],
		['.--','W'],
		['-..-','X'],
		['-.--','Y'],
		['--..','Z']
	]
	var mm = new Map(m);
	var outputString = "";
	// console.log(inputString);
	for(var word in inputString) {
		// console.log(inputString[word]);
		var splitW = inputString[word].split(" ");
		for(var char in splitW) {
			console.log(mm.get(splitW[char]));
			outputString = outputString + mm.get(splitW[char])
		}
		outputString = outputString + "  ";
	}
	console.log(outputString);
	document.getElementById("output").innerHTML = outputString;

}