import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/pages/home';
import ReposPage from './components/pages/repos';

const Routes = () => (
  
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route exact path="/:username/repos" component={ReposPage} /> 
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;