// Two Number Sum
//
// Write a function that takes in a  non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up ot the target sum, the function should return them in an array, in sorted
// order. If no two number sum up to the target sum, the function should return an empty array. Assume that there will be
// at most one pair of numbers summing up to the target sum.
//
// Sample input [3, 5, -4, 8, 11, 1, -1, 6], 10
// Sample output: [-1, 11]

function twoNumberSum(array, targetSum) {
  // Write your code here.
	// Inputs are DISTINCT INTEGERS
	// Output is an Array
	// Sorted Order if there are no twosums return an empty array
	// At Most one pair.
	
	// Methodology
	// Initialize Empty Array
	// Loop through array starting at 0
	// 	Save current value as  variable
	// 	Loop through array starting at the index of the outer array + 1
	//  	if the value of saved outer + current item === push items to array in order, 
	//		if twosum is found Return it
	// else return the empty array;

	// Easy Approach nested loop
	let res = [];
	for (let i = 0; i < array.length; i++) {
		let firstNum = array[i];
		for (let j = i + 1; j < array.length; j++) {
			let secondNum = array[j];
			if (firstNum + secondNum === targetSum) {
				if (secondNum > firstNum) {
					res.push(firstNum, secondNum);
				} else {
					res.push(secondNum, firstNum)
				}
				return res;
			}
		}
	}
	return res;
	
	// better approach, hash table
	let dictionary = {};
	for(let i = 0; i < array.length; i += 1) {
		let x = array[i];
		let y = targetSum - x;
		if (dictionary[y]) {
			return x > y ?  [y,x] : [x, y]
		} else {
			dictionary[x] = x;
		}
	}
	return [];
}
}

