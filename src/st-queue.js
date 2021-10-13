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
module.exports = class Queue {
    constructor(value = null, next = null) {
      this.node = new ListNode();
      this.node.value = value;
      this.node.next = next;
      this.size = 0;
    }
    
    getUnderlyingList() {
      return this.node
    }
  
    enqueue(element) {
      if (this.node.value === null) {
        this.node.value = element;
      } else {
        const newNode = new ListNode(element);
        let current = this.node;
        for (let i = 0; i < this.size - 1; i++) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    dequeue() {
      const current = this.node;
      this.node = this.node.next;
      this.size--;
      return current.value;
    }
  }