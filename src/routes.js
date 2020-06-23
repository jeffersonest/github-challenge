import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/pages/home';

const Routes = () => (
  
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;