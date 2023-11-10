import Node from './Node';

export default class linkedList<T> {
  head: Node<T> | null;

  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val: T): void {
    if (this.head === null) {
      this.head = this.tail = new Node(val);
    } else {
      const oldTail = this.tail;
      this.tail = new Node(val);
      if (oldTail !== null) oldTail.next = this.tail;
    }
  }

  addFirst(val: T): void {
    if (this.head === null) {
      this.add(val);
    } else {
      const newNode = new Node(val);
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    }
  }

  addOnIndex(val: T, index: number): void {
    let currentNode = this.head;
    if (currentNode === null) {
      this.add(val);
      return;
    }
    if (index === 1) {
      this.addFirst(val);
      return;
    }
    let c_index = 0;
    while (currentNode !== null && c_index + 2 < index) {
      if (currentNode.next === null) {
        break;
      }
      currentNode = currentNode.next;
      c_index++;
    }
    if (currentNode.next !== null) {
      const newNode = new Node(val);
      const nextNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = nextNode;
    } else {
      this.add(val);
    }
  }

  delete(val: T): boolean {
    if (this.head === null) return false;
    const { value: curr_head } = this.head.val as { value: T };
    const { value: given_val } = val as { value: T };
    if (curr_head === given_val) {
      this.head = this.head.next;
      return true;
    }
    let current = this.head;
    while (current?.next !== null) {
      const { value: curr_val } = current?.next.val as { value: T };
      if (curr_val === given_val) {
        const nextNode = current.next;
        current.next = current.next.next;
        nextNode.next = null;
        return true;
      }
      current = current?.next;
    }
    return false;
  }

  search(val: T): number {
    let index = 0;
    let current = this.head;

    while (current !== null) {
      const { value: current_val } = current.val as { value: T };
      const { value: find_val } = val as { value: T };
      if (current_val === find_val) {
        return index + 1;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  reverse(): void {}

  display(): T[] {
    const nodeList: T[] = [];
    let current = this.head;
    if (current === null) return nodeList;
    while (current !== null) {
      nodeList.push(current.val);
      current = current?.next;
    }
    return nodeList;
  }
}
