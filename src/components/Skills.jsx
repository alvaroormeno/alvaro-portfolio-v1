import React from 'react'
import HTML from '../assets/html.png'
import GitHub from '../assets/github.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactImage from '../assets/react.png'
import Mongodb from '../assets/mongodb.png'
import Tailwind from '../assets/tailwind.png'
import Heroku from '../assets/heroku.png'
import Express from '../assets/express.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* MAIN CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl inline border-b-4 border-[#80ED99]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-6 text-center py-8 gap-y-2 gap-x-2  '>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="Html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="Html icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Html icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImage} alt="Html icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="Html icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Html icon" />
                    <p className='my-4'>NODE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongodb} alt="Html icon" />
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Html icon" />
                    <p className='my-4'>TAILWINDCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Heroku} alt="Html icon" />
                    <p className='my-4'>HEROKU</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Express} alt="Html icon" />
                    <p className='my-4'>EXPRESS.JS</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Skills