import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

type StripeCheckoutButtonProps = {
    price:number;
}
const StripeCheckoutButton:React.FC<StripeCheckoutButtonProps> = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_yV9AZvGkMZiBsZqW6mvaEu3v00NYW5Z6Et';

    interface IToken extends Object {
        id:string;
    }
    const onToken = (token:IToken) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            alert('There was an issue with your payment. Please be sure you use the provided credit card.');
        });
    }

    return (
        <StripeCheckout 
            label="Pay Now" 
            name="CRWN Clothing Ltd." 
            billingAddress 
            shippingAddress 
            image='http://svgshare.com/i/CUz.svg' 
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabel="Pay Now" 
            token={onToken} 
            stripeKey={publishableKey}
            ComponentClass="stripe"
        />
    )
};

export default StripeCheckoutButton;