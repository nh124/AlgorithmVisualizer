import { setLinkedList } from '../Redux/LinkedListAddReducer';
import LinkedList from '../Algorithms/LinkedList';
import { NodeType } from '../Algorithms/NodeType';

const lList: LinkedList<NodeType> = new LinkedList();
const AddNode = (inputNode: string, dispatch: Function) => {
  if (lList.display().length <= 1100) {
    lList.add({
      id: lList.display().length - 1,
      value: parseInt(inputNode, 10),
      isVisible: true,
    });
    dispatch(setLinkedList(lList.display()));
  } else {
    alert('Max limit reached');
  }
};

export default AddNode;
