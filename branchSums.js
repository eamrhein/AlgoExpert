class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	if (root.right && root.left) {
		return [branchSums(root.right) + branchSums(root.left)]
	} else if(root.left) {
		return [root.value +branchSums(root.left)[0]]
	} else if (root.right) {
		return [root.value + branchSums(root.right)[0]]
	} else {
		return [root.value];
	} 
	
}
