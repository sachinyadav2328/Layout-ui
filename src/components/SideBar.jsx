import React, { useState } from 'react'

const SideBar = () => {
const[open, setOpen] = useState(true);

if(!open){
    return <div className='fixed top-0 left-0'>
        <div>
        <button onClick={()=>{setOpen(!open)}} className='bg-amber-300 p-2 m-2'>sidebar toggle</button>
        </div>
    </div>
}
  return (
    <div>
        <div className='transition-all delay-100 duration-1000 ease-in-out bg-red-800 h-screen md:w-64 w-8 '>
            <div className=''>
              <button onClick={()=>{
                setOpen(!open)
              }}>sidebar toggle</button>
            </div>
        </div>
    </div>
  )
}

export default SideBar