import React from "react";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdSwapHoriz,
  MdReceiptLong,
  MdAccountBalance,
} from "react-icons/md";
import { Link } from "react-router-dom";

const quickAction = [
  {
    id: 1,
    title: "Deposit",
    description: "Add money to account",
    icon: MdArrowDownward,
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    path: "/deposit",
  },
  {
    id: 2,
    title: "Withdraw",
    description: "Withdraw money",
    icon: MdArrowUpward,
    iconBg: "bg-[#FEE2E2]",
    iconColor: "text-[#EF4444]",
    path: "/withdraw",
  },
  {
    id: 3,
    title: "Transfer",
    description: "Send money",
    icon: MdSwapHoriz,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
    path: "/transfer",
  },
  {
    id: 4,
    title: "Pay Bills",
    description: "Pay your bills",
    icon: MdReceiptLong,
    iconBg: "bg-[#FFEDD5]",
    iconColor: "text-[#F97316]",
    path: "/paybill",
  },
  {
    id: 5,
    title: "My Account",
    description: "View account details",
    icon: MdAccountBalance,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#16A34A]",
    path: "/myaccount",
  },
  {
    id: 6,
    title: "Transactions",
    description: "View all transactions",
    icon: MdReceiptLong,
    iconBg: "bg-[#FCE7F3]",
    iconColor: "text-[#DB2777]",
    path: "/transactions",
  },
];

const Quickactions = () => {
  return (
    <section className="flex h-full w-full flex-col rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="p-4">
        <h2 className="font-bold text-lg">Quick Actions</h2>
      </div>

      {/* Cards */}
      <div className="grid flex-1 grid-cols-1 gap-2 p-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
        {quickAction.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              to={item.path}
              key={item.id}
              className="flex h-full min-w-0"
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-gray-200 p-4 text-center transition hover:shadow-md">
                <div
                  className={`mb-1 flex h-7 w-7 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <Icon className={`text-xl ${item.iconColor}`} />
                </div>

                <h2 className="font-semibold">{item.title}</h2>

                <p className="mt-1 text-xs">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Quickactions;