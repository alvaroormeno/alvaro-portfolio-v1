import React from 'react'

const Contact = () => {
  return (

    // PAGE CONTAINER
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='post' action="https://getform.io/f/86f6580b-5584-415d-91c3-853567a3b5d9" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#80ED99] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or send me an email - alvaro@ormeno.org</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='bg-[#ccd6f6] my-4 p-2' type="email" placeholder='E-mail' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" id=""  rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#80ED99] hover:border-[#80ED99] py-3 px-4 my-8 mx-auto flex items-center'>Send Message</button>
        </form>

    </div>
  )
}

export default Contact