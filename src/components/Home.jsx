import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>Home

        {/* CONTAINER */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Alvaro Ormeno</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full Stack Developer</h2>
            <p className='py-4 max-w-[700px] text-gray-300'>I'm Front-End Web Developer with a Hospitality & Sustainable 
                Tourism background and strong work experiences in Marketing 
                and Digital Media. Strong and effective visual communicator 
                with attention to detail and problem solving skills to build 
                engaging web experiences. Known for always having a positive 
                attitude and welcoming new challenges. 
            </p>
            <div>
                <button>
                    View Work <HiArrowNarrowRight/>
                </button>
            </div>
        </div>
    
    </div>
  )
}

export default Home