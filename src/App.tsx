import React from 'react';
import Navbar from './Components/Navbar/navbar_component/Navbar';
import DisplayPanel from './Components/DisplayPanel';
import LinkedList from './Algorithms/LinkedList';
import linkedListContext from './Contexts/linkedListContext';

function App() {
  // const linkedListStructure = new LinkedList();
  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <Navbar />
      <DisplayPanel />
    </div>
  );
}

export default App;
