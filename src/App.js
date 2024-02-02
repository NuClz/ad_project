import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import Home from './components/mainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> // 根路径指向登录界面
        <Route path="/home" element={<Home />} /> // “/home”路径指向应用的主布局
      </Routes>
    </Router>
  );
};

export default App;
