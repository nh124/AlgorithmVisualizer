import LinkedList from './LinkedList';
import { NodeType } from './NodeType';

export default class LinkedListList<T> {
  lists: LinkedList<T>[];

  constructor() {
    this.lists = [];
  }

  addList(list: LinkedList<T>): void {
    this.lists.push(list);
  }

  getLength(): number {
    return this.lists.length;
  }

  getList(index: number): LinkedList<NodeType> | undefined {
    return this.lists[index] as LinkedList<NodeType>;
  }

  alterIndex(list: LinkedList<T>, index: number): void {
    this.lists[index] = list;
  }

  getAllLists(): LinkedList<T>[] | LinkedList<NodeType>[] | [] {
    return this.lists;
  }

  clearList(): boolean {
    this.lists = [];
    return true;
  }

  delete(index: number): boolean {
    if (index < 0) return false;
    this.lists.splice(index, 1);
    return true;
  }
}
