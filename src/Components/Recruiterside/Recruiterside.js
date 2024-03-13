import './Recruiterside.css'
import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { PiBagSimpleBold } from "react-icons/pi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaEnvelopesBulk } from "react-icons/fa6";

function Recruiterside() {
  return (
    <aside id='recruiter-sidebar'>
        <div className='recruiter-sidebar-title'>
            <div className='recruiter-sidebar-brand'>
            <BsCart3 className='recruiter-icon_header' /> DASHBOARD
            </div>
            <span className='recruiter-icon close_icon'>X</span>
        </div>
        <ul className='recruiter-sidebar-list'>
            <li className='recruiter-sidebar-list-item'>
                <a href='/'>
                <RiAccountCircleFill className='recruiter-icon'/>   Profile

                </a>
            </li>
            <li className='recruiter-sidebar-list-item'>
                <a href='/'>
                <PiBagSimpleBold  className='recruiter-icon'/>   My Jobs

                </a>
            </li>
            <li className='recruiter-sidebar-list-item'>
                <a href='/'>
                <FaEnvelopesBulk  className='recruiter-icon'/>   Applications

                </a>
            </li>
            <li className='recruiter-sidebar-list-item'>
                <a href='/'>
                <TiMessages className='recruiter-icon'/>   Messages

                </a>
            </li>
            <li className='recruiter-sidebar-list-item'>
                <a href='/'>
                <IoIosSettings className='recruiter-icon'/>   Settings

                </a>
            </li>
            <li className='recruiter-sidebar-list-item'>
                <a href='/'>
                <IoLogOut className='recruiter-icon'/>   Logout

                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Recruiterside
