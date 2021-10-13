const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

module.exports = class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addWith(this.tree, data);

        function addWith(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = addWith(node.left, data);
            } else {
                node.right = addWith(node.right, data);
            }
            return node;
        }
  }

  has(data) {
    return searchWith(this.tree, data);

    function searchWith(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
        searchWith(node.left, data) :
        searchWith(node.right, data);
    }
  }

  find(data) {
    let node = this.tree;
    while (node) {
      if (data > node.data) {
        node = node.right;
      } else if (data < node.data) {
        node = node.left;
      } else if (data == node.data) {
        return node;
      }
    }
    return null;
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.tree) {
      return;
    }

    let node = this.tree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.tree) {
      return;
    }

    let node = this.tree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

