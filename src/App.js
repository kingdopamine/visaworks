import React from 'react';

import Homepage from './components/Homepage/Homepage'
import Checkout from './components/Checkout/Checkout'

import './App.css';

import {
  BrowserRouter as Router, 
  Route,  
} from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      cart:JSON.parse(localStorage.getItem('Cart test')) || {},
    }
  }

  update(){
    this.forceUpdate()
    console.log(JSON.parse(localStorage.getItem('Cart test')))
  }

  render(){
    return (
      <div className="App">
        <Router>
        {<Route exact path="/" render={()=> <Homepage update={this.update.bind(this)} />}/>}
        {<Route exact path="/checkout" render={()=> <Checkout cart={this.state.cart}/>}/>}
        </Router>
      </div>
    );
  }
  
}

export default App;
