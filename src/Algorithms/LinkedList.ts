import Node from './Node';

export default class LinkedList<T> {
  head: Node<T> | null;

  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val: T): void {
    if (this.head === null) {
      this.head = new Node(val);
      this.tail = new Node(val);
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
    let cIndex = 0;
    while (currentNode !== null && cIndex + 2 < index) {
      if (currentNode.next === null) {
        break;
      }
      currentNode = currentNode.next;
      cIndex += 1;
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
    const { value: currHead } = this.head.val as { value: T };
    const { value: givenVal } = val as { value: T };
    if (currHead === givenVal) {
      this.head = this.head.next;
      return true;
    }
    let current = this.head;
    while (current?.next !== null) {
      const { value: currVal } = current?.next.val as { value: T };
      if (currVal === givenVal) {
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
      const { value: currentVal } = current.val as { value: T };
      const { value: findVal } = val as { value: T };
      if (currentVal === findVal) {
        return index + 1;
      }
      current = current.next;
      index += 1;
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
