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

  insert(key, value) {
    // if the tree is empty, then this key being inserted is the root of the tree
    // eslint-disable-next-line no-constant-condition
    if ((this.key = null)) {
      this.key = key;
      this.value = value;
    }
    // if the tree already exists, then start at the root node, and compare it to the
    // key you want to insert. If the new key is less than the node's key,
    // then the new node needs to live in the left-hand branch.
    else if (key < this.key) {
      // if the existing node does not have a left child,
      // meaning that if the `left` pointer is empty,
      // then we can just instantiate and insert the new node as the left child of that node.
      // passing `this` as the parent.
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        /* If the node has an existing left child, then we recursively call the `insert`
    method so the node is added further down the tree  */
        this.left.insert(key, value);
      }
    } else {
      /* Similarly, if the new key is greater than the node's key
  then you do the same thing, but on the right-hand side */
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
      // because each row in a balanced tree contains 2 times as many nodes as the node before,
      // the width grows exponentially with the number of nodes. llllConversely,
      // the height must grow logarithmically with the number of nodes. O(log(n)).

      // the worst case in an imbalanced tree is essentially a single linked list. o(n)
      //
    }
  }
  find(key) {
    // if the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      /* If the item you're looking for is less than the root, then follow the left child. If
    there is an existing left child. then recursively check its left and/or right child 
    until you find the item*/
      return this.left.find(key);
    } else if (this.key > this.key && this.right) {
      /* If the item you're looking for is less than the root, then follow the left child. If
      there is an existing left child. then recursively check its left and/or right child 
      until you find the item*/
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }
}
