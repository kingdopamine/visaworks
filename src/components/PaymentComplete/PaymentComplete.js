import React from 'react'

import './PaymentComplete.css'




class PaymentComplete extends React.Component {

    componentDidMount(){
        localStorage.clear()
    }
    

    render(){
        return(
            <div>
                <h1><a href="/">VISAWORKS.</a></h1>
                <h3>Thank you so much for your purchase. The payment has been made and the transaction has been completed.</h3>
                <h3>The receipt and payment transaction details will be emailed to you shortly...</h3>
                
            </div>

        )
    }
}

export default PaymentComplete