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
    this.first = null; //на начало очереди
    this.last = null; // на конец очереди
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const node = new ListNode(value); //создаем очередной элемент

    if(this.first) { //если какой-то элемент уже есть в очереди
      this.last.next = node; //то элемент следующий за последним будет наш новый узел
      this.last = node; //последний элемент теперь указывает на наш новый узел
    }
    if(!this.first) {//если элементов нет
      this.first = node; // узел будет и первым элементом
      this.last = node // и последним
    }

  }
  dequeue() {
   const node = this.first; //ссылка на текущий первый элемент
   this.first = this.first.next; // теперь начало - это следующий элемент

   return node.value; //возвращаем значение первого элемента
  }
}

module.exports = {
  Queue
};
