import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'



const Layout = () => {
const [isSidebaropen, setIsSidearopen] = useState(false)
  return (
    <div className='flex h-screen overflow-hidden'>
        <Sidebar isSidebaropen={isSidebaropen} setIsSidearopen={setIsSidearopen}/>
        <div className='flex-1 flex flex-col overflow-hidden'>
            <Navbar setIsSidearopen={setIsSidearopen}/>

            <main className='p-6 flex-1 overflow-y-auto'>
               <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default Layout