import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "../src/components/Home/Home";
import Policy from './components/Policy/Policy';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/policy' element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
