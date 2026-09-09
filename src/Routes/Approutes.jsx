import React from 'react'

import Layout from '../components/layout/Layout'
import Dashboard from '../pages/Dashboard'
import { Routes,Route } from 'react-router-dom'
import MyAccount from '../pages/MyAccount'
import Deposit from '../pages/Deposit'
import Withdraw from '../pages/Withdraw'
import Transfer from '../pages/Transfer'
import Transactions from '../pages/Transactions'
import Profile from '../pages/Profile'
import Setting from '../pages/Setting'
import Paybill from '../pages/Paybill'

const Approutes = () => {
  return (
    <div>
        <Routes>
                
    <Route  element={<Layout/>} >
    <Route path='/' element={<Dashboard/>} />
    <Route path='/myaccount' element={<MyAccount/>} />
    <Route path='/deposit' element={<Deposit/>} />
    <Route path='/withdraw' element={<Withdraw/>} />
    <Route path='/transfer' element={<Transfer/> }/>
    <Route path='/paybill' element={<Paybill/> }/>
    <Route path='/transactions' element={<Transactions/> }/>
    <Route path='/profile' element={<Profile/> }/>
    <Route path='/settings' element={<Setting/> }/>
  </Route>
   </Routes>
    </div>
  )
}

export default Approutes