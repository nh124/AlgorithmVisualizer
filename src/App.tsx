import Navbar from './Components/Navbar/navbar_component/Navbar';
import DisplayPanel from './Components/DisplayPanel/DisplayPanel';

function App() {
  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <Navbar />
      <DisplayPanel />
    </div>
  );
}

export default App;
