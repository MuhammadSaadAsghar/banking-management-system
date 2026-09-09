import React from 'react'


import Dashboardcard from '../components/Dashboard/Dashboardcard';
import RecentTransaction from '../components/Dashboard/RecentTransaction';
import Quickactions from '../components/Dashboard/Quickactions';
import BalanceOverview from '../components/Dashboard/BalanceOverview';

const Dashboard = () => {
  return (
   <>    
   <div>
    <section>
      <h1 className='text-2xl font-bold'>Welcome back, Muhammad Saad Asghar &#128075;</h1>
      <p className='text-gray-500 text-md'>Here's what's happening with your account today</p>
    </section>
  <Dashboardcard/>
  <div className='grid grid-cols-1 lg:grid-cols-5 gap-3 items-stretch'>
    <div className='lg:col-span-3 grid-cols-1'>
  <RecentTransaction/>
  </div>
  <div className='lg:col-span-2 grid-cols-1 h-full'>
  <Quickactions/>
  </div>
  </div>
  <BalanceOverview/>
   </div>
  </>

  )
}

export default Dashboard