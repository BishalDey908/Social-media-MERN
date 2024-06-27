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
  const [friendCount,setFriendCount]=useState("")
  const[friendList,setFriendList]=useState([])

  // const handleBio = () =>{
  //   console.log(userBio)
  //   axios.post("http://localhost:3000/api/updateBio",{username,userBio})
  //   .then((e)=>{
  //     console.log("update Bio",e.data)
  //     window.location.reload()
  //   })
    
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // }

  useEffect(()=>{
    setUsername(localStorage.getItem('username'))
    axios.post("http://localhost:3000/api/userPic",{username})
    .then((e)=>{
      console.log("this is for profilepic",e.data)
      setUserpic(e.data.profilePic)
      setbio(e.data.bio)
    })
    
    .catch((err)=>{
      
    })
    
  },[username])

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

  useEffect(()=>{
    axios.post("http://localhost:3000/api/showFriends",{username})
    .then((data)=>{
      const resData = data.data
      // console.log(resData)
      setFriendCount(resData)
    })
    .catch((err)=>{
      console.log("Error to catch friends",err)
    })
  },[username,post])
  
  const sendmessaage = (message) =>{
    alert(message)
  }

  const  SetProfilePic = (post) =>{
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

  // const showFriends = () =>{
    
  // }
  

  const handleButton = () =>{
    setToggle(!toggle)
    const username = localStorage.getItem("username")
    console.log(username)
    axios.post("http://localhost:3000/api/showFriendList",{username})
      .then((e)=>{
        console.log(e.data)
        setFriendList(e.data)
        // console.log(friendList)
      })
      .catch((err)=>{
        console.log("error in fetching friends",err)
      })
  }

  const handleUnfriend = (item) =>{
    const sender = item.senderName
    console.log(sender)
    axios.post("http://localhost:3000/api/unFriend",{sender})
      .then((e)=>{
        if(e.data==="success")
        alert("unfriend")
      window.location.reload()
      })
      .catch((err)=>{
        console.log("error in fetching friends",err)
      })
  }

  // const data = () =>{

  //   let username = localStorage.getItem("username")
    
  //   axios.post("http://localhost:3000/api/showFriendList",{username})
  //       .then((e)=>{
  //         // console.log(e.data)
  //         setFriendList(e.data)
  //         // console.log(friendList)
  //       })
  //       .catch((err)=>{
  //         console.log("error in fetching friends",err)
  //       })
  // }
  // data()


  return (
    <>
    <Sidebar />
    <Navbar />
     <div className='pt-10'>
      

      

{
        toggle && 
      <div >
    <div  className="fixed z-10 inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4 overflow-y-auto" >
        
        <div className="px-6 py-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900"> Notification </h3>
        </div>
        <div className=' h-96 overflow-y-auto'>
        <hr />
          {/* checktypeArray(friendList) && */}
        {
          friendList.map((item, index) => (
            <div key={index} >
            <div className='mx-10 my-4 flex justify-between '>
            <div className='flex gap-2'>
              <img className='h-14 w-14 my-auto rounded-full' src={`../public/images/${item.profilepic}`} alt=""  />
              <h1 className='text-2xl my-auto'>{item.senderName}</h1>
            </div>
              <div className='my-auto'>
              <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>handleUnfriend(item)}>Unfriend</button>
              </div>
            </div>
            <hr className='mx-10'/>
            </div>
            
          ))
        }
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
          <button  type="button" onClick={handleButton}> close </button>
        </div>
      </div>
    </div>
  </div>
        

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
          {/* <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleButton}>Edit Bio</button> */}
          </div>
          <div className='flex gap-5 my-2 text-gray-600'>
            <p>Posts {postnumber}</p>
            <p>Followers 155</p>
            <p onClick={handleButton}>Friends {friendCount}</p>
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

<a href="#_" className="relative inline-block px-4 py-3 h-12 text-center text-xl w-30 font-medium group" onClick={()=>SetProfilePic(post)}>
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
