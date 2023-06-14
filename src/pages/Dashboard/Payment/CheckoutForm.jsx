import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret,setClientSecret]=useState();
    const user=useAuth();

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>{
            setClientSecret(data.clientSecret)
        })
    },[price])
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }

        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }
        //////////
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
        } else {
          console.log('PaymentMethod', paymentMethod);
        }
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'annonymous',
                  
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError)
          }
      };
    
    return (
        <form className="my-6" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                  
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-outline btn-sm my-10" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
    );
};

export default CheckoutForm;