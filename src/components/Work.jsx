import React from 'react'
import Flight from '../assets/flightfortonight.jpg'
import Shopper from '../assets/consciousshopper.jpg'

const Work = () => {
  return (

    // PAGE CONTAINER
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

        {/* MAIN CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#80ED99]'>Work</p>
                <p className='py-6'>Check out some of my work</p>
            </div>

            {/* CONTAINER FOR CARDS */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

                {/* CARD1 */}
                <div style={{backgroundImage: `url(${Flight}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Flight For Tonight

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://gallolopez1.github.io/flight-for-tonight/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaroormeno/flight-for-tonight" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div style={{backgroundImage: `url(${Shopper}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Conscious Shopper

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://enigmatic-basin-52191.herokuapp.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaroormeno/conscious-shopper" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>

    </div>
  )
}

export default Work