import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/login.component';

function App() {
  return (
      <div className="container mx-auto px-4 py-4 justify-center flex h-screen items-center">
        <LoginComponent></LoginComponent>
      </div>
  );
}

export default App;
