import React from 'react';
import { useSelector } from 'react-redux';
import { NodeType } from '../Algorithms/NodeType';
import NodeElement from './NodeElement/NodeElement';
import { BsArrow90DegRight } from 'react-icons/bs';

function DisplayPanel() {
  const { linkedlist } = useSelector((state: any) => state.LinkedListAddRed);
  if (linkedlist.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center text-5xl text-slate-300">
        Sandbox
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-white flex justify-center py-4">
      <div className="w-[90%] h-fit flex flex-col py-3 px-3 mt-[50px] gap-3">
        <div className="flex flex-row px-3 py-4 rounded-md bg-slate-200 h-fit overflow-auto relative pb-[50px]">
          {linkedlist.map((Node: NodeType) => {
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
      </div>
    </div>
  );
}

export default DisplayPanel;
