import React from 'react'

import meImg from '../assets/alvaro22.jpeg'

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
            <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                


                <div className=' sm:text-right text-4xl font-bold'>
                    <p>
                        Hi, nice to meet you!
                    </p>
                    <p>
                        Please take a look around.
                    </p>
                    <div className='mt-3  flex sm:justify-end justify-center'>
                       <img className='max-w-[300px]' src={meImg} alt="" /> 
                    </div>
                </div>
                
                <div className=' my-5'>
                    <p>
                    Full Stack Software Engineer, Columbia University Bootcamp graduate with 
                    new and reinforced skills in HTML, CSS, JavaScript, responsive web design 
                    frameworks with a passion and focus for React.js.
                    </p>
                    <br />
                    <p>
                    Submerged in the technology field from early on and looking forward to 
                    the future with web 3.0 and upcoming metaverses, I am passionate about 
                    delivering the most captivating user experience in all my projects 
                    leading to engagement and therefore sales for my customers.     
                    </p>
                    <br />
                    <p>
                    Applying the entrepreneurial concept of “everything is first consumed by 
                    the eye” to all my projects, my goal is to take advantage of new learned 
                    web abilities merged with past working skills to integrate a quality web 
                    development team to create useful and engaging web experiences.
                    </p>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default About