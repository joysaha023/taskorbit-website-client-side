import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
      axios.post('https://taskorbit-website-server-side.vercel.app/create-payment-intent')
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment error', error)
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod)
            setError('');
        }
    }

    return (
        <form className='px-6' onSubmit={handleSubmit}>
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
      <button className='btn btn-primary my-6' type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className='text-red-600'>{error}</p>
        </form>
    );
};

export default CheckoutForm;