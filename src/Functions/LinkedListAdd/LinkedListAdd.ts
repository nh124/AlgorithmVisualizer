import { setLinkedList } from '../../Redux/LinkedListAddReducer';
import LinkedListInstance from '../CreateLinkedList/CreateLinkedList';

const AddNode = (inputNode: string, dispatch: Function) => {
  if (LinkedListInstance.display().length <= 1100) {
    LinkedListInstance.add({
      id: LinkedListInstance.display().length - 1,
      value: parseInt(inputNode, 10),
      isVisible: true,
    });
    dispatch(setLinkedList(LinkedListInstance.display()));
  } else {
    alert('Max limit reached');
  }
};

export default AddNode;
