import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

import './App.css';
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route component={Home} />
      </Switch>

    </div>
  );
}

export default App;
