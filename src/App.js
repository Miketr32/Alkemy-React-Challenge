import React from "react";
import {Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MenuDetail from './Components/MenuDetail/MenuDetail';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/login' element={<Login />}/>
        <Route path= '/detail/:id' element={<MenuDetail />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
