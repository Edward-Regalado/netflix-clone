import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import './App.css';

function App() {

  const user = true;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          
        <Routes>
          <Route exact path='/'element={<HomeScreen />}/>
        </Routes>
          )}
      </Router>
    </div>
  );
}

export default App;
