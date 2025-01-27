import React, { useState } from 'react'
import SideBar from './SideBar';
import MainContent from './MainContent';

const Layout = () => {
    
  return (
    <div className='flex'>
        <SideBar/>  
        <MainContent/>
    </div>
  )
}

export default Layout