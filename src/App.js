import React from "react";
import "./style.css";
import {Header} from "./containers/Header"
import {BrowserRouter as Route, Switch, Router} from "react-router-dom"
import {ProductListing} from './containers/ProductListing'
import {ProductDetail} from './containers/ProductDetail'
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route> 404 Not Found </Route>
        </Switch>
      </Router>
    </div>
  );
}
