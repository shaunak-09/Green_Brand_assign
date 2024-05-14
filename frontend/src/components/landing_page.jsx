import React from 'react'
import Chat from './chat'
import Profile from './profile'


function Landing_page() {
  return (
    <div className='flex flex-col md:flex-row w-[100vw] md:h-[93vh] h-[100%]'>
        <div className='flex md:w-[30vw] w-[100%]  border-r-4 border-r-pink-800 '>
            <Profile />
        </div>
        <div className='flex md:w-[70%] w-[100%]'>
            <Chat />
        </div>
    </div>
  )
}

export default Landing_page