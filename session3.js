// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered, regardless of the amount of numbers.  No Arrays!
function addAll () {
	var args = Array.prototype.slice.call(arguments);
	var total = 0;

	for (let i = 0; i < args.length; i++) {
		total += args[i];
	}
	return total;
}
console.log(addAll(2, 45, 8, 53) + '\n');

function addAll2 (...numbers) {
	let total = 0;
	numbers.forEach((num) => (total += num));
	return total;
}
console.log(addAll2(2, 45, 8, 53) + '\n');

function addAll3 (...numbers) {
	return numbers.reduce((total, num) => (total += num));
}
console.log(addAll3(2, 45, 8, 53) + '\n');

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers.
//
function sumAllPrimes (num) {
	let total = 0;

	function checkForPrime (i) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				return false;
			}
		}
		return true;
	}

	for (let i = 2; i <= num; i++) {
		if (checkForPrime(i)) {
			total += i;
		}
	}
	return total;
}
console.log(sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments
// Return leftover values in an array
function seekAndDestroy (array) {
	const args = Array.from(arguments);

	function filterArray (array) {
		return args.indexOf(array) === -1;
	}

	return array.filter(filterArray);
}
console.log(seekAndDestroy([ 2, 3, 4, 8, 6, 6, 'hello' ], 2, 6));

function seekAndDestroy2 (array, ...rest) {
	return array.filter((value) => !rest.includes(value));
}
console.log(seekAndDestroy2([ 2, 3, 4, 8, 6, 6, 'hello' ], 2, 6));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park.  There are trees between them which cannot
// be moved. Your task is to rearrange the people by their heights in non-descending order
// without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortedByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
function sortedByHeight (array) {
	const positions = [];
	const values = [];

	array.forEach((val, index) => (val === -1 ? positions.push(index) : values.push(val)));

	const sortArray = values.sort((a, b) => a - b);
	positions.forEach((val, index) => sortArray.splice(positions[index], 0, -1));
	return sortArray;
}
const a = [ -1, 150, 190, 170, -1, -1, 160, 180 ];
console.log(sortedByHeight(a));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it.
// If all letters are present, return undefined
function missingLetters (str) {
	let compare = str.charCodeAt(0);
	let missing;

	str.split('').map((char, index) => {
		if (str.charCodeAt(index) == compare) {
			++compare;
		} else {
			missing = String.fromCharCode(compare);
		}
	});
	return missing;
}
console.log(missingLetters('abdce'));
console.log(missingLetters('abdcdefghjklmo'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
function evenOddSums (array) {
	let even = 0;
    let odd = 0;

    array.forEach((value) => (value % 2 === 0 ? (even += value) : (odd += value)));
    return [even, odd]
}
console.log(evenOddSums([ 50, 60, 60, 45, 71 ]));
