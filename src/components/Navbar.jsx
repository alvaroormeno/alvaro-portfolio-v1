import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between px-4 items-center bg-[#0a192f] text-gray-300'>
        <div>
            <h1>AOZ</h1>
        </div>

        {/* REGULAR MENU */}
        
            {/* Note 1 */}
        <div className=''>
            <ul className='hidden md:flex'>
                <li className='px-4 cursor-pointer'>Home</li>
                <li className='px-4 cursor-pointer'>About</li>
                <li className='px-4 cursor-pointer'>Skills</li>
                <li className='px-4 cursor-pointer'>Work</li>
                <li className='px-4 cursor-pointer'>Contact</li>
            </ul>
        </div>

        {/* HAMBURGER ICON */}
        {/* Note 2 */}
        <div className='md:hidden z-10'>
            <FaBars></FaBars>
        </div>

        {/* MOBILE MENU */}
        {/* Note 3 */}
        
        <div className=' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
            <ul >
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul> 
        </div>
        
        
        

        {/* SOCIAL ICONS */}
        <div className='hidden'>

        </div>

    </div>
  )
}

export default Navbar

// 1 - TailwindCSS is a mobile first response framework. Class of hidden md:flex on div, hides complete div but 
// shows it on any screen size bigger than md/Medium (780 px) as flex, hence md:flex after hidden. 

// 2 - className='md:hidden' states to hide element always on any screen bigger than md/Medium, therefore on any
// screen smaller than md/Medium (780 px) the element will show. z-10 controlls the stack order of element just like
// bring up or down layers on photoshop. Since mobile menu with is background is actually covering the navbar, with z-10
// we bring up the hamburger to show above the mobile element menu thats taking all the screen size. 

// 3 - TailwindCSS className='absolute top-0 left-0' states to position element in absolute position and top-0 with
// left-0 are utilities to for controlling the placement for the positioned element. w-full h-screen state for the 
// width to be full and the heigh to be 100 view port height (Viewport is the visible are on a window screen)
// 'flex flex-col justify-center items-center' states for element to be flexed then into a column, to center them in y axis
// and then to center them in x axis