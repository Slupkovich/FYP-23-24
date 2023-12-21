import React from 'react';
import './App.css';
import NavBar from './components/NavBar'; // Adjust the path based on your project structure
import HeroSection from './components/HeroSection'; // Adjust the path based on your project structure

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
    
      {/* Rest of your components */}
    </div>
  );
}

export default App;