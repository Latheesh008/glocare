import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Accerditation from './Pages/Accerditation';
import Facilities from './Pages/Facilities';
import Main from './Pages/Main';
import Services from './Pages/Services';
import Contact from './Pages/ContactUs';

function App() {
  return (
    <Router>
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/facilities' element={<Facilities/>}/>
        <Route exact path='/accerditation' element={<Accerditation/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/contact' element={<Contact/>} />


      </Routes>
    </Fragment>
  </Router>
  );
}

export default App;
