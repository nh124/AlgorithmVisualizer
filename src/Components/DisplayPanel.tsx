import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';

function DisplayPanel() {
  const { linkedlist } = useSelector((state: any) => state.LinkedListAddRed);
  return (
    <div className="w-full h-full bg-white">
      {linkedlist.map((Node, index) => {
        return <h1>{Node}</h1>;
      })}
    </div>
  );
}

export default DisplayPanel;
