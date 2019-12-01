function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	let i = 0;
	let j = 0;
	let maxSum = 0;
	while (i < array.length) {
		while (j < array.length -1) {
			if(Math.abs(j - i) === 0) {
				if (array[i] > maxSum) {
					maxSum = array[i]
				}
			}
			let sum = array[j] + array[i];
			if (Math.abs(j - i) > 1 && sum > maxSum) {
				maxSum = sum
			}
			j++
		}
		i++
	}
	return maxSum
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
