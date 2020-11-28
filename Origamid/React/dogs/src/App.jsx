import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles/base.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/login/*" exact element={<Login />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
