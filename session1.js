// CHALLENGE 1: REVERSE A STRING
// Returns a string in reverse
function reverseString (str) {
	return str.split('').reverse().join('');
}
console.log(reverseString('HelloWorld'));

function reverseString2 (str) {
	let revString = '';
	for (let i = str.length - 1; i >= 0; i--) {
		revString = revString + str[i];
	}
	return revString;
}
console.log(reverseString2('HelloWorld'));

function reverseString3 (str) {
	let revString = '';
	for (let i = 0; i <= str.length - 1; i++) {
		revString = str[i] + revString;
	}
	return revString;
}
console.log(reverseString3('HelloWorld'));

function reverseString4 (str) {
	let revString = '';
	for (let char of str) {
		revString = char + revString;
	}
	return revString;
}
console.log(reverseString4('HelloWorld'));

function reverseString5 (str) {
	let revString = '';
	str.split('').forEach(function (char) {
		revString = char + revString;
	});
	return revString;
}
console.log(reverseString5('HelloWorld'));

// ^^^^^ EQUALS vvvvvvvvvv

function reverseString6 (str) {
	let revString = '';
	str.split('').forEach((char) => (revString = char + revString));
	return revString;
}
console.log(reverseString6('HelloWorld'));

function reverseString7 (str) {
	return str.split('').reduce((revString, char) => char + revString, '');
}
console.log(reverseString7('HelloWorld'));

// CHALLENGE 2: VALIDATE A PALINDROME
// Returns true if a palindrome, false if not
function isPalindrome (str) {
	let revStr = str.split('').reduce((revString, char) => char + revString, '');
	return revStr === str;
}
console.log(isPalindrome('HelloWorld'));
console.log(isPalindrome('racecar'));

// CHALLENGE 3: REVERSE AS INTEGER
// 531 === 135
function reverseInt (int) {
	const revString = int.toString().split('').reduce((reversed, char) => char + reversed, '');
	return parseInt(revString) * Math.sign(int);
}
console.log(reverseInt(-3760));

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of
// every word capitalized
function capitalizeLetters (str) {
	const strArray = str.toLowerCase().split(' ');
	for (let i = 0; i < strArray.length; i++) {
		strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
	}
	return strArray.join(' ');
}
console.log(capitalizeLetters('This is the greatest day ever.'));

function capitalizeLetters2 (str) {
	return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
}
console.log(capitalizeLetters2('This is the greatest day ever.'));

function capitalizeLetters3 (str) {
	return str.replace(/\b[a-z]/gi, function (char) {
		return char.toUpperCase();
	});
}
console.log(capitalizeLetters3('This is the greatest day ever.'));

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
function maxCharacter (str) {
	const charMap = {};
	let maxNum = 0;
	let maxChar = '';

	str.split('').forEach((char) => {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});
	for (let char in charMap) {
		if (char != ' ' && charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
			//console.log (maxChar + '\t' + maxNum);
		}
	}
	return maxChar;
}
console.log(maxCharacter('I love javascript all day every day'));

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz,"
// and for multiples of 5 print "Buzz".  For numbers which
// are multiple of both 3 and 5, print "FizzBuzz".
function fizzBuzz () {
	for (let index = 1; index <= 100; index++) {
		if (index % 3 == 0 && index % 5 == 0) {
			console.log('FizzBuzz');
		} else if (index % 3 == 0) {
			console.log('Fizz');
		} else if (index % 5 == 0) {
			console.log('Buzz');
		} else {
			console.log(index);
		}
	}
}
console.log(fizzBuzz());
