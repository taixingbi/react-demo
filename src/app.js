import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hello from './simple/hello';
import Home from './home';


function App() {
  return (
        <Router>
            <Switch>
              <Route path="/simple/hello" component={Hello} />
              <Route path="/" component={Home} />

            </Switch>
        </Router>
  );
}

export default App;
