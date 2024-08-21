import './App.css';
import React from "react";
import Login from './components/Login/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatRoom from './components/ChatRoom/Index';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ChatRoom />} />  
  
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
