import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Basket from './pages/Basket';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-between'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>
      <Footer/>
    </div>  
  );
};

export default App;
