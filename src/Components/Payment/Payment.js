import React, {useState} from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import axios from 'axios'
import {toast} from 'react-toastify'
import './payment.css'

function Payment(props){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const confirmPayment = () => {
    const price = props.location.state
    if(email.length === 0){
      return toast.info('Email Required!')
    }
    axios.get(`/api/intent/?price=${price}&&email=${email}`)
    .then(async (res) => {
      // console.log(res.data)
      const result = await stripe.confirmCardPayment(res.data, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      if(result.error){
        toast.info(result.error.message)
        console.log(result.error)
        // console.log(result)
      } else {
        if(result.paymentIntent.status === 'succeeded'){
          toast.info('Your purchase was successful!')
        }
      }
      props.history.push({pathname: '/cart', state: props.location.pathname})
    }).catch(err => console.log(err))
  }

    return (
      <div className='payment-card'>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Customers Name' onChange={(e) => setName(e.target.value)} />
            <CardElement 
                className='card-element'
                options={{
                  hidePostalCode: true,
                  style: {
                    base: {
                      fontSize: '17px',
                      backgroundColor: 'white',
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
            <button className='payment-button' onClick={confirmPayment}>Purchase</button>
            <p className='test-card'>Test Card Number: 4242 4242 4242 4242</p>
      </div>
    )
}
export default Payment