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
         <FaBell className='text-3xl text-yellow-500'/>
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
    </div>
  )
}

export default Navbar
