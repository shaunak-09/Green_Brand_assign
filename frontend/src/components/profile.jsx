import React from "react";
import Img from "../image.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoMdLock } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";

import { FaCamera } from "react-icons/fa";



function Profile() {
  const style = {
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(0deg, rgba(2,0,36,0.9) 0%, rgba(56,56,57,0.8) 56%, rgba(174,179,180,0) 100%)",
  };
  const style2 = {
    background: "rgb(0,0,0)",
    background: "linear-gradient(180deg, rgba(0,0,0,0.9) 20%, rgba(97,96,96,0.8) 72%, rgba(205,205,205,0.2) 100%)"
  };
  const style1 = {
    background: "rgb(60,1,1)",
    background:
      "linear-gradient(180deg, rgba(60,1,1,1) 0%, rgba(129,4,4,1) 72%, rgba(217,6,6,1) 100%",
  };
  return (
    <div className="flex flex-col items-center md:h-[100%] h-[100vh] w-[100%] bg-red-600">
      <div className="flex flex-col w-[100%] relative h-[60%] ">
     
        <img
          className=" bg-contain bg-no-repeat w-[100%] h-[100%]  relative"
          src={Img}
        ></img>
         <div
          className=" absolute  top-0 text-white  font-semibold w-[100%] h-[40px] flex flex-col p-1 pb-1"
          style={style2}
        >
          <p className="flex flex-row justify-between text-xs items-center">
            <div className="flex gap-x-1 items-center">
            <IoIosArrowBack/>
            Chats img: <span className="bg-gray-600">3</span>
            msg:
            </div>
            <div className="flex gap-x-1 items-center">
                <CiMenuKebab/>
                <IoMdSettings />
                <FaEdit />
                <RxCross1 />

            </div>

          </p>
        </div>
        <div
          className=" absolute justify-end bottom-0 items-start text-white font-semibold  leading-2   w-[100%] h-[60px] flex flex-col pl-5 pb-1"
          style={style}
        >
          <h5 className="text-sm">Test User</h5>
          <h6 className=" text-xs">@test-test-2</h6>
        </div>
      </div>
      <div
        style={style1}
        className=" h-[100%] flex flex-col p-3 pb-0 w-[100%] gap-y-2"
      >
        <div className=" bg-gray-800 h-[20%] flex justify-between items-center text-white text-sm pl-2 pr-2">
          <div className="flex gap-x-2 pl-1">
            <p className="flex justify-center items-center gap-x-1"><FaCamera />0</p>
            <p className="flex justify-center items-center gap-x-1"><BiSolidMessageRounded />3</p>

          </div>
          <div className="flex gap-x-1">
            <p className="flex justify-center items-center gap-x-1">
                <IoMdLock className="text-gray-400"/>
                Make Character Public
                <FaShareAlt  />
                </p>
          </div>
        </div>
        <div className=" bg-gray-800 h-[100%]  flex  text-left p-2 justify-between">
          <div className="flex flex-col w-[30%] text-white">
            <p className="text-sm font-bold pb-3">Who I am</p>
            <div className="flex flex-col mb-1">
              <p className="text-xs font-bold">Personality</p>
              <p className="text-[0.7rem] ">Personality</p>
            </div>

            <div className="flex flex-col mb-1">
              <p className="text-xs font-bold">Personality</p>
              <p className="text-[0.7rem] ">Personality</p>
            </div>
            <div className="flex flex-col mb-1">
              <p className="text-xs font-bold">Personality</p>
              <p className="text-[0.7rem] ">Personality</p>
            </div>
          </div>
          <div className="flex flex-col w-[50%] text-left text-white ">
            <p className="text-sm font-bold pb-3 flex items-center justify-between">
                About Me
                <FaEdit />
                </p>
            <p className=" flex-wrap text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              voluptatum architecto, ad facere,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
