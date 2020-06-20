import React from 'react'

import './ShippingZone.css'

import shippingZone from './airmail_world_zones.gif'

class ShippingZone extends React.Component{
    constructor(props){
        super(props)
        this.shippingCost=this.shippingCost.bind(this)
        this.subtotal=this.subtotal.bind(this)
    }

    componentDidMount(){
        this.props.shipping(5)
        this.subtotal()
    }

    shippingCost(event){
        if(event.target.value==='UK'){
            this.props.shipping(5)
        } else if(event.target.value==='Europe'){
            this.props.shipping(14)
        } else if(event.target.value==='World Zone 1'){
            this.props.shipping(19)
        } else {
            this.props.shipping(20)
        };
    }

    subtotal(){
        if(this.props.cart.length > 1){
            localStorage.setItem('Subtotal', JSON.stringify(this.props.cart.reduce((a,b)=>((a.price * a.quantity) + (b.price * b.quantity)))))
            
        } else {
            localStorage.setItem('Subtotal', JSON.stringify(this.props.cart[0].price * this.props.cart[0].quantity))
        }
        
        
        
    }

    render(){

        return(
        <div>
            <h1><a href="/">VISAWORKS.</a></h1>
            <div id="shippingSection">
                <p>UK: Royal Mail First Class Signed For Delivery</p>
                <p>International: Royal Mail International Tracked & Signed</p>
                <img src={shippingZone} id="shippingZones"/><br/>

                <label for="shippingZoneSelect">Select shipping destination:</label>

                <select name="shippingZoneSelect" id="shippingZoneSelect" onChange={(event)=>{
                    this.shippingCost(event)
                }}>
                    <option value="UK">UK</option>
                    <option value="Europe">Europe</option>
                    <option value="World Zone 1">World Zone 1</option>
                    <option value="World Zone 2">World Zone 2</option>
                </select>
                <h2 id="next"><a href="/checkout">NEXT</a></h2>
            </div>
        </div>
        )
    }
}

export default ShippingZone