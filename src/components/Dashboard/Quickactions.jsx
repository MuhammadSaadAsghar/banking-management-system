import React from 'react'
import {
  MdArrowDownward,
  MdArrowUpward,
  MdSwapHoriz,
  MdReceiptLong,
  MdAccountBalance,
  MdPerson,
} from "react-icons/md";
import { Link } from 'react-router-dom';

const quickAction = [
  {
    id: 1,
    title: "Deposit",
    description: "Add money to account",
    icon: MdArrowDownward,
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    path:"/deposit"
  },
  {
    id: 2,
    title: "Withdraw",
    description: "Withdraw money",
    icon: MdArrowUpward,
    iconBg: "bg-[#FEE2E2]",
    iconColor: "text-[#EF4444]",
    path:"/withdraw"
  },
  {
    id: 3,
    title: "Transfer",
    description: "Send money",
    icon: MdSwapHoriz,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
    path:"/transfer"
  },
  {
    id: 4,
    title: "Pay Bills",
    description: "Pay your bills",
    icon: MdReceiptLong,
    iconBg: "bg-[#FFEDD5]",
    iconColor: "text-[#F97316]",
      path:"/paybill"
  },
  {
    id: 5,
    title: "My Account",
    description: "View account details",
    icon: MdAccountBalance,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#16A34A]",
      path:"/myaccount"
  },
  {
    id: 6,
    title: "Transactions",
    description: "View all transactions",
    icon: MdReceiptLong,
    iconBg: "bg-[#FCE7F3]",
    iconColor: "text-[#DB2777]",
    path:"/transactions"
  },
];

const Quickactions = () => {
  return (
   <>

   <section className='border border-gray-200 bg-white  rounded-xl h-full '>
    <div className='p-3 font-bold'>
        <h2>Quick Actions</h2>
    </div>
    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-2 p-3 '> 
        {quickAction.map((item)=>{
            const Icon=item.icon;
             return <Link to={item.path} key={item.id}  > <div className='flex flex-col justify-center items-center border border-gray-200 p-4 text-center  rounded-xl  '>
      <div className={`text-center mb-1 h-7 w-7 flex justify-center items-center rounded-full ${item.iconBg } `}> <Icon className={`text-xl ${item.iconColor}`} /></div>
       <h2 className="font-semibold">{item.title}</h2>
       <p className='text-xs mt-1'>{item.description}</p>


         </div>
         </Link>
        })}
     
    </div>

   </section>
   </>
  )
}

export default Quickactions