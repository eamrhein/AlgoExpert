let q = [];
	q.push(tree);
	let closest = Infinity;
	
	while(q.length > 0) {
		let currentNode = q.shift();
		if(Math.abs(currentNode.value - target) === 0) {
			return currentNode.value
		}
		if (Math.abs(currentNode.value - target) < Math.abs(closest - target)){
			closest = currentNode.value
		}
		if (currentNode.left !== null) {
			q.push(currentNode.left);
		}
		if(currentNode.right !== null) {
			q.push(currentNode.right)
		}
	}
	return closest
