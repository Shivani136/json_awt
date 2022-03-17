import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

//import {BrowserRouter,Switch,Route} from "react-router-dom";
import Createworkorder from './Component/ Createworkorder';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Getwork from './Component/Getwork';
import DynamicTable from './Component/DynamicTable';
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
          <Route exact path="/createworkorder" element={Createworkorder} />
          </Routes>
          </div>
          </div>

  
  
     {/* <Login />      */}
       {/* <Createworkorder />  */}
       {/* <DynamicTable /> */}
      <Getwork /> 
  
    </div>
    </BrowserRouter> 
  );
}

export default App;
