import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({setIsSidearopen}) => {
  return (
    <nav className=' h-20 flex shrink-0 items-center gap-6 px-6 bg-white   shadow-md '>
       <button className='lg:hidden text-2xl' onClick={()=>{
        setIsSidearopen(true)
       }}>
        
        <RxHamburgerMenu/>
       </button>
      
       <input className='border border-gray-400 rounded outline-none px-6 py-1  ' type="text" placeholder='search ...' />
       
    </nav>
  )
}

export default Navbar