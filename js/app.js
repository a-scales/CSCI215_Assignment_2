

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

function mathFun() {
	var inputArr = [];
	var input = parseInt(prompt("Enter a number. -1 will start the calculation"));

	while(input != '-1') {
		inputArr.push(input);
		input = parseInt(prompt("Enter a number. -1 will start the calculation"));
	}
	
	var m = inputArr[0];
	var mx = inputArr[0];
	var min = inputArr.forEach(min);
	var max = inputArr.forEach(max);
	function min(item,index) {
		m = item < m ? item : m;
	}
	min = m;
	function max(item,index) {
		mx = item > mx ? item : mx;
	}
	max = mx;
	var modeInt = Object.create(null);
	var mode = inputArr.forEach(mode);
	var md = 0;
	var m_i
	function mode(item, index) {
		modeInt[item] = modeInt[item] > 0 ? modeInt[item] += 1 : 1;
	}
	Object.values(modeInt).forEach(function mde(item,index) {
		md = item >= md ? m_i = index : m_i = m_i;
	});			
	mode = modeInt[m_i];
	console.log(mode);
	var evens = 0;
	var odds = 0;
	var ppow = 0;
	var primes = 0;
	for(var i in inputArr) {
		if(inputArr[i] % 2 == 0) {
			evens++;
		}
		else {
			odds++;
		}
		if(Math.sqrt(inputArr[i]) % 1 == 0) {
			ppow++;
		}
		isAprime = true;
		for(var j = 0; j < inputArr[i]; j++) {
			if(inputArr[i] % j == 0) {
				isAprime = false;
			}
		}
		if(isAprime){
			primes++;
		}
	}
	document.getElementById('min').innerHTML = min;
	document.getElementById('max').innerHTML = max;
	document.getElementById('mode').innerHTML = mode;
	document.getElementById('median').innerHTML = inputArr[Math.floor(inputArr.length/2)];
	document.getElementById('evens').innerHTML = evens;
	document.getElementById('odds').innerHTML = odds;
	document.getElementById('powers').innerHTML = ppow;
	document.getElementById('primes').innerHTML = primes;
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
function emailVerify() {
	var valid = ':(';
	var inputString = document.getElementById("emailInput").innerHTML;
	var at_check = inputString.split('@').length > 1 && inputString.split('@')[0].length > 0;
	if(at_check) {
		var at_split = inputString.split('@');
		var dot_check = at_split[1].split('.').length > 1 && at_split[1].split('.')[1].length > 0;
		if(dot_check){
			valid = ':)'
		}
	}
	document.getElementById("output").innerHTML = valid;
	
}





