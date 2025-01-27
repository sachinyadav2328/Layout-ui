import React from 'react'
import { CalendarClock, CalendarDays, Plus, Videotape } from 'lucide-react';
const MainContent = () => {
  return (
    <div className='w-full mb-20'>
        <div className='h-72 bg-black'></div>
        <div className='grid grid-cols-10 gap-8 p-8'>
            <div className='col-span-10 md:col-span-2  -translate-y-24 hidden md:block '>
             <div className='absolute inset-0 shadow-2xl border-2 border-gray-100 bg-white flex flex-col items-center justify-center rounded-2xl'>
                <img src="https://cdn.jsdelivr.net/gh/200-DevelopersFound/SnapStore@master/portfolio/testp.png" alt="profile pic" className="w-36 h-36 rounded-2xl" />
                <div className="mt-4 text-center">
                <span className="block text-gray font-semibold text-lg mt-4">Sachin Yadav</span>
                <span className="block text-gray mt-4">abcd123@gmail.com</span>
                <span className="block text-gray ">987456321</span>
                <span className="block text-gray mt-4">Delhi</span>
                 </div>
             </div> 
            </div> 
            {/* second grid */}
            <div className='col-span-10 md:col-span-5  bg-gary-300'>
           
            <span> Monday, 27 January</span>
            <h2 className='font-bold text-4xl'>Good morning</h2>
            <div  className='border-2  border-gray-100  mt-10 shadow-2xl rounded-2xl'>
            <div className='flex gap-2 bg-gray-100 p-2 m-2 rounded'>
            <CalendarDays /> 
                <span> Monday,14 January 2024</span>
            </div>
              <div className='m-2 '>
                <div className='flex items-center gap-2 mt-2 p-2 border-b-2 border-b-gray-200'>
                    <div className='border-r-blue-200 border-r-2 p-1'>
                    <span className='block font-bold'>11:30 Am</span>
                    <span className='font-extralight text-sm'>11:30 AM</span>
                    </div>
                    <div>
                <span className='font-extralight text-sm'>Live</span>
                <h2 className='font-semibold'>UX Webinar</h2>
                </div> 
                </div>
                <div className='flex items-center gap-2 mt-2 p-2 border-b-2 border-b-gray-200'>
                    <div className='border-r-blue-200 border-r-2 p-1'>
                    <span className='block font-bold'>11:30 Am</span>
                    <span className='font-extralight text-sm'>11:30 AM</span>
                    </div>
                    <div>
                <span className='font-extralight text-sm'>Live</span>
                <h2 className='font-semibold'>UX Webinar</h2>
                </div> 
                </div>
                <div className='flex items-center gap-2 mt-2 p-2 border-b-2 border-b-gray-200'>
                    <div className='border-r-blue-200 border-r-2 p-1'>
                    <span className='block font-bold'>11:30 Am</span>
                    <span className='font-extralight text-sm'>11:30 AM</span>
                    </div>
                    <div>
                <span className='font-extralight text-sm'>Live</span>
                <h2 className='font-semibold'>UX Webinar</h2>
                </div> 
                </div>
                <div className='flex items-center gap-2 mt-2 p-2 '>
                    <div className='border-r-blue-200 border-r-2 p-1'>
                    <span className='block font-bold'>11:30 Am</span>
                    <span className='font-extralight text-sm'>11:30 AM</span>
                    </div>
                    <div>
                <span className='font-extralight text-sm'>Live</span>
                <h2 className='font-semibold'>UX Webinar</h2>
                </div> 
                </div>
              </div>

            </div>
            </div>
            <div className='col-span-10 md:col-span-3 translate-y-16 p-6 flex items-center justify-center border-2  border-gray-100  mt-10 shadow-2xl rounded-2xl' >
                <div className='grid grid-cols-2 gap-16 cursor-pointer'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-blue-300 p-6 rounded-2xl mb-2'>
                    <CalendarClock  />
                    </div>
                <span className='font-semibold'> Schedule a Webinar</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                <div className='bg-blue-300 p-6 rounded-2xl mb-2'>
                <Plus/>
                    </div>
                <span  className='font-semibold'> Schedule a Webinar</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                <div className='bg-blue-300 p-6 rounded-2xl mb-2'>
                <Videotape/>
                    </div>
                <span  className='font-semibold'> Schedule a Webinar</span>
                </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default MainContent