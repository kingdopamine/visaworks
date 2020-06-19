import React, {useState, useRef, useEffect} from 'react';


// sb-jb9hw2335207@personal.example.com
// Bkd0r@o-
// sandbox ATDRDEsQI5V6opLjhuMUDUMps5Zwh62DO8DBB1yO55YjYA9e6IWgmt9iRmnluQ6V1lj58g5yIrtWpvpV
// live ASalCXjt7XRk6kU1sLZYmYC9Idt4H4L1yueczOMjXyYA5GNXw2z9Do6WcWr_g6UarsUSvyACKaxv6-Qr

import './Checkout.css'



function Checkout(props){
    
    const [loaded, setLoaded] = useState(false);
    const [paidFor, setPaidFor] = useState(false);
    

    let paypalRef = useRef();

    useEffect(()=>{
        const script = document.createElement("script");
        script.src = 'https://www.paypal.com/sdk/js?client-id=ATDRDEsQI5V6opLjhuMUDUMps5Zwh62DO8DBB1yO55YjYA9e6IWgmt9iRmnluQ6V1lj58g5yIrtWpvpV&currency=GBP';
        script.addEventListener('load', () => setLoaded(true));
        document.body.appendChild(script);
        

        if(loaded){
            let total = props.subtotal + props.shipping
            console.log(total)
           setTimeout(()=>{
               
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            let arr = []
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description:'VISAWORKS',
                                        amount: {
                                            currency_code: 'GBP',
                                            value:total,
                                            breakdown:{
                                                item_total:{
                                                    currency_code: 'GBP',
                                                    value:props.subtotal,
                                                },
                                                shipping:{
                                                    currency_code: 'GBP',
                                                    value:props.shipping
                                                }
                                            },
                                            
                                        },
                                        items:props.cart.map((item)=>{
                                            arr.push(item.price*item.quantity)
                                            return {
                                                name:item.name,
                                                unit_amount:{
                                                    currency_code: 'GBP',
                                                    value:item.price,
                                                },
                                                quantity:item.quantity
                                            }
                                        })
                                        
                                        
                                        
                                    }
                                ]
                            });
                        },
                        onApprove: async (data, actions) => {
                              
                            const order = await actions.order.capture();
                            setPaidFor(true)
                            localStorage.clear()

                            console.log(order);
                        }
                    })
                    .render(paypalRef);
            });
        }

    });

   

    


return(
    <div> 
        <h1><a href="/">VISAWORKS.</a></h1>
        

        {paidFor? (
            <div>
                <h3>Thank you so much for your purchase. The payment has been made and the transaction has been completed.</h3>
                <h3>The receipt and payment transaction details will be emailed to you shortly...</h3>
            </div>
        ): (
            <div>
            <div id="checkoutList">
            <h2>Your Cart:</h2>
            <table id="checkoutTable">
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {
                    props.cart.map((item)=>{
                        return (
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.quantity}</th>
                                <th>£{item.price}</th>
                            </tr> 
                        )
                    })
                }
                

            <tr id="lastRow">
                <th>Shipping:</th>
                <th></th>
                <th>£{props.shipping}.00</th>
            </tr>
            
            <tr id="lastRow">
                <th>Total:</th>
                <th>{props.cart.quantity}</th>
                <th>£{props.subtotal + props.shipping}.00</th>
            </tr>
            </table>
        </div>
        
        
        

        
    
        <div id="checkoutButton" ref={v => (paypalRef = v)}/>

        
        </div>
        
        )}
    </div>
)

}


export default Checkout