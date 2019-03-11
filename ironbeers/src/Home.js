import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class Home extends Component {

  state={
    beers:[]
  }

  componentDidMount(){
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
      .then(res=>{
        this.setState({beers:res.data})
      })

  }

  showAllTheBeers = () => {
    const listOfBeers = this.state.beers.map((eachBeerInState, i) => {
      return <li key={i}>{eachBeerInState.name}</li>
    })
    return listOfBeers;
  }

  render() {
    return (
      <div>
        {this.showAllTheBeers()}
      </div>
    );
  }
}

export default Home;
