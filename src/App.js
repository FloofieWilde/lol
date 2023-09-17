import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Tracker from './pages/Tracker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/:user" element={<Tracker/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
