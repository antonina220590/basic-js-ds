const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () { // здесь хранятся ссылки
    this.firstQElement = null; //на начало очереди
    this.lastQElement = null; // на конец очереди
  }

  getUnderlyingList() {
    return this.firstQElement;
  }

  enqueue(value) {
    const node = new ListNode(value); //создаем очередной элемент

    if(this.firstQElement) { //если какой-то элемент уже есть в очереди
      this.lastQElement.next = node; //то элемент следующий за последним будет наш новый узел
      this.lastQElement = node; //последний элемент теперь указывает на наш новый узел
    }
    if(!this.firstQElement) {//если элементов нет
      this.firstQElement = node; // узел будет и первым элементом
      this.lastQElement = node // и последним
    }

  }
  dequeue() {
   const node = this.firstQElement; //ссылка на текущий первый элемент
   this.firstQElement = this.firstQElement.next; // теперь начало - это следующий элемент

   return node.value; //возвращаем значение первого элемента
  }
}

module.exports = {
  Queue
};
