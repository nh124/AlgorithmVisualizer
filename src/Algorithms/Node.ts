export default class Node<T> {
  val: T;

  next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
