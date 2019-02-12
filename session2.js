// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string.
// If more than one, then put into an array
function longestWord (sentence) {
	// Strips punctuation and spaces, and returns array of words
	const words = sentence.toLowerCase().match(/[a-z0-9]+/g); // Returns a filtered array of matches (alphanumeric or numbers only, punctuation will be stripped) to the regex

	// Sorts words based on length
	const sortedWords = words.sort((a, b) => b.length - a.length);

	// If multiple words with same length, add to an array
	const longestWords = sortedWords.filter((word) => word.length === sortedWords[0].length);

	return longestWords.length === 1 ? longestWords[0] : longestWords;
}
console.log(longestWord('How much wood could a woodchuck chuck, if woodchucks could chuck wood?'));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
function chunkArray (arr, len) {
	let results = [];
	let i = 0;

	while (i < arr.length) {
		results.push(arr.slice(i, i + len));
		i = i + len;
	}
	return results;
}
console.log(chunkArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ], 2));
console.log(chunkArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ], 3));
console.log(chunkArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ], 4));
console.log('\n');

function chunkArray2 (arr, len) {
	let results = [];
	arr.forEach((element) => {
		let last = results[results.length - 1];
		if (!last || last.length === len) {
			results.push([ element ]);
		} else {
			last.push(element);
		}
	});
	return results;
}
console.log(chunkArray2([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ], 2));
console.log(chunkArray2([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ], 3));
console.log(chunkArray2([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ], 4));
console.log('\n');

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
function flattenArray (arrays) {
	return arrays.reduce((a, b) => a.concat(b), []);
}
console.log(flattenArray([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 0 ] ]));
console.log(flattenArray([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 0 ] ]));
console.log(flattenArray([ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9 ], [ 0 ] ]));
console.log('\n');

function flattenArray2 (arrays) {
	return [].concat.apply([], arrays);
}
console.log(flattenArray2([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 0 ] ]));
console.log(flattenArray2([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 0 ] ]));
console.log(flattenArray2([ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9 ], [ 0 ] ]));
console.log('\n');

function flattenArray3 (arrays) {
	return [].concat(...arrays);
}
console.log(flattenArray3([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 0 ] ]));
console.log(flattenArray3([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 0 ] ]));
console.log(flattenArray3([ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9 ], [ 0 ] ]));
console.log('\n');

// CHALLENGE 4: ANAGRAM
// Returns true if anagram, false if not
function isAnagram (str1, str2) {
	return formatString(str1) === formatString(str2);
}
console.log(isAnagram('elbow', 'below'));
console.log(isAnagram('elbows', 'below'));
console.log(isAnagram('elbows', 'belows'));
console.log(isAnagram('Dormitory', 'dirty room###'));
console.log('\n');

// Helper function for Challenge 4
function formatString (str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follow it
// and capitalize the vowels.
// 'Z' should become 'A'
function letterChanges (str) {
	let result = str.toLowerCase().replace(/[a-z]/gi, function (char) {
		return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
	});

	return result.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());
}
console.log(letterChanges('Hello there werido'));
