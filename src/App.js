import React from 'react';
import {withRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <ToastContainer autoClose={2100} />
    </div>
  );
}

export default withRouter(App);
