import logo from './logo.svg';
// import './App.css';
import dataP from './data.json'
import UserRegister from './pages/UserRegister';
import LayoutRouts from './LayoutRouts.js/LayoutRouts';
function App() {
  const data = dataP.private_dinner;
  return (
    <div className="App">
      <LayoutRouts></LayoutRouts>
    </div>
  );
}

export default App;
