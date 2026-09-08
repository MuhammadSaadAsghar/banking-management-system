import React from "react";
import {
  MdAccountBalanceWallet,
  MdArrowDownward,
  MdArrowUpward,
  MdPeople,
} from "react-icons/md";


const Dashboardcard = () => {
const cards=[
    {
 
    id: 1,
    title: "Total Balance",
    amount: "PKR 125,430",
    icon: MdAccountBalanceWallet,
    iconBg: "bg-gradient-to-br from-[#4F46C8] to-[#6D4AFF]",
    change: "↑ 12.5%",
    description: "from last month",
    changeColor: "text-green-600",
  },

  {
    id: 2,
    title: "Total Deposits",
    amount: "PKR 85,000",
    icon: MdArrowDownward,
    iconBg: "bg-gradient-to-br from-[#22A06B] to-[#43C98A]",
    change: "↑ 8.2%",
    description: "from last month",
    changeColor: "text-green-600",
  },

  {
    id: 3,
    title: "Total Withdrawals",
    amount: "PKR 45,570",
    icon: MdArrowUpward,
    iconBg: "bg-gradient-to-br from-[#F43F5E] to-[#FF5277]",
    change: "↑ 4.6%",
    description: "from last month",
    changeColor: "text-green-600",
  },

  {
    id: 4,
    title: "Total Accounts",
    amount: "3",
    icon: MdPeople,
    iconBg: "bg-gradient-to-br from-[#2563EB] to-[#3B82F6]",
    change: "",
    description: "Active Accounts",
    changeColor: "text-gray-500",
  },
]

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
      
            {cards.map((ele )=>{
                const Icon=ele.icon;
                return   <div key={ele.id} className=" flex items-center gap-4  border border-gray-400 shadow rounded-xl p-4">
            <div  className= {`h-10 w-10 rounded-2xl ${ele.iconBg} flex items-center justify-center`}>
            <Icon className="text-2xl text-white" />
            </div>
            <div>
                <h3 className="text-sm font-medium">{ele.title}</h3>
                <h2 className="text-xl font-bold"> {ele.amount}</h2>
                <p className="flex items-center text-[12px] font-medium  text-green-700"><span>{ele.change}</span> <span className="text-gray-600  ml-0.5">{ele.description}</span></p>
            </div>
        </div>
            })}
      </section>
    </div>
  );
};

export default Dashboardcard;
