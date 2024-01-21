// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './components/page/Home';
import About from './components/page/About';
import Login from './components/page/Login';
import Signup from './components/page/Signup';

function App(){
  return (
    <>
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/about" element={ <About/> }></Route>
      <Route path="/login" element={ <Login/> }></Route>
      <Route path="/signup" element={ <Signup/> }></Route>
    </Routes>
    </>
  );
}

export default App;
