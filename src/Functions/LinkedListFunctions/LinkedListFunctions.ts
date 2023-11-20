import { useSelector } from 'react-redux';
import LinkedList from '../../Algorithms/LinkedList';
import { NodeType } from '../../Algorithms/NodeType';
import ManageLinkedList from '../ManageLinkedList/ManageLinkedList';

interface LinkedListFunctionsReturnType {
  AddNode: (inputNode: string) => void;
  AddNodeOnIndex: (inputNode: string, index: string) => boolean;
  LinkedListDelete: (inputNode: string) => void;
  LinkedLisSearchNode: (inputNode: string) => number;
}

const LinkedListFunctions = (): LinkedListFunctionsReturnType => {
  const { getList, AlterList } = ManageLinkedList();
  const { listIndex } = useSelector((state: any) => state.LinkedListAddRed);
  const LinkedListInstance: LinkedList<NodeType> | undefined =
    getList(listIndex);
  if (LinkedListInstance === undefined) {
    return {
      AddNode: () => {},
      AddNodeOnIndex: () => false,
      LinkedListDelete: () => {},
      LinkedLisSearchNode: () => -1,
    };
  }

  const AddNode = (inputNode: string) => {
    if (LinkedListInstance.display().length <= 1100) {
      LinkedListInstance.add({
        id: LinkedListInstance.display().length - 1,
        value: parseInt(inputNode, 10),
        isVisible: true,
      });
      AlterList(LinkedListInstance, listIndex);
    } else {
      alert('Max limit reached');
    }
  };
  const AddNodeOnIndex = (inputNode: string, index: string): boolean => {
    if (LinkedListInstance.display().length > 1100) return false;

    LinkedListInstance.addOnIndex(
      {
        id: LinkedListInstance.display().length - 1,
        value: parseInt(inputNode, 10),
        isVisible: true,
      },
      parseInt(index, 10)
    );
    AlterList(LinkedListInstance, listIndex);

    return true;
  };

  const LinkedLisSearchNode = (inputNode: string): number => {
    const searchIndex = LinkedListInstance.search({
      id: null,
      value: parseInt(inputNode, 10),
      isVisible: true,
    });
    return searchIndex;
  };

  const LinkedListDelete = (inputNode: string): void => {
    const index = LinkedLisSearchNode(inputNode);
    LinkedListInstance.delete({
      id: index - 1,
      value: parseInt(inputNode, 10),
      isVisible: true,
    });
    AlterList(LinkedListInstance, listIndex);
  };

  return { AddNode, AddNodeOnIndex, LinkedListDelete, LinkedLisSearchNode };
};

export default LinkedListFunctions;
