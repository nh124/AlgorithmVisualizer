import { setLinkedList } from '../../Redux/LinkedListReducer';
import LinkedListInstance from '../CreateLinkedList/CreateLinkedList';
import searchNode from '../SearchNode/searchNode';

const LinkedListDelete = (inputNode: string, dispatch: Function) => {
  const index = searchNode(inputNode);
  const deleteTask = LinkedListInstance.delete({
    id: index - 1,
    value: parseInt(inputNode, 10),
    isVisible: true,
  });
  if (deleteTask) dispatch(setLinkedList(LinkedListInstance.display()));
};

export default LinkedListDelete;
