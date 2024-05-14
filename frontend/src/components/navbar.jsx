import React from 'react'
import { FaCamera } from "react-icons/fa";
import { BsChatRightDotsFill } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { IoIosHeartDislike } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";



function Navbar() {
  return (
    <div className=' h-[7vh] top-0 w-[100%] flex justify-between items-center md:text-md  bg-gray-800'>
        <div className='flex p-3 space-x-1 text-lg font-semibold'>
            <h1 className='text-white'>secret </h1>
            <h1 className='text-white bg-pink-600 p-[3px] pt-0 pb-0 rounded-lg'>desires</h1>
        </div>
        <div className='flex flex-row text-xs md:text-[1rem]  md:gap-x-4 gap-x-1  text-left '>
            <button className='flex  gap-x-1  items-center font-semibold hover:text-pink-600 active:text-pink-600 active:border-b-pink-600 active:border-b-2 p-2  text-white'>
            <BsChatRightDotsFill/>  <p className='text-left'>Chat</p></button>
            <button className='flex gap-x-1 items-center font-semibold hover:text-pink-600 active:text-pink-600 active:border-b-pink-600 active:border-b-2 p-2  text-white'>
            <IoPeople/> <p>My Characters</p></button>
            <button className='flex gap-x-1 items-center font-semibold hover:text-pink-600 active:text-pink-600 active:border-b-pink-600 active:border-b-2 p-2  text-white'>
                <FaCamera /> <p> Generate Images</p></button>
            <button className='flex gap-x-1 items-center font-semibold  bg-pink-600 p-2 active:border-b-pink-600 active:border-b-2 rounded-xl  text-white'>
               <IoIosHeartDislike/> <p>Create Character</p></button>
        </div>
        <div className='text-xs md:text-[1rem] p-2 flex gap-x-1 items-center text-white'>
            
            <FaUserCircle /> <p >   My Profile</p> 
            <IoMdArrowDropdown />
        </div>
    </div>
  )
}

export default Navbar