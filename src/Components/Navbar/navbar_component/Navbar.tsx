/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import NavbarDesktop from '../navbar_desktop_component/NavbarDesktop';

function Navbar() {
  return (
    <div
      className="w-full flex flex-row justify-between pl-1 pr-4 py-2 bg-slate-200"
      data-testid="NavBar"
    >
      {/* left side */}
      <div className="flex flex-row justify-between items-center w-full h-[50px] ">
        <div
          className="text-black py-3 w-[180px] h-[50px] text-xl text-center font-bold flex flex-row justify-center items-center gap-2 max-md:hover:cursor-pointer"
          data-testid="LinkedList_Botton"
        >
          <div className="flex flex-col w-fit h-auto group">
            <h1>Linked List</h1>
            <div className="w-full h-[2px] bg-black group-hover:bg-blue-300 duration-300" />
          </div>
        </div>
        <NavbarDesktop />
      </div>
    </div>
  );
}

export default Navbar;

// 1ABC9C
