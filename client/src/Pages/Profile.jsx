import React, { useEffect, useState } from 'react'

import { RiVerifiedBadgeFill } from "react-icons/ri";
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
const Profile = () => {

  const [username,setUsername] =useState("")
  const [userpic,setUserpic] =useState("")
  const [bio,setbio] =useState("")
  const [post,setPost] =useState([])
  const [postnumber,setPostNumber] =useState(0)
  const [toggle,setToggle]=useState(false)
  const [userBio,setUserBio]=useState("")

  const handleBio = () =>{
    console.log(userBio)
    axios.post("http://localhost:3000/api/updateBio",{username,userBio})
    .then((e)=>{
      console.log("update Bio",e.data)
      window.location.reload()
    })
    
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    setUsername(localStorage.getItem('username'))
    axios.post("http://localhost:3000/api/userPic",{username})
    .then((e)=>{
      console.log("this is for profilepic",e.data)
      setUserpic(e.data.profilePic)
      setbio(e.data.bio)
    })
    
    .catch((err)=>{
      // console.log(err)
    })
    
  },[username,bio])

  useEffect(()=>{
    axios.post("http://localhost:3000/api/userpost",{username})
    .then((e)=>{
      // console.log("Success to get user post",e.data)
      setPost(e.data)
      setPostNumber(e.data.length)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[username,post])
  
  const sendmessaage = (message) =>{
    alert(message)
  }

  const  handleClick = (post) =>{
    const pic = post.postImg
    const user=username 
    console.log(user)
    
      axios.post("http://localhost:3000/setuserpic",{pic,user})
      .then((e)=>{
        console.log("Userpic send success")
        sendmessaage(e.data)
        document.location.reload(true)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const handleDelete = (post) =>{
    const postName = post.postName;
    console.log(postName)
    axios.post("http://localhost:3000/api/deletePost",{postName,username})
      .then((e)=>{
        console.log("postId send success",e)
        // alert("post deleted")
      })
      .catch((err)=>{
        console.log("error",err)
      })
  }

  const handleButton = () =>{
    setToggle(!toggle)
  }


  return (
    <>
    <Sidebar />
    <Navbar />
     <div className='pt-10'>
      

      {
    toggle && (
<div id="default-modal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed flex my-auto   z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm ">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white  shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center rounded-lg justify-between p-4 md:p-5  dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit Bio
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={handleButton}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor"  stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className='px-8 h-[305px] py-2 shadow-2xl shadow-gray-600'>
            <div className="h-full w-full flex flex-col">
            {/* <input type=""  /> */}
            <textarea name="" id="" cols="30" rows="180" className='bg-slate-500 text-4xl' onChange={(e)=>setUserBio(e.target.value)}></textarea>
            <div className='my-4 mx-auto'>
            <button className='bg-yellow-600 px-4 py-2 ' onClick={handleBio}>Submit</button>
            </div>
            </div>
            </div>
            {/* <!-- Modal footer --> */}
        </div>
    </div>
</div>

    )
}


      <div className='h-[100%] text-white mt-24'>
      
        <section className='flex place-content-center mx-60 gap-10'>
           
           
            <img src={ `../public/images/${userpic}` } alt="" className='h-80 rounded-full w-80 shadow-2xl shadow-gray-600 hover:animate-ping hover:animate-once hover:animate-ease-linear' />
          
          <div className='py-20'>
          <div className='flex gap-96'>
          <div className='flex gap-2'>
          <h1 className='text-3xl text-gray-600'>{username}</h1>
          <RiVerifiedBadgeFill className='text-3xl text-blue-800'/>
          </div>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleButton}>Edit Bio</button>
          </div>
          <div className='flex gap-5 my-2 text-gray-600'>
            <p>Posts {postnumber}</p>
            <p>Followers 155</p>
            <p>Following  74</p>
          </div >
            <h2 className='text-gray-600'>{bio}</h2>
          </div>

          
        </section>
        <hr  className='mx-44 my-9 text-black'/>
        <section>
          <div className='flex place-content-center text-black'>
            <h1>Posts</h1>
          </div>
          <div className='flex place-content-center py-8 gap-6 flex-wrap mx-44'>
          {
          post.map((post,index)=>(
            <div key={index} className='hover:scale-110 transition-all duration-300  shadow-2xl shadow-black  bg-cyan-700 rounded-xl pb-10 my-4 mx-4 cursor-pointer'>
            <div  >
            <img  src={`../public/images/${post.postImg}`} alt="" className='h-[400px] rounded-xl ' />
            </div>
            {/* <button onClick={()=>handleDelete(post)}>Delete post</button> */}
            <div className='mt-10 flex flex-wrap place-content-center flex-col gap-2'>
            <a href="#_" className="relative inline-block px-4 py-3 h-12 text-center text-xl w-40 font-medium group" onClick={()=>handleDelete(post)}>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">Delete Post</span>
</a>

<a href="#_" className="relative inline-block px-4 py-3 h-12 text-center text-xl w-30 font-medium group" onClick={()=>handleClick(post)}>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">Set ProfilePic</span>
</a>
            </div>
            </div>
          
        ))
      }            
          </div>
        </section>
      </div>
    </div>
    </>
   
  )
}

export default Profile
