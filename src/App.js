import React from 'react';
import {withRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51GxfLDIvVVGRQ9wLZdeKLkEieEKliFGS6yGGwLt2b0jHmVzlbSruFeMbzTX6ABfoZb1u2bX4legnRHxhn08QDbYf00iUQC9LPn')

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Header />
        {routes}
        <ToastContainer autoClose={2100} />
      </div>
    </Elements>
  );
}

export default withRouter(App);
