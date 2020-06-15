import React from 'react';
import {withRouter} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default withRouter(App);
