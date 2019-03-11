import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar'
import Home from './Home'
import Random from './Random'
import NewBeer from './NewBeer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Iron Beers</h1>

        <NavBar />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/random' component={Random}/>
          <Route exact path='/new-beer' component={NewBeer}/>
        </Switch>


      </div>
    );
  }
}

export default App;
