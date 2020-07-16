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
import AddProduct from './Components/AddProduct/AddProduct'
import SearchedPro from './Components/SearchedPro/SearchedPro'
import SelectEdit from './Components/SelectEdit/SelectEdit'
import EditPro from './Components/EditPro/EditPro'
import Payment from './Components/Payment/Payment'
// import {LastLocationProvider} from 'react-router-last-location'

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
    <Route path='/add-product' component={AddProduct} />
    <Route path='/search' component={SearchedPro} />
    <Route path='/select-edit' component={SelectEdit} />
    <Route path='/edit/:id' component={EditPro} />
    <Route path='/checkout' component={Payment} />
</Switch>
)