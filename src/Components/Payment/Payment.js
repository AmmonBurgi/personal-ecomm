import React, {useEffect} from 'react'
import {CardElement} from '@stripe/react-stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`)

function Payment(props){

  useEffect(() => {
    const price = props.location.state
    console.log(price)
    axios.get(`/api/payment_intent/${price}`)
    .then(res => )
  }, [])

    return (
        <Elements stripe={stripePromise}>
            <div style={{backgroundColor: 'white'}}>
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
            </div>
            </Elements>
    )
}
export default Payment