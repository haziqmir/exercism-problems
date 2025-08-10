export const treeFromTraversals = (preorder, inorder) => {
  // base case
  if (preorder.length === 0 && inorder.length === 0) return {};

  // length check
  if (preorder.length !== inorder.length) {
    throw new Error('traversals must have the same length');
  }

  // identity check
  const inSet = new Set(inorder);
  if (preorder.some(v => !inSet.has(v))) {
    throw new Error('traversals must have the same elements');
  }
  // another way
  // if (preorder.every((v, i) => inorder.indexOf(v) < 0)) {
  //   throw new Error('traversals must have the same elements');
  // }

  // uniqueness check
  const isUnique = arr => new Set(arr).size === arr.length;
  if (!isUnique(preorder) || !isUnique(inorder)) {
    throw new Error('traversals must contain unique items');
  }

  // crude array approach, might change later
  const pivot = preorder.shift();
  const idx = inorder.indexOf(pivot);

  // till current root
  const inOrderLeft = inorder.splice(0, idx);
  const preOrderLeft = preorder.splice(0, idx);

  // current node
  inorder.shift();

  // after current root
  const inOrderRight = [...inorder];
  const preOrderRight = [...preorder];
  console.log(inOrderLeft, inOrderRight);
  console.log(preOrderLeft, preOrderRight);

  const node = {
    value: pivot,
    left: treeFromTraversals(preOrderLeft, inOrderLeft),
    right: treeFromTraversals(preOrderRight, inOrderRight),
  };

  return node;
};
