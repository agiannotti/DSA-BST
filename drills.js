class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.parent = parent;
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
