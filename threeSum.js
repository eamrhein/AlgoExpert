let res = []
	let sortedArray = array.sort((a, b) => a - b);
	
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length -1;
		while (left < right) {
			let currentSum = sortedArray[i] + sortedArray[left] + sortedArray[right]
			if (currentSum === targetSum) {
				res.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
				left += 1;
				right -= 1;
			} else if (currentSum < targetSum) {
				left += 1
			} else if (currentSum > targetSum) {
				right -= 1
			}
		}
		
	}
 return res;
