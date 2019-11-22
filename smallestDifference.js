function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	// two arays
	// Naive approach
	// nested loop between two arrays and find indexes where absolute difference is closest to zero
	// Other approach sort arrays by absolute values then point towards absolute diffrence.
	
	let sortedOne = arrayOne.sort((a, b) => a - b);
	let sortedTwo = arrayTwo.sort((a, b) => a - b);
	let i = 0;
	let j = 0;
	let smallest = Infinity;
	let current = Infinity;
	let resultPair = [];
	
	while (i < sortedOne.length && j < sortedTwo.length ) {
		let numOne = sortedOne[i]
		let numTwo = sortedTwo[j]
		if(numOne < numTwo) {
			current = numTwo - numOne;
			i += 1;
		} else if (numOne > numTwo) {
			current = numOne - numTwo;
			j += 1;
		} else {
			return [numOne, numTwo]
		}
		if (smallest > current) {
			smallest = current;
			resultPair = [numOne, numTwo]
		}
	}
	return resultPair;
}

