import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ElectronicsPage from './Pages/ElectronicsPage';

const App = () => (
    <Router>
    <div className="container">
      <Route exact path="/" component={MainPage} />
      <Route path="/Electronics" component={ElectronicsPage} />
    </div>
  </Router>
)

export default App
