import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>Home

        {/* CONTAINER */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-[#80ED99]'>Welcome! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Alvaro Ormeno</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full Stack Developer</h2>
            <p className='py-4 max-w-[700px] text-gray-300'>
                Web Developer with a Hospitality & Sustainable 
                Tourism background and strong work experiences in Marketing 
                and Digital Media. Strong and effective visual communicator 
                with attention to detail and problem solving skills to build 
                engaging web experiences. Known for always having a positive 
                attitude and welcoming new challenges. 
            </p>
            <div>
                {/* NOTE 1 */}
                <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-[#80ED99] hover:border-[#80ED99]'>
                <Link to="work" smooth={true}  duration={500}>
                    View Work
                </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                    
                </button>
            </div>
        </div>
    
    </div>
  )
}

export default Home

// 1 - This button when hover over it turns pink and the arrow (icon) rotates 90 degrees so it points down.
//  In tailwind for it to rotate down when hovering you must group the main element which in this case is
//  the button element. This is why it has "group" in the className and also the <span> that contains the
//  icon also has group... this works by letting it know that the whole button element and span element are a
//  group so anywhere in the group that you hover over, the rotation is activated.