import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Landing from './Components/Landing/Landing'
import Cart from './Components/Cart/Cart'
import Account from './Components/Account/Account'

export default (
<Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/auth' component={Auth}/>
    <Route path='/cart' component={Cart}/>
    <Route path='/account' component={Account} />
</Switch>
)