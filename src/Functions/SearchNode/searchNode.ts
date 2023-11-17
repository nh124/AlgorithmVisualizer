import LinkedListInstance from '../CreateLinkedList/CreateLinkedList';

const searchNode = (inputNode: string) => {
  const searchIndex = LinkedListInstance.search({
    id: null,
    value: parseInt(inputNode, 10),
    isVisible: true,
  });
  return searchIndex;
};

export default searchNode;
