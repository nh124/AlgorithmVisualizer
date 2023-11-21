import Navbar from './Components/Navbar/navbar_component/Navbar';
import DisplayPanel from './Components/DisplayPanel/DisplayPanel';
import NavBarMobile from './Components/Navbar/navbar_mobile_component/NavBarMobile';

function App() {
  return (
    <div className="w-full h-screen bg-white flex flex-col relative max-md:h-[90vh]">
      <Navbar />
      <DisplayPanel />
      <NavBarMobile />
    </div>
  );
}

export default App;
