import React, { useEffect, useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import friendbook from "../assets/freind book Logo-background remove.png"
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

import axios from 'axios';

const Navbar = () => {

    const[useremail,setUseremail]=useState("");
    const[userProfilePic,setUserProfilePic]=useState("");
    const[username,setUsername]=useState("");
    const [cookies, setCookie,removeCookie] = useCookies(['token']);
    const[notification,setNotification] =useState(false)
    const[notiFiData,setNotiFiData]=useState([])

    useEffect(()=>{
        setUsername(localStorage.getItem("username"))
        if(cookies.token){
        setUsername(jwtDecode(cookies.token).username)
        setUseremail(jwtDecode(cookies.token).email)
        // setUserProfilePic(jwtDecode(cookies.token).profilepic)
        axios.post("http://localhost:3000/api/userPic",{username})
        .then((e)=>{
      console.log("this is for profilepic",e.data)
      setUserProfilePic(e.data.profilePic)
    })
        }else{
            console.log(username)
            setUsername(false)
            setUseremail(false)
            setUserProfilePic(false)
        }
    },[cookies,username])


    const handleNotification = () =>{
     setNotification(!notification)
     localStorage.setItem("notification",notification)
    }

    axios.post("http://localhost:3000/api/showfriendrequests",{username})
    .then((e)=>{
      // console.log("this is for friend requests",e.data)
      setNotiFiData(e.data)
    })
    .catch((err)=>{
      console.log("error",err)
    })


  return (
    <div>
      <div className='w-full h-24  bg-cyan-700 flex fixed z-50 place-content-between '>
       
       <div className='pt-6 flex'>
      <img src={friendbook} alt="" className='h-12 ml-6 ' />
      <div className='flex h-10  bg-white w-72 ml-6 py-2.5 rounded-full'>
        <input type="text" className='ml-4  focus:outline-0'/>
        <FaMagnifyingGlass className='ml-6'/>
      </div>
       </div>

       <div className=' flex py-auto gap-4 pb-10 mr-10 mt-6'>
        <div className='my-auto mr-2 pt-1.5'>
         <FaBell className='text-3xl text-yellow-500' onClick={handleNotification}/>
        </div>
        <div className="flex items-center pt-2  text-white">
            <div className="mr-5">
                <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                <img className="w-[40px] h-[40px] shrink-0 inline-block shadow-inner shadow-black rounded-full" src={userProfilePic ? `../public/images/${userProfilePic}` : `https://imgs.search.brave.com/IZ7MIsbaofm0u4O4wocApdZPKT_2d0pLsAfOl1Nr0Bg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/ZnJvbnQtc2lkZV8x/ODcyOTktMzk1OTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc`} alt="avatar image"/>
                </div>
            </div>
            <div className="mr-2 flex gap-2">
                <a href="javascript:void(0)" className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-xl font-medium dark:text-white text-secondary-inverse ">{username ?`Welcome ${username} `: `Welcome user`}</a>
                {/* <div><img src={love} className="w-6 pt-1 heartbeat" /></div> */}
            </div>
            </div> 
       </div>


      </div>

      {
        notification && 
      <div >
    <div  className="fixed z-10 inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4 overflow-y-auto" >
        
        <div className="px-6 py-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900"> Notification </h3>
        </div>
        <div className=' h-96 overflow-y-auto'>
        {
          notiFiData.map((item, index) => (
            <div key={index} >
            <div className='mx-10 my-4 flex justify-between '>
              <h1 className='text-2xl'>{item.message}</h1>
              <div className='my-auto'>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Accept</button>
                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reject</button>
              </div>
            </div>
            <hr className='mx-10'/>
            </div>
          ))
        }
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
          <button  type="button" onClick={handleNotification}> close </button>
        </div>
      </div>
    </div>
  </div>
        

      }
      

    </div>
  )
}

export default Navbar
