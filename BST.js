c// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
			if (value < this.value) {
				if(this.left === null) {
					this.left = new BST(value)
				} else {
					this.left.insert(value)
				}
			}
			if (value > this.value) {
				if (this.right === null) {
					this.right = new BST(value);
				} else {
					this.right.insert(value)
				}
			}
		
    return this;
  }

  contains(value) {
		if (value < this.value) {
			if (this.left === null) {
				return false;
			}
			return this.left.contains(value);
		} 
		if  (value > this.value) {
			if (this.right === null) {
				return false
			}
			return this.right.contains(value)
		}
		return true
		// // Write your code here.
  }

  remove(value, parent = null) {
		// Write your code here.
		// Do not edit the return statement of this method.
		if (value < this.value) {
			if (this.left) {
				this.left.remove(value, this);
			}
		} else if  (value > this.value) {
			if (this.right) {
				this.right.remove(value, this)
			}
		} else {
			if (this.left && this.right) {
				// do something
			} else if (parent === null) {
				
			}
		}
    return this;
  }
}

// Do not edit the line below.
exports.BST = BST;
