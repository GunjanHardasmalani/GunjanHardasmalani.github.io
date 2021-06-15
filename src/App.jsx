import React from 'react';
import Header from "./components/Header";
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
   
      <div className="App">
         <Header />
         <About />
         <Resume/>
         <Education/>
         <Portfolio/>
         <Contact/>
      </div>
    
  );
}

export default App;
