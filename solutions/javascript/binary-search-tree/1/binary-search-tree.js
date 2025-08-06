export class BinarySearchTree {
  constructor(value) {
    this.__data = value;
    this.__right = null;
    this.__left = null;
  }

  get data() {
    return this.__data;
  }

  get right() {
    return this.__right;
  }

  get left() {
    return this.__left;
  }

  insert(key) {
    if (key <= this.__data) {
      this.__left ? this.__left.insert(key) : (this.__left = new BinarySearchTree(key));
    } else {
      this.__right ? this.__right.insert(key) : (this.__right = new BinarySearchTree(key));
    }
  }

  each(fn = () => {}) {
    this.__left && this.__left.each(fn);
    fn(this.__data);
    this.__right && this.__right.each(fn);
  }
}