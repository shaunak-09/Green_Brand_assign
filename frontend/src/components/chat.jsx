import React,{useEffect, useState} from 'react'
import axios from "axios"
import {server} from '../config'
import { FaTelegramPlane } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


function Chat() {
    const name="test1"
    const [user, setUser] = useState();
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        const fetchUser = async () => {
          const result = await axios.post(`${server}/user/`,{
                name:name
          });
          setUser(result.data);
          setMessageList(result.data.message);
        };
        fetchUser();
    }
    , [])
    const handleSubmit = async () => {
        setMessageList([...messageList, { author: user.name, message: message }]);
        setMessage("");
        console.log(message);
        const result=await axios.post(`${server}/chat/`,
        {
            author:user.name,
            message:message
        })
      console.log(result);
      console.log(messageList);

      setMessageList(result.data.messages)

      }
      


  return (
    <div className='bg-black w-[100%] h-[100%] flex flex-col pb-2'>
    <div className=" min-h-[93%] p-2 overflow-y-auto">
                {messageList?.map((item, i) => {
                  return item.author == user.username ? (
                    <div
                    key={i}
                      // id={Name === item.author ? "you" : "other"}
                      className="  text-white p-2 my-3 text-left  float-right clear-both flex flex-row-reverse"
                    >
                      <div className='flex p-2'>
                        {user.image?<img className='w-[20px] h-[20px]  rounded-r-full' src=""></img>
                        : <FaUserCircle className='w-[20px] h-[20px] text-white  rounded-r-full'/>}

                     </div>
                      <div className='flex flex-col max-w-[90%] flex-wrap break-words'>       
                        <p className="text-sm p-2 text-right">{item.author}</p>
                        <p className=" bg-gray-600  text-md font-semibold p-2 rounded-md rounded-tr-none">{item.message}</p>
                        </div>
                        </div>
                  ) : (
                    <div
                      key={i}
                      className=" text-white p-1 my-3 text-left float-left clear-both flex flex-row "
                    >
                      <div className='flex p-2'>
                      {item.image?<img className='w-[20px] h-[20px]  rounded-r-full' src={user.image}></img>
                        : <FaUserCircle className='w-[20px] h-[20px] text-white  rounded-r-full'/>}
                     </div>
                      <div className='flex flex-col max-w-[90%] flex-wrap break-words'>       
                        <p className="text-sm p-2 ">{item.author}</p>
                        <p className=" bg-pink-600  text-md font-semibold p-2 rounded-md rounded-tl-none">{item.message}</p>
                        </div>
                    </div>
                  );
                })}
              </div>
              <div className=' bottom-1 w-[100%] flex justify-center items-center gap-x-1'>
                <input value={message} onChange={(e) => setMessage(e.target.value)}
                 className='w-[60%] p-2 bg-gray-900 text-white focus:outline-none focus:border-pink-800 focus:border-2 rounded-md ' type='text' placeholder='Type a message ...'>
                </input>
                <div onClick={handleSubmit}
                 className='cursor-pointer bg-gray-600 h-[30px] w-[30px] rounded-full flex justify-center items-center'>
                    <FaTelegramPlane className='text-white' />
                </div>

              </div>




    </div>
  )
}

export default Chat