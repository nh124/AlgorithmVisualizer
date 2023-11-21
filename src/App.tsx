import { useSelector } from 'react-redux';
import Navbar from './Components/Navbar/navbar_component/Navbar';
import DisplayPanel from './Components/DisplayPanel/DisplayPanel';
import NavBarMobile from './Components/Navbar/navbar_mobile_component/NavBarMobile';

function App() {
  const { showMobileMenu } = useSelector((state: any) => state.NavbarRed);
  return (
    <div className="w-full h-screen bg-white flex flex-col relative max-md:h-[80vh]">
      <Navbar />
      <DisplayPanel />
      <NavBarMobile showMobileMenu={showMobileMenu} />
    </div>
  );
}

export default App;
