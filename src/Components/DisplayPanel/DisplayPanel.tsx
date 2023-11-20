/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import { useSelector } from 'react-redux';
import { BsArrow90DegRight } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { NodeType } from '../../Algorithms/NodeType';
import NodeElement from '../NodeElement/NodeElement';
import LinkedList from '../../Algorithms/LinkedList';
import ButtonToForm from './ButtonToForm';
import ManageLinkedList from '../../Functions/ManageLinkedList/ManageLinkedList';

function DisplayPanel() {
  const { linkedlist } = useSelector((state: any) => state.LinkedListAddRed);
  const { deleteItemFromList } = ManageLinkedList();

  if (linkedlist.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center text-5xl text-slate-300">
        Sandbox
      </div>
    );
  }
  const deleteTask = (index: number) => {
    if (index < 0) return;
    deleteItemFromList(index);
  };
  return (
    <div className="w-full h-full bg-white flex justify-center py-4 overflow-auto">
      <div className="w-[90%] h-fit flex flex-col py-3 px-3 mt-[50px] gap-7">
        {linkedlist.map((list: LinkedList<NodeType>, index: number) => {
          return (
            <div className="flex flex-col gap-1">
              <div
                className="flex flex-row px-3 py-4 rounded-md bg-slate-200 h-fit overflow-auto relative pb-[50px]"
                key={index}
              >
                <button
                  className="absolute top-1 right-1 px-1 py-1 rounded-full bg-slate-300 hover:bg-slate-400 duration-300"
                  type="button"
                  onClick={() => deleteTask(index)}
                >
                  <IoClose size={12} />
                </button>
                {list.map((Node: NodeType) => {
                  return (
                    <h1 key={Node.id}>
                      <NodeElement NodeVal={Node.value} />
                    </h1>
                  );
                })}
                <div className="absolute bottom-[20px] left-[30px] -rotate-90">
                  <BsArrow90DegRight size={25} />
                </div>
              </div>
              <ButtonToForm index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayPanel;
