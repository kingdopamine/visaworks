import React, {useState, useRef, useEffect} from 'react';


import './Checkout.css'


function Checkout(props){
    
    const [loaded, setLoaded] = useState(false);
    const [paidFor, setPaidFor] = useState(false)
    

    let paypalRef = useRef();

    useEffect(()=>{
        const script = document.createElement("script");
        script.src = 'https://www.paypal.com/sdk/js?client-id=ASalCXjt7XRk6kU1sLZYmYC9Idt4H4L1yueczOMjXyYA5GNXw2z9Do6WcWr_g6UarsUSvyACKaxv6-Qr&currency=GBP';
        script.addEventListener('load', () => setLoaded(true));
        document.body.appendChild(script);

        if(loaded){
           setTimeout(()=>{
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: 'VISAWORKS.',
                                        amount: {
                                            currency_code: 'GBP',
                                            value: props.cart.price
                                        }
                                    }
                                ]
                            });
                        },
                        onApprove: async (data, actions) => {
                              
                            const order = await actions.order.capture();
                            setPaidFor(true)
                            

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
            <h1>Your Cart:</h1>
            <table id="checkoutTable">
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
             <tr>
                <th>{props.cart.name}</th>
                <th>{props.cart.quantity}</th>
                <th>£{props.cart.price}</th>
            </tr>    
            
            <tr id="lastRow">
                <th>Total:</th>
                <th>{props.cart.quantity}</th>
                <th>£{props.cart.price}</th>
            </tr>
            </table>
        </div>
        <div id="checkoutList">
        <h1>Your Cart:</h1>
        <table id="checkoutTable">
            <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
         <tr>
            <th>{props.cart.name}</th>
            <th>{props.cart.quantity}</th>
            <th>£{props.cart.price}</th>
        </tr>    
        
        <tr id="lastRow">
            <th>Total:</th>
            <th>{props.cart.quantity}</th>
            <th>£{props.cart.price}</th>
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