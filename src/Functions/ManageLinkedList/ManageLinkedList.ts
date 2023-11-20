/* eslint-disable no-restricted-syntax */
import { useDispatch } from 'react-redux';
import LinkedList from '../../Algorithms/LinkedList';
import LinkedListList from '../../Algorithms/LinkedListList';
import { NodeType } from '../../Algorithms/NodeType';
import { setLinkedList } from '../../Redux/LinkedListReducer';

const LinkedListManager = new LinkedListList();
const ManageLinkedList = () => {
  const dispatch = useDispatch();

  const crreateSerializeList = () => {
    const allLists = LinkedListManager.getAllLists();
    const serializeList = [] as NodeType[][];

    for (const list of allLists) {
      const listDisplay = list.display() as NodeType[];
      serializeList.push(listDisplay);
    }
    return serializeList;
  };

  const getList = (index: number) => {
    return LinkedListManager.getList(index);
  };

  const createList = (): boolean => {
    const linkedlist = new LinkedList<NodeType>();
    LinkedListManager.addList(linkedlist);
    const serializeList = crreateSerializeList();
    dispatch(setLinkedList(serializeList));
    return true;
  };
  const clearList = (): boolean => {
    LinkedListManager.clearList();
    dispatch(setLinkedList([]));
    return true;
  };
  const deleteItemFromList = (index: number): boolean => {
    if (index < 0) return false;
    LinkedListManager.delete(index);
    const serializeList = crreateSerializeList();
    dispatch(setLinkedList(serializeList));
    return true;
  };

  const AlterList = (
    linkedlist: LinkedList<NodeType>,
    index: number
  ): boolean => {
    if (!linkedlist) return false;
    LinkedListManager.alterIndex(linkedlist, index);
    const serializeList = crreateSerializeList();
    dispatch(setLinkedList(serializeList));
    return true;
  };
  return { createList, getList, AlterList, clearList, deleteItemFromList };
};

export default ManageLinkedList;
