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
        axios.post("https://social-media-mern-1usj.onrender.com/api/userPic",{username})
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
     axios.post("https://social-media-mern-1usj.onrender.com/api/showfriendrequests",{username})
      .then((e)=>{
        // console.log("this is for friend requests",e.data)
        setNotiFiData(e.data)
        console.log(notiFiData)
      })
      .catch((err)=>{
        console.log("error",err)
      })
    }

    

    const handleAccept = async(item) =>{
      const {sender,receaver,profilepic}=item
      console.log(sender,receaver,profilepic)
      try{
        const response = await axios.post("https://social-media-mern-1usj.onrender.com/api/accept",{sender,receaver,profilepic})
        if(response.data==="success"){
          alert("Friend request accepted")
          const sender =  item.sender
      const receaver =  item.receaver
      axios.post("https://social-media-mern-1usj.onrender.com/api/deletefriendrequests",{sender,receaver})
    .then(()=>{
      console.log("this friend request deleted")
    })
    .catch((err)=>{
      console.log("error",err)
    })
     window.location.reload()
        }
      }catch(err){
        console.log("error on accept friend request",err)
      }
    }

    const handledelete = (item) =>{
      const sender =  item.sender
      const receaver =  item.receaver
      axios.post("https://social-media-mern-1usj.onrender.com/api/deletefriendrequests",{sender,receaver})
    .then(()=>{
      console.log("this friend request deleted")
    })
    .catch((err)=>{
      console.log("error",err)
    })
    }
    
    const showfriendrequests = () =>{
      axios.post("https://social-media-mern-1usj.onrender.com/api/showfriendrequests",{username})
      .then((e)=>{
        // console.log("this is for friend requests",e.data)
        setNotiFiData(e.data)
      })
      .catch((err)=>{
        console.log("error",err)
      })
    }
    showfriendrequests()
    
    

    const requests = notiFiData.length


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
        <div className='my-auto mr-2  '>
         {/* <FaBell className='text-3xl text-yellow-500 cursor-pointer' onClick={handleNotification}/> */}

         <div className="relative " onClick={handleNotification}>
    <div className="absolute   bg-white w-6 h-6 rounded-full text-center">
       <span className="text-sm text-black p-1 ">{requests}</span>
    </div>
    <div className="p-2">
           <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="yellow"
        className="text-gray-600 w-10 h-8"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
        />
      </svg>
    </div>
  </div>


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
        <hr />
        {
          notiFiData.map((item, index) => (
            <div key={index} >
            <div className='mx-10 my-4 flex justify-between '>
            <div className='flex gap-2'>
              <img className='h-14 w-14 my-auto rounded-full' src={`../public/images/${item.profilepic}`} alt=""  />
              <h1 className='text-2xl my-auto'>{item.message}</h1>
            </div>
              <div className='my-auto'>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handleAccept(item)}>Accept</button>
                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handledelete(item)}>Reject</button>
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
