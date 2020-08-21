import React from 'react';
import Header from "./components/Header";
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
   
      <div className="App">
         <Header />
         <About />
         <Resume/>
         <Portfolio/>
         <Contact/>
      </div>
    
  );
}

export default App;
