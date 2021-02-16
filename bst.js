// each node in a bst holds a key, a value, and left and right pointers
// each

// 3 fundamental BST operations

// - insert
// - remove
// - delete

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}
