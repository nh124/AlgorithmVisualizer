import { setLinkedList } from '../../Redux/LinkedListReducer';
import LinkedListInstance from '../CreateLinkedList/CreateLinkedList';

export const AddNode = (inputNode: string, dispatch: Function) => {
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

export const AddNodeOnIndex = (
  inputNode: string,
  index: string,
  dispatch: Function
) => {
  if (LinkedListInstance.display().length <= 1100) {
    console.log('Hit');
    LinkedListInstance.addOnIndex(
      {
        id: LinkedListInstance.display().length - 1,
        value: parseInt(inputNode, 10),
        isVisible: true,
      },
      parseInt(index, 10)
    );
    dispatch(setLinkedList(LinkedListInstance.display()));
  } else {
    alert('Max limit reached');
  }
};

// export default AddNode;
