import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth'
import Landing from './Components/Landing'
import Cart from './Components/Cart'
import Account from './Components/Account'

export default (
<Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/auth' component={Auth}/>
    <Route path='/cart' component={Cart}/>
    <Route path='/account' component={Account} />
</Switch>
)