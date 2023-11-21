/* eslint-disable no-restricted-globals */
import Node from './Node';
import { NodeType } from './NodeType';

interface NodeWithValue {
  value: unknown;
}

export default class LinkedList<T> {
  [x: string]: any;
  head: Node<T> | null;

  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
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
    const input = val as NodeType;
    if (this.head === null) return false;
    const { value: currHead } = this.head.val as NodeWithValue;
    const { value: givenVal } = input as NodeWithValue;
    if (currHead === givenVal) {
      this.head = this.head.next;
      return true;
    }
    let current = this.head;
    if (isNaN(input.value)) {
      const deleteLast = this.deleteLast();
      if (deleteLast) return true;
    }
    while (current?.next !== null) {
      const { value: currVal } = current?.next.val as NodeWithValue;
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

  deleteLast() {
    if (this.head === null) {
      return false;
    }

    let current = this.head;
    if (current.next === null) {
      this.head = null;
      this.tail = null;
      return true;
    }
    while (current.next?.next !== null) {
      if (current.next === null) {
        break;
      }
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    return true;
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
