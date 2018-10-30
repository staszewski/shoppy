import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ElectronicsPage from './Pages/ElectronicsPage';
import ToysPage from './Pages/ToysPage';
import CarsPage from './Pages/CarsPage';
import PropertyPage from './Pages/PropertyPage';
import ItemInfo from './Pages/ItemInfo';



const App = () => (
    <Router>
      <div className="container">
        <Route exact path="/" component={MainPage} />
        <Route path="/item/:id" component={ItemInfo} />
        <Route path="/Electronics" component={ElectronicsPage} />
        <Route path="/Toys" component={ToysPage} />
        <Route path="/Cars" component={CarsPage} />
        <Route path="/Property" component={PropertyPage} />
      </div>
    </Router>
)

export default App
