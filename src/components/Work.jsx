import React from 'react'
import Flight from '../assets/flightfortonight.jpg'
import Shopper from '../assets/consciousshopper.jpg'
import airbnb from '../assets/airbnblanding.png'
import udemy from '../assets/udemy.png'
import weatherapp from '../assets/weatherapp.png'
import limanjar from '../assets/limanjarMain.png'
import todoapp from '../assets/todoapp.png'
import newsapi from '../assets/newsapireactapp.png'
import spacex from '../assets/spacex.png'
import payapi from '../assets/payapi.png'
import skilled from '../assets/skilledweb.png'

const Work = () => {
  return (

    // PAGE CONTAINER
    <div name='work' className='w-full md:h-[100%] text-gray-300 bg-[#0a192f] pt-[80px]'>

        {/* MAIN CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#80ED99]'>Projects</p>
                <p className='py-4'>Check out some of my recent projects!</p>
            </div>

            {/* //////- FULLSTACK SECTION -////// */}

            <div className='pb-2'>
                <p className='text-xl font-bold inline border-b-4 border-[#80ED99]'>Fullstack & Apps</p>
            </div>
            
            
            {/* CONTAINER FOR CARDS */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 mb-8'>


                {/* CARD MERN TO DO APP */}
                <div style={{backgroundImage: `url(${todoapp}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            MERN ToDo App
                        </span>
                        <p>
                        A full mobile responsive MERN stack To Do App that lets you login, logout and save your todos online.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://aoz-mern-todo.herokuapp.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaroormeno/mern-to-do-app" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* CARD FLIGHT FOR TONIGHT */}
                <div style={{backgroundImage: `url(${Flight}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Flight For Tonight
                        </span>
                        <p>
                        A simple, easy to use app that filters flight tickets based on your destination and amount of money you want to spend.
                        </p>
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

                {/* CARD  CONCIOUS SHOPPER */}
                <div style={{backgroundImage: `url(${Shopper}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px] '>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Conscious Shopper
                        </span>
                        <p>
                        App that lets customers and business owners search, review, vote and share small family and minority owned businesses in their area. This app is an SPA powered by MERN.
                        </p>
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

                {/* CARD  NEWS API REACT APP */}
                <div style={{backgroundImage: `url(${newsapi}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px] '>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Serverless News-Api React App
                        </span>
                        <p>
                        A serverless react app that fetches latest news from newsapi. Includes pagination and sorting features
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/alvaroormeno/news-api-serverless-react-app" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>


                {/* CARD RESPONSIVE WEATHER APP */}
                <div style={{backgroundImage: `url(${weatherapp}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Responsive Weather APP
                        </span>
                        <p>
                        A complete mobile responsive weather app that uses 2 different API calls to fetch different weather properties.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://alvaroormeno.github.io/responsive-weather-app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaroormeno/responsive-weather-app" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            {/* //////- FRONT END SECTION -////// */}{/* //////- FRONT END SECTION -////// */}{/* //////- FRONT END SECTION -////// */}
            {/* //////- FRONT END SECTION -////// */}{/* //////- FRONT END SECTION -////// */}{/* //////- FRONT END SECTION -////// */}
            {/* //////- FRONT END SECTION -////// */}{/* //////- FRONT END SECTION -////// */}{/* //////- FRONT END SECTION -////// */}

            <div className='pb-4'>
                <p className='text-xl font-bold inline border-b-4 border-[#80ED99]'>Frontend & Design</p>
            </div>
            
            
            {/* CONTAINER FOR CARDS */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

                {/* CARD SPACE X CLONE */}
                <div style={{backgroundImage: `url(${spacex}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Space X Website Clone
                        </span>
                        <p>
                        A clone of www.spacex.com
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://alvaroormeno.github.io/space-x-website-clone/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaroormeno/space-x-website-clone" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* CARD LIMANJAR DULCERIA WEBSITE */}
                <div style={{backgroundImage: `url(${limanjar}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Limanjar Dulceria Website
                        </span>
                        <p>
                        A mock website for Limanjar Dulceria, Online Bakery Shop
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://alvaroormeno.github.io/limanjar-web/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaroormeno/limanjar-web" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* CARD FRONTEND MENTOR PAY API MULTI PAGE WEBSITE */}
                <div style={{backgroundImage: `url(${payapi}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Multi-page Website Frontend Challenge
                        </span>
                        <p>
                        A Frontend Mentor challenge. Figma to React mobile responsive website. Built with React & TailwindCSS
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://alvaro-frontend-mentor-projects.github.io/payapi-multi-page-website/?#/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaro-frontend-mentor-projects/payapi-multi-page-website" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* CARD FRONTEND MENTOR PAY API MULTI PAGE WEBSITE */}
                <div style={{backgroundImage: `url(${skilled}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Figma to React Frontend Challenge
                        </span>
                        <p>
                        A Frontend Mentor challenge. Built with React & TailwindCSS
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://alvaro-frontend-mentor-projects.github.io/skilled-e-learning-landing-page/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaro-frontend-mentor-projects/skilled-e-learning-landing-page" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* CARD UDEMY CLONE LANDING PAGE */}
                <div style={{backgroundImage: `url(${udemy}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Udemy Clone Landing Page
                        </span>
                        <p>
                            A responsive clone of Udemy main landing page. Uses JSON data file to populate information of courses.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://alvaroormeno.github.io/udemy-clone-landing-page/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaroormeno/udemy-clone-landing-page" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Github Repo
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* CARD MOCK AIRBNB LANDING PAGE */}
                <div style={{backgroundImage: `url(${airbnb}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 max-w-[400px]'>
                        <span className='text-2x1 font-bold text-white tracking-wider'>
                            Mock Airbnb Landing Page
                        </span>
                        <p>
                            A simple mockup of an Airbnb landing page constructed fully with React and TailwindCSS.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://alvaroormeno.github.io/travel-rental-landing-page/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                </button>
                            </a>
                            <a href="https://github.com/alvaroormeno/travel-rental-landing-page" target="_blank">
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