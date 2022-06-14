import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#80ED99]'>
                        About
                    </p>
                </div>
                <div>
                </div>
            </div>
            {/* Remember.. sm:grid-cols-2 means anything after small make it grid-cols-2 */}
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi, Im Alvaro, nice to meet you. Please take a look around.
                    </p>
                </div>
                <div>
                    <p>
                    Front-End web developer with a Hospitality & Sustainable Tourism background
                    and strong work experiences in Marketing and Digital Media,
                    merging practices to help reduce carbon footprint by building better, 
                    comprehensive and intuitive Hospitality user experiences on the web.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About