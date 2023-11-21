import { describe, it, expect } from 'vitest';
import LinkedList from './LinkedList';
import { NodeType } from './NodeType';

describe('LinkedList Add', () => {
  it('Add to linkedList', () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    expect(linkedList.head?.val).toBe(1);
    expect(linkedList.head?.next).toBe(null);
    linkedList.add(2);
    expect(linkedList.head?.val).toBe(1);
    expect(linkedList.head?.next?.val).toBe(2);
    expect(linkedList.head?.next?.next).toBe(null);

    // ADD on index
    const linkedList2 = new LinkedList<number>();
    linkedList2.add(1);
    linkedList2.add(2);
    linkedList2.add(3);
    linkedList2.add(4);
    linkedList2.addOnIndex(9, 1);
    expect(linkedList2.head?.val).toBe(9);
    expect(linkedList2.head?.next?.val).toBe(1);
    expect(linkedList2.head?.next?.next?.val).toBe(2);
    expect(linkedList2.head?.next?.next?.next?.val).toBe(3);
    expect(linkedList2.head?.next?.next?.next?.next?.val).toBe(4);
    expect(linkedList2.head?.next?.next?.next?.next?.next).toBe(null);
  });
});

describe('LinkedList Delete', () => {
  it('Add to linkedList', () => {
    const linkedList = new LinkedList<NodeType>();
    linkedList.add({ id: 1, value: 1, isVisible: true });
    linkedList.add({ id: 2, value: 2, isVisible: true });
    linkedList.add({ id: 3, value: 3, isVisible: true });
    linkedList.add({ id: 4, value: 4, isVisible: true });
    linkedList.delete({ id: 2, value: 2, isVisible: true });
    expect(linkedList.head?.val.value).toBe(1);
    expect(linkedList.head?.next?.val.value).toBe(3);
    expect(linkedList.head?.next?.next?.val.value).toBe(4);

    const linkedList2 = new LinkedList<NodeType>();
    linkedList2.add({ id: 1, value: 1, isVisible: true });
    linkedList2.add({ id: 2, value: 2, isVisible: true });
    linkedList2.add({ id: 3, value: 3, isVisible: true });
    linkedList2.add({ id: 4, value: 4, isVisible: true });
    linkedList2.delete({ id: 1, value: 1, isVisible: true });
    expect(linkedList2.head?.val.value).toBe(2);
    expect(linkedList2.head?.next?.val.value).toBe(3);
    expect(linkedList2.head?.next?.next?.val.value).toBe(4);
  });
});

describe('Search Add', () => {
  it('Search the linkedList', () => {
    const linkedList = new LinkedList<NodeType>();
    linkedList.add({ id: 1, value: 1, isVisible: true });
    linkedList.add({ id: 2, value: 2, isVisible: true });
    linkedList.add({ id: 3, value: 3, isVisible: true });
    linkedList.add({ id: 4, value: 4, isVisible: true });
    const index = linkedList.search({ id: 3, value: 3, isVisible: true });
    expect(index).toBe(3);
  });
});

describe('Display LinkedList', () => {
  it('Display the linkedList', () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    const display = linkedList.display();
    expect(display).toEqual([1, 2, 3, 4]);
  });
});
