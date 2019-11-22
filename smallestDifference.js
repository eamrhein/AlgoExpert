function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	// two arays
	// Naive approach
	// nested loop between two arrays and find indexes where absolute difference is closest to zero
	// Other approach sort arrays by absolute values then point towards absolute diffrence.
	
	let sortedOne = arrayOne.sort((a, b) => a - b)
	let sortedtwo = arrayTwo.sort((a, b) => a - b)
}
