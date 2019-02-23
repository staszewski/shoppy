import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import MainPage from "./Pages/MainPage";
import CategoriesPage from "./Pages/CategoriesPage";
import ItemInfo from "./Pages/ItemInfo";
import SearchPage from "./Pages/SearchPage";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="container">
        <Route exact path="/" component={MainPage} />
        <Route path="/itemsearch/:search" component={SearchPage} />
        <Route path="/item/:id" component={ItemInfo} />
        <Route path="/categories/:category" component={CategoriesPage} />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
