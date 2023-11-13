import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { NodeType } from '../Algorithms/NodeType';

function DisplayPanel() {
  const { linkedlist } = useSelector((state: any) => state.LinkedListAddRed);
  return (
    <div className="w-full h-full bg-white">
      {linkedlist.map((Node: NodeType, index: number) => {
        return <h1 key={index}>{Node.value}</h1>;
      })}
    </div>
  );
}

export default DisplayPanel;
