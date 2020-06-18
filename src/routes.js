import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Landing from './Components/Landing/Landing'
import Cart from './Components/Cart/Cart'
import Account from './Components/Account/Account'
import Nike from './Components/DisplayPro/Nike'
import Adidas from './Components/DisplayPro/Adidas'
import UnderArmour from './Components/DisplayPro/UnderArmour'
import DisplayProduct from './Components/Product/DisplayProduct'

export default (
<Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/auth' component={Auth}/>
    <Route path='/cart' component={Cart}/>
    <Route path='/account' component={Account} />
    <Route path='/nike/:id' component={Nike} />
    <Route path='/adidas/:id' component={Adidas} />
    <Route path='/UA/:id' component={UnderArmour} />
    <Route path='/product/:id' component={DisplayProduct} />
</Switch>
)