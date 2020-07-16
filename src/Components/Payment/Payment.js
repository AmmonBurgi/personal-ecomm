import React, {useEffect, useState} from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import axios from 'axios'
import {toast} from 'react-toastify'

// const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`)

function Payment(props){
  const stripe = useStripe()
  const elements = useElements()
  // const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // const price = props.location.state
    // console.log(price)
    // axios.get(`/api/intent/?price=${price}`)
    // .then(res => {
    //   console.log(res.data)
    //   setClientSecret(res.data)
    // })
  }, [])

  const confirmPayment = () => {
    // console.log(clientSecret, 'clientSecreteeee')
    const price = props.location.state
    console.log(price)
    axios.get(`/api/intent/?price=${price}`)
    .then(async (res) => {
      console.log(res.data)
      const result = await stripe.confirmCardPayment(res.data, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      if(result.error){
        toast.info(result.error.message)
        console.log(result.error)
        console.log(result)
      } else {
        if(result.paymentIntent.status === 'succeeded'){
          toast.info('Your purchase was successful!')
        }
      }
      
      // setClientSecret(res.data)
    }).catch(err => console.log(err))
  }

    return (
      <div style={{backgroundColor: 'white', marginTop: '200px'}}>
          {/* <Elements stripe={stripePromise}> */}
            <CardElement />
            <button onClick={confirmPayment}>Purchase</button>
            {/* </Elements> */}
            </div>
    )
}
export default Payment