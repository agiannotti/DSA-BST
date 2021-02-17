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
    if (this.key === null) {
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
    /* Finding in BST with balanced tree would be O(log(n))
    If skewed, worst case would be 0(n). If root O(1) */
  }
  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        /* If the node only has a left child, then you replace the node with its left child*/
        this._replaceWith(this.left);
      } else if (this.right) {
        /* Similarly, if the node only has a right, then you replace with its right child*/
        this._replaceWith(this.right);
        /* If the node has no children then simply remove it and any references to it
        by calling "this._replaceWith(null)" */
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remote(key);
    } else {
      throw new Error('Key Error');
    }
  }
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
  _findMax() {
    if (!this.right) {
      return this;
    }
    return this.right._findMax();
  }
}

const BST = new BinarySearchTree();
function createBST(key) {
  key.map((item) => {
    BST.insert(item, item);
  });
}

console.dir(createBST([3, 1, 4, 6, 9, 2, 5, 7]), { depth: null });

// // 1 2 3 4 5 6 7 9
//          4
//       2       7
//     1   3   6   9

//
