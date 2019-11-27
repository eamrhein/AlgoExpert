class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	const sums = [];
	helper(root, 0, sums);
	return sums;
}

function helper(node, sum, sumList) {
	if (!node) return;
	const newSum = sum + node.value;
	if(!node.left && !node.right) {
		sumList.push(newSum);
		return;
	}
	helper(node.left, newSum, sumList);
	helper(node.right, newSum, sumList)
}
