import React from "react";
import { Link } from "react-router-dom";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdSwapHoriz,
  MdReceiptLong,
} from "react-icons/md";

const RecentTransaction = () => {
  const recentTransactions = [
    {
      id: 1,
      date: "17 May 2024, 10:30 AM",
      type: "Deposit",
      icon: MdArrowDownward,
      account: "Savings Account",
      amount: "+ PKR 10,000",
      status: "Completed",
      amountColor: "text-green-500",
      iconColor: "text-purple-600",
    },

    {
      id: 2,
      date: "17 May 2024, 09:15 AM",
      type: "Withdraw",
      icon: MdArrowUpward,
      account: "Current Account",
      amount: "- PKR 2,000",
      status: "Completed",
      amountColor: "text-red-500",
      iconColor: "text-red-500",
    },

    {
      id: 3,
      date: "16 May 2024, 06:45 PM",
      type: "Transfer",
      icon: MdSwapHoriz,
      account: "Savings → Ali",
      amount: "- PKR 5,000",
      status: "Completed",
      amountColor: "text-red-500",
      iconColor: "text-blue-500",
    },

    {
      id: 4,
      date: "16 May 2024, 11:20 AM",
      type: "Deposit",
      icon: MdArrowDownward,
      account: "Savings Account",
      amount: "+ PKR 20,000",
      status: "Completed",
      amountColor: "text-green-500",
      iconColor: "text-purple-600",
    },

    {
      id: 5,
      date: "15 May 2024, 08:00 PM",
      type: "Bills",
      icon: MdReceiptLong,
      account: "Current Account",
      amount: "- PKR 3,250",
      status: "Completed",
      amountColor: "text-red-500",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <>
   
      <section className="border border-gray-300 py-4 rounded-xl bg-white">
        <header className="flex justify-between text-2xl px-2 font-semibold ">
          <h2>Recent Transactions</h2>
          <Link className="text-[#0D6EFD] cursor-pointer" to="/transactions">
            View All
          </Link>
        </header>
        <div className="overflow-x-auto">

          <table className="w-full mt-4">
            <thead className="border-b border-t bg-gray-200  border-gray-200">
              <tr >
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">
                  Date
                </th>
                <th className="text-left py-5 px-3 text-xs font-medium text-gray-500">
                  Type
                </th>
                <th className="text-left py-5 px-3 text-xs font-medium text-gray-500">
                  Account
                </th>
                <th className="text-left py-5 px-3 text-xs font-medium text-gray-500">
                  Amount
                </th>
                <th className="text-left py-5 px-3 text-xs font-medium text-gray-500">
                  Status
                </th>
              </tr>
              </thead>
              <tbody className="border-b px-4 border-gray-200">
        {recentTransactions.map((ele) => {
            const Icon = ele.icon;
          return  <tr key={ele.id} className="border-b   border-gray-100">
                <td className="px-3 py-2 text-sm text-gray-700">
                 {ele.date}
                </td>
                <td className={` py-2 px-2 text-sm text-gray-700 `}> <div className="flex items-center gap-2"> <span className={`${ele.iconColor}`} ><Icon/></span>{ele.type}</div></td>
                <td className=" py-2 px-2 text-sm text-gray-700 ">
                 {ele.account}
                </td>
                <td className={`py-2 px-2 text-sm text-gray-700 ${ele.amountColor}`}>
                  {ele.amount}
                </td>
                                  <td className="px-3 py-2">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      {ele.status}
                    </span>
                  </td>
              </tr>
           
          })}
          </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default RecentTransaction;
