import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ElectronicsPage from './Pages/ElectronicsPage';
import ToysPage from './Pages/ToysPage';


const App = () => (
    <Router>
    <div className="container">
      <Route exact path="/" component={MainPage} />
      <Route path="/Electronics" component={ElectronicsPage} />
      <Route path="/Toys" component={ToysPage} />
    </div>
  </Router>
)

export default App
