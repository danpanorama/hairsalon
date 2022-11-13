import logo from './logo.svg';
import React,{useEffect} from 'react';
import './App.css';
import NavSwitch from './view/nav/NavSwitch'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "./store/Actions";
import Footer from './view/components/footer/Footer';

function App() {
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch({type:actionTypes.STILL})

  },[])

  return (
    <div className="App">
    <div> 
      <NavSwitch/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
