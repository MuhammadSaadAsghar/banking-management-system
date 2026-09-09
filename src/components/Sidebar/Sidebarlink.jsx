import React from 'react'

import { NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { MdAccountBalanceWallet } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { PiHandWithdrawBold ,PiHandDepositBold } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { RiBillFill } from "react-icons/ri";

const Sidebarlink = () => {
  return (
     <div className="sidebar flex items-center justify-center  ">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink className={({isActive})=>`block px-6 text-md rounded-lg transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/"><Button><RxDashboard/>Dashboard</Button></NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>`block px-6 text-md rounded-lg transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/myaccount"><Button><MdAccountBalanceWallet/> My Account</Button></NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>`block px-6 text-md rounded-lg transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/deposit"><Button><PiHandDepositBold/> Deposit</Button></NavLink>
          </li>{" "}
          <li>
            <NavLink className={({isActive})=>`block px-6 text-md rounded-lg transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/withdraw"><Button><PiHandWithdrawBold/>Withdraw</Button></NavLink>
          </li>{" "}
          <li>
            <NavLink className={({isActive})=>`block px-6 rounded-lg text-md transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/transfer"><Button><FcMoneyTransfer/> Transfer</Button></NavLink>
          </li>{" "}
          <li>
            <NavLink className={({isActive})=>`block px-6 rounded-lg text-md transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/paybill"><Button><RiBillFill/> Paybill</Button></NavLink>
          </li>{" "}
          <li>
            <NavLink className={({isActive})=>`block px-6 text-md  rounded-lg transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/transactions"><Button><GrTransaction/> Transactions</Button></NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>`block px-6 text-md  rounded-lg transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/profile"><Button><CgProfile/>Profile</Button></NavLink>
          </li>{" "}
          <li>
            <NavLink className={({isActive})=>`block px-6 text-md rounded-lg transition-all duration-300 ${isActive?"text-white bg-[#0D6EFD]":"text-white hover:bg-[#0A2A4A]"}`} to="/settings"><Button><CiSettings/>Settings</Button></NavLink>
          </li>
        </ul>
      </div>
  )
}

export default Sidebarlink