import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/main.css';
import Aboutme from  './pages/Aboutme';
import Projects from './pages/Projects';
import Contactme from './pages/Contactme';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Aboutme} />
          <Route path='/projects' exact component= {Projects} />
          <Route path='/contact' exact component= {Contactme} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
