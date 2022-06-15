import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import {Link} from 'react-scroll'
import resume from '../assets/2022aozcv.pdf';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = function() {
        setNav(!nav)
    }



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <h1>AOZ</h1>
        </div>

        {/* REGULAR MENU */}
        
            {/* Note 1 */}
        <div className=''>
            <ul className='hidden md:flex'>
                <li >
                <Link to="home" smooth={true}  duration={500}>
                    Home
                </Link>
                </li>
                <li >
                    <Link to="about" smooth={true}  duration={500}>
                        About
                    </Link>
                </li>
                <li >
                    <Link to="skills" smooth={true}  duration={500}>
                        Skills
                    </Link>
                </li>
                <li >
                    <Link to="work" smooth={true}  duration={500}>
                        Work
                    </Link>
                </li>
                <li >
                    <Link to="contact" smooth={true}  duration={500}>
                        Contact
                    </Link>
                </li>
                <li >
                <a className="nav-link change" rel="noreferrer" href={resume} target="_blank" rel="noreferrer noopener">Resume</a>
                </li>
            </ul>
        </div>

        {/* HAMBURGER ICON */} 
        {/* Note 2 */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {/* This is a Ternary Operator = condition ? expression if true : expression if false */}
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}
        {/* Note 3 */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <ul >
            <li className='py-6 text-4xl'>
                {/* NOTE 4 */}
                <Link onClick={handleClick} to="home" smooth={true}  duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true}  duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true}  duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true}  duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true}  duration={500}>
                    Contact
                </Link>
            </li>
            
        </ul> 
        </div>
        
        
        

        {/* SOCIAL ICONS */}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='  w-[160px] h-[60px] flex justify-between items-center bg-[#76C893] ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-500'
                    href="http://linkedin.com/in/alvaroormeno" target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className=' w-[160px] h-[60px] flex justify-between items-center bg-[#34A0A4] ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-400'
                    href="https://github.com/alvaroormeno" target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className=' w-[160px] h-[60px] flex justify-between items-center bg-[#1A759F] ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:alvaro@ormeno.org" target="_blank">
                        Mail <HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className=' w-[160px] h-[60px] flex justify-between items-center bg-[#1E6091] ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-200'
                    href={resume} target="_blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

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

// 4 - On React Smooth Scroll <Link> we added onClick={handleClick} for it to change again the state so when
// when the link is clicked it changes the state of showing or not showing the mobile menu. Since the Mobile Menu
// is already showing, onClick={handleClick} changes the state and closes/hides it again.