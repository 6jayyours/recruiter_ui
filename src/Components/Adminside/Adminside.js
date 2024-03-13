import './Adminside.css'
import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { FaUsers, FaUsersCog } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlineWork } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

function Adminside() {
  return (
    <aside id='admin-sidebar'>
        <div className='admin-sidebar-title'>
            <div className='admin-sidebar-brand'>
            <BsCart3 className='admin-icon_header' /> DASHBOARD
            </div>
            <span className='admin-icon close_icon'>X</span>
        </div>
        <ul className='admin-sidebar-list'>
            <li className='admin-sidebar-list-item'>
                <a href='/users'>
                <FaUsers className='admin-icon'/>   Users

                </a>
            </li>
            <li className='admin-sidebar-list-item'>
                <a href='/recruiters'>
                <FaUsersCog className='admin-icon'/>   Recruiters

                </a>
            </li>
            <li className='admin-sidebar-list-item'>
                <a href='/'>
                <CgOrganisation className='admin-icon'/>   Company

                </a>
            </li>
            <li className='admin-sidebar-list-item'>
                <a href='/'>
                <MdOutlineWork className='admin-icon'/>   Jobs

                </a>
            </li>
            <li className='admin-sidebar-list-item'>
                <a href='/'>
                <IoIosSettings className='admin-icon'/>   Settings

                </a>
            </li>
            <li className='admin-sidebar-list-item'>
                <a href='/'>
                <IoLogOut className='admin-icon'/>   Logout

                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Adminside
