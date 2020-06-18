import React from 'react'

import './Homepage.css'

import nikeCap from '../../media/NikeCap/visaworks-x-nike-heritage-86-nike-cap.gif'
import nikeCap1 from '../../media/NikeCap/visaworks-x-nike-heritage-86-nike-cap-1.jpg'
import nikeCap2 from '../../media/NikeCap/visaworks-x-nike-heritage-86-nike-cap-2.jpg'
import nikeCap3 from '../../media/NikeCap/visaworks-x-nike-heritage-86-nike-cap-3.jpg'
import nikeCap4 from '../../media/NikeCap/visaworks-x-nike-heritage-86-nike-cap-4.jpg'


class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            nikeCap:[
                nikeCap,
                //nikeCap1,
                nikeCap4,
                //nikeCap3,
                //nikeCap2
            ],
            nikeCapCounter:0
        }
    }

    render(){
        return(
            <div>
                <h1><a href="/">VISAWORKS.</a></h1>
                <div className="productContatiner">

                </div>
                <div className="imgContainer">
                <img id="nikeCap" src={this.state.nikeCap[this.state.nikeCapCounter]}/>
                </div>
                <div id="alignMass">
                    <h3>IRIDESCENT NIKE CAP</h3>
                    <h3>£188.00</h3>
                    <div className="iconContainer">
                    {this.state.nikeCap.map((img, index)=>{
                        return (
                        <div id="icon">
                            <img 
                            src={img} 
                            alt="visaworks x nike heritage 86 cap navy embelished with iridescent violet blue swarovski crystals"
                            onClick={()=>{
                                this.setState({nikeCapCounter:index})
                            }
                            }/>
                        </div>
                        )
                    })}
                    </div>
                    <div className="productDescription">
                        <h2 className="about">ABOUT</h2><h2 className="addToCart" onClick={localStorage.setItem('Cart test', JSON.stringify({name:'Iridescent Nike Cap',quantity:1,price:188.00}))}>ADD TO CART</h2><a href="/checkout"><h2 className="checkout">CHECKOUT</h2></a>
                        <p>This navy blue heritage 86 Nike Cap has been meticulously hand-set and decorated with over 650 iridescent viloet-blue base Swarovski crystals. Even more beautiful in person, this uniquely customised luxury streetwear piece is one of a kind. Labeled as 'one size fits most', only one of this cap has been made.</p>
                    </div>
                    <div id="comingSoon">
                        <h2>MORE PIECES, AND ART WORK COMING SOON...</h2>
                        <h2><a href="https://instagram.com/visa.works" target="blank"><i class="fab fa-instagram"></i></a></h2>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default Homepage