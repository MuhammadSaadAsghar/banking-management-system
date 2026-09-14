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
     <section className="border border-gray-300 py-4 rounded-xl bg-white lg:min-h-100">
       <header className="flex flex-col gap-2 px-3 sm:flex-row sm:items-center sm:justify-between">
  <h2 className="text-xl font-semibold sm:text-2xl">
    Recent Transactions
  </h2>

  <Link
    className="cursor-pointer text-sm text-[#0D6EFD] sm:text-base"
    to="/transactions"
  >
    View All
  </Link>
</header>
        <div className=" ">
          <table className="w-full mt-4 text-xs sm:text-sm">
           <thead className="border-y border-gray-200 bg-gray-200">
  <tr>
    <th className="px-2 py-2 text-left text-[10px] font-medium text-gray-500 sm:px-5 sm:py-3 sm:text-xs lg:py-5">
      Date
    </th>

    <th className="px-2 py-2 text-left text-[10px] font-medium text-gray-500 sm:px-5 sm:py-3 sm:text-xs lg:py-5">
      Type
    </th>

    <th className="px-2 py-2 text-left text-[10px] font-medium text-gray-500 sm:px-5 sm:py-3 sm:text-xs lg:py-5">
      Account
    </th>

    <th className="px-2 py-2 text-left text-[10px] font-medium text-gray-500 sm:px-5 sm:py-3 sm:text-xs lg:py-5">
      Amount
    </th>

    <th className="px-2 py-2 text-left text-[10px] font-medium text-gray-500 sm:px-5 sm:py-3 sm:text-xs lg:py-5">
      Status
    </th>
  </tr>
</thead>
           <tbody className="lg:h-full">
  {recentTransactions.map((ele) => {
    const Icon = ele.icon;

    return (
      <tr
        key={ele.id}
        className="border-b border-gray-100 lg:h-16"
      >

        {/* Date */}
        <td className="px-2 py-2 text-[10px] text-gray-700 sm:px-3 sm:text-sm lg:py-4">
          {ele.date}
        </td>

        {/* Type */}
        <td className="px-2 py-2 text-[10px] text-gray-700 sm:px-2 sm:text-sm lg:py-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className={ele.iconColor}>
              <Icon />
            </span>
            {ele.type}
          </div>
        </td>

        {/* Account */}
        <td className="px-2 py-2 text-[10px] text-gray-700 sm:px-2 sm:text-sm lg:py-4">
          {ele.account}
        </td>

        {/* Amount */}
        <td
          className={`px-2 py-2 text-[10px] sm:px-2 sm:text-sm lg:py-4 ${ele.amountColor}`}
        >
          {ele.amount}
        </td>

        {/* Status */}
        <td className="px-2 py-2 sm:px-3 lg:py-4">
          <span className="rounded-full bg-green-100 px-2 py-1 text-[9px] font-medium text-green-600 sm:px-3 sm:text-xs">
            {ele.status}
          </span>
        </td>

      </tr>
    );
  })}
</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default RecentTransaction;
