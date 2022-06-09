import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between px-4 items-center bg-[#0a192f] text-gray-300'>
        <div>
            <h1>AOZ</h1>
        </div>

        {/* REGULAR MENU */}
        <div>
            <ul className='flex'>
                <li className='px-4 cursor-pointer'>Home</li>
                <li className='px-4 cursor-pointer'>About</li>
                <li className='px-4 cursor-pointer'>Skills</li>
                <li className='px-4 cursor-pointer'>Work</li>
                <li className='px-4 cursor-pointer'>Contact</li>

            </ul>
        </div>

        {/* HAMBURGER ICON */}
        <div className='hidden'>
            <FaBars></FaBars>
        </div>

        {/* MOBILE MENU */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className='hidden'>

        </div>

    </div>
  )
}

export default Navbar