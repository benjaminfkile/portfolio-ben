import React from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios';
import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import './App.css';


function App() {

  axios({
    method: "POST",
    url: "https://glacial-plains-54815.herokuapp.com/send",
    data: {
      name: "**PORTFOLIO ALARM**",
      email: "benjaminfkile@gmail.com",
      message: "portfolio visit!!!"
    }
  }).then((response) => {
    if (response.data.msg === 'success') {
    } else if (response.data.msg === 'fail') {
    }
  })


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
