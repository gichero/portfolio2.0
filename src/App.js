import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {About} from './components/About/About';
import {Contact} from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
