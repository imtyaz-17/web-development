import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import MarksChart from './components/MarksChart/MarksChart';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <MarksChart></MarksChart>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
