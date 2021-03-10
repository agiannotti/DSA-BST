// You have a mostly balanced binary search tree. This tree has 20 nodes. If the root node is on level 0, how many nodes are on level 4

// 1 2 3 4 5 6 7

//                4
//          2            5
//      1      3     6       7
//   x    x   x  x  x  x    x  x

// 5

// given a set of data, how would you create a balanced bst?

// 1. sort the data
// 2. find your root node i.e median via math.floor/2
// 3. continously determine median, if < root, head.left; if > root, head.right
