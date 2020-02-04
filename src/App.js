import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './containers/Home/Home';
import {About} from './containers/About/About';
import {Contact} from './containers/Contact/Contact';
import {Projects} from './containers/Projects/Projects';
import {Layout} from './components/Layout/Layout';
import {NavigationBar} from './components/NavigationBar/NavigationBar.js';
import {Jumbotron} from './components/Jumbotron/Jumbotron';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </Router>
      </Layout>
      
    </React.Fragment>
  );
}

export default App;
