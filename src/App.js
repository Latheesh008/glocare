import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Accerditation from './Pages/Accerditation';
import Facilities from './Pages/Facilities';
import Main from './Pages/Main';

function App() {
  return (
    <Router>
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/facilities' element={<Facilities/>}/>
        <Route exact path='/accerditation' element={<Accerditation/>} />
      </Routes>
    </Fragment>
  </Router>
  );
}

export default App;
