const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data); //создаем новый узел
    if(!this.treeRoot) { // проверяем, есть ли у нас корень дерева
      this.treeRoot = newNode; // если нет, то новый узел будет нашем корнем
      return;
    }
    let currentNode = this.treeRoot;

    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return
        }
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return searchElementWithin(this.treeRoot, data);

    function searchElementWithin(currentNode, data) {
      if(!currentNode) {
        return false;
      }
      if(currentNode.data === data) {
        return true;
      }

      if(data < currentNode.data) {
       return searchElementWithin(currentNode.left, data)
      }

      if(data > currentNode.data) {
       return searchElementWithin(currentNode.right, data)
      }
    }
  }

  find(data) {
  let currentNode = this.treeRoot;

    while (currentNode) {
      if(currentNode.data === data ) {
        return currentNode;
      } if (data < currentNode.data) {
        currentNode = currentNode.left;
      }else {
        currentNode = currentNode.right;
      }
    }
return null
  }

  remove(data) {
    this.root = removeNode(this.treeRoot, data);

    function removeNode(currentNode, data) {
      if(!currentNode) {
        return null
      }

      if(data < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, data);
        return currentNode;
      }else if(currentNode.data < data) {
        currentNode.right = removeNode(currentNode.right, data);
        return currentNode;
      }else {
        if(!currentNode.left && !currentNode.right) {
          return null
        }

        if(!currentNode.left) {
          currentNode = currentNode.right;
          return currentNode;
        }

        if(!currentNode.right) {
          currentNode = currentNode.left;
          return currentNode;
      }

      let minFromRight = currentNode.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      currentNode.data = minFromRight.data;

      currentNode.right = removeNode(currentNode.right, minFromRight.data)
      return currentNode;
    }

    }
  }

  min() {
    if(!this.treeRoot) {
      return;
    }
    let currentNode = this.treeRoot;
    while(currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.data
  }

  max() {
    if(!this.treeRoot) {
      return;
    }

    let currentNode = this.treeRoot;
    while (currentNode.right) {
    currentNode = currentNode.right
  }

  return currentNode.data;
  }

}
module.exports = {
  BinarySearchTree
};