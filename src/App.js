import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
//import {BrowserRouter,Switch,Route} from "react-router-dom";
import Register from './Component/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Navbar />
      
      <div className='auth-wrapper'>
        <div className='auth-inner'>
      {/* <Switch> */}
        <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/login" element={Login} />
          <Route exact path="/register" element={Register} />
          </Routes>
          </div>
          </div>

    {/* <Register /> */}
     <Login />     
         
    </div>
    </BrowserRouter> 
  );
}

export default App;
