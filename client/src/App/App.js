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
import SearchPage from './Pages/SearchPage';



const App = () => (
    <Router>
      <div className="container">
        <Route exact path="/" component={MainPage} />
        <Route path="/itemsearch/:search" component={SearchPage} />
        <Route path="/item/:id" component={ItemInfo} />
        <Route path="/categories/Electronics" component={ElectronicsPage} />
        <Route path="/categories/Toys" component={ToysPage} />
        <Route path="/categories/Cars" component={CarsPage} />
        <Route path="/categories/Property" component={PropertyPage} />
      </div>
    </Router>
)

export default App
