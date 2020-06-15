import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth'
import Landing from './Components/Landing'
import Cart from './Components/Cart'

export default (
<Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/auth' component={Auth}/>
    <Route path='/cart' component={Cart}/>
</Switch>
)