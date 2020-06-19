import React from 'react';

import Homepage from './components/Homepage/Homepage'
import Checkout from './components/Checkout/Checkout'
import ShippingZone from './components/ShippingZone/ShippingZone'

import './App.css';

import {
  BrowserRouter as Router, 
  Route,  
} from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      cart:JSON.parse(localStorage.getItem('Cart')) || [0],
      shipping:JSON.parse(localStorage.getItem('Shipping')) || '5.00',
      subtotal:JSON.parse(localStorage.getItem('Subtotal')) || 0
    }
  }


  shipping(shipping){
    localStorage.setItem('Shipping', JSON.stringify(shipping))
    this.forceUpdate()
  }

  render(){
    return (
      <div className="App">
        <Router>
        {<Route exact path="/" render={()=> <Homepage />}/>}
        {<Route exact path="/shipping-zone" render={()=> <ShippingZone shipping={this.shipping.bind(this)} cart={this.state.cart}/>}/>}
        {<Route exact path="/checkout" render={()=> <Checkout cart={this.state.cart} shipping={this.state.shipping} subtotal={this.state.subtotal}/>}/>}
        </Router>
      </div>
    );
  }
  
}

export default App;
