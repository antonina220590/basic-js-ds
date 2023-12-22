const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
//l = -1, 3, 1, 2, 3, 4, 5
//k =     3


function removeKFromList(l, k) {
  let help = new ListNode(-1); //создаем новый элемент перед 1-м элементом l для случая, когда 1-й элемент === k
  let head = l;
  help.next = head;
  let previous = help;
  let current = l;

  while(current) {
    if(current.value === k) { //3
      previous.next = current.next;// -1 -> 1
      current = current.next; //3 = 1
    } else {
      previous = current; // -1 = 1
      current = current.next; // 1 = 2
    }
  }
  return help.next;

}

module.exports = {
  removeKFromList
};
