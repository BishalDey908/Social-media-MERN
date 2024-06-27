import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import rabbit from "./pic/A rabbit in a Chinese coat.jpg"
import robot from "./pic/full body of a high elf sci fi soldier wearing hea.jpg"
import girl from "./pic/Portrait of Rei Ayanami from Neon Genesis Evangeli.jpg"
import girl1 from "./pic/1990s beautiful blonde Supergirl.jpg"
import Card from './Components/Card'
import axios from 'axios'
import { MdVerified } from "react-icons/md";
import OnlineCard from './Components/OnlineCard'
import { FaVideo,FaSmile } from "react-icons/fa"
import { IoMdPhotos } from "react-icons/io";
import { FaGift } from "react-icons/fa6";
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Modal from './Components/Modal'





const Home = () => {
  const [postData,setPostData] = useState([])
  const [likes,setLikes] = useState(postData.likes)
  // const [postId,setPostId] = useState("")
  const [username,setUsername] = useState("")
  const [color,setColor] = useState(false)
  let [sharedUser,setSharedUser] = useState("")
  const[toggle,setToggle]=useState(false)
  const[seeStory,setSeeStory] = useState("")
  
  
  
  const handleToggle = (img) =>{
    setToggle(!toggle)
    setSeeStory(img)
    console.log(seeStory)
}




  // --------------------------
  // const [postname,setPostname] = useState("")
  // useEffect(()=>{
  //   console.log(postname,"this is post name")
  // },[postname,setPostname])
  
  const navigate = useNavigate()

  useEffect(()=>{
    setUsername(localStorage.getItem('username'))
    
  },[setUsername])


  useEffect(()=>{
    axios.get("https://social-media-mern-three.vercel.app/api/showPost")
    .then((e)=>{
      // console.log(e.data)
      setPostData(e.data)
    })
    .catch((err)=>{
      // console.log(err)
    })
  },[postData])

  const handleLike = async (elem) => {
    console.log(elem._id)
    try {
      const response = await axios.post(`https://social-media-mern-three.vercel.app/api/${elem._id}/like`,{username});
      setLikes(response.data.likes);
      console.log(response)
      if(response.data==="You have already liked this post")
      alert(response.data)
     if(response.data==="Post liked successfully")
     alert(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  
  

  const handleComment = (elem) =>{
    console.log("this is comment",elem)
    const postId = elem._id
    localStorage.setItem("postId",postId)
    // console.log(username,postId)
    navigate("/comment")
  }

  const handleSave = (elem) =>{
    let savePostUserName = localStorage.getItem("username")
    axios.post("https://social-media-mern-three.vercel.app/api/saved",{elem,savePostUserName})
    .then((res)=>{
      console.log("post saved")
      alert(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    setSharedUser(localStorage.getItem("username"))
  },[setSharedUser])


  const handleShare = (elem) =>{
     const date = new Date()
    const sharedTime = date.toLocaleString()
    console.log(sharedTime)
    let postname = elem.postName
    let img = elem.postImg
    let userPic = elem.userPic
    let username = elem.userName
    let modDate = elem.date
    console.log("this is image from share",img)

    axios.post("https://social-media-mern-three.vercel.app/api/sharePost",{img,postname,username,modDate,userPic,sharedUser,sharedTime})
    .then(()=>{
      alert("POST shared SUCCESS")
      // console.log(cookies)
      
    })
    .catch((err)=>{
      alert("POST NOT shared",err)
    })
  }
  
  
  
  

  return (
    <>
    <Navbar/>
    <Sidebar/>
    
    <div  className='h-[100%] ml-52 mt-20'>
      <section className='-mx-0 flex mt-[-25px] '>
      <div className='flex gap-3 pt-20 pl-28 '>
      <div className="relative  max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl cursor-pointer">
  <img
    src={robot}
    className="w-36 h-45 transition rounded-xl duration-300 ease-in-out hover:scale-110"
    alt="Louvre" 
    onClick={()=>handleToggle(robot)}
    />
</div>

<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl cursor-pointer">
  <img
    src={girl}
    className="w-36 h-45 transition rounded-xl duration-300 ease-in-out hover:scale-110"
    alt="Louvre" 
    onClick={()=>handleToggle(girl)}
    />
</div>

<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl cursor-pointer">
  <img
    src={rabbit}
    className="w-36 h-45 transition rounded-xl duration-300 ease-in-out hover:scale-110"
    alt="Louvre" 
    onClick={()=>handleToggle(rabbit)}
    />
</div>

<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl cursor-pointer">
  <img
    src={girl1}
    className="w-36 h-45transition rounded-xl duration-300 ease-in-out hover:scale-110 "
    alt="Louvre" 
    onClick={()=>handleToggle(girl1)}
    />
</div>
<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl cursor-pointer">
  <img
    src={girl1}
    className="w-36 h-45 transition rounded-xl duration-300 ease-in-out hover:scale-110 "
    alt="Louvre" 
    onClick={()=>handleToggle(girl1)}
    />
</div>
<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl cursor-pointer">
  <img
    src={rabbit}
    className="w-36 h-45 transition rounded-xl duration-300 ease-in-out hover:scale-110"
    alt="Louvre" 
    onClick={()=>handleToggle(rabbit)}
    />
</div>
<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl cursor-pointer">
  <img
    src={robot}
    className="w-36 h-45 transition rounded-xl duration-300 ease-in-out hover:scale-110"
    alt="Louvre" 
    onClick={()=>handleToggle(robot)}
    />
</div>
<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl cursor-pointer">
  <img
    src={robot}
    className="w-36 h-45 transition rounded-xl duration-300 ease-in-out hover:scale-110"
    alt="Louvre" 
    onClick={()=>handleToggle(robot)}
    />
</div>
    






        
        
      </div>
      {/* <img src={background} alt="" className='  h-96 ml-2 mb-10 ' /> */}
      
        <div className='fixed  right-0 top-0 pt-32  h-[100%]  w-80 text-black mr-4 z-80'>
        
          <div className='flex flex-col '>
          <div className=' rounded-2xl fixed h-2/4 w-44'>
          
        </div>
        
        <div className='bg-white   w-80 relative  rounded-2xl  shadow-2xl shadow-slate-600 z-50'>
        <h1 className='text-xl mt-5 flex place-content-center text-gray-600'>ONLINE</h1>
          <div className='my-4 ml-4 mx-2 h-80 overflow-y-auto'>
          <OnlineCard/>
          </div>
          </div>
         
            
          
          
          <div className='bg-pink-600 rounded-2xl mt-6 h-80  text-white pt-12 relative'> 
            <div className='mx-4 '>
            <div className='text-center'>
            <h1 className='text-2xl font-bold '>Birthdays</h1>
              <p className='font-bold'>Wishing him fast</p>
            </div>
              
              <img src={girl1} alt="" className='h-24 rounded-xl mx-auto my-2' />
              <div className='flex mt-4 gap-4'>
               <FaGift className='text-3xl text-white'/>
               <p className=''><span className='font-bold'>Tanushree Gharami</span> has their Birthday today</p>
              </div>
            </div>
            
          </div>
          </div>

        
        


        
       

        <div className='fixed bottom-0 ml-5 mb-5'>
        <ul className='flex gap-2 '>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>

        <p>© 2024 NOSEBOOK FROM BISHAL</p>
        </div>
        </div>
      </section>


      

        
      <div className='h-44 w-[500px] bg-white shadow-2xl shadow-gray-700 flex ml-[350px] my-4  rounded-3xl'>
      <div className=''>
      <div className='flex mx-6 my-6 gap-2'>
        <img className='w-[38px] h-[38px] mr-2 rounded-full' src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="" />
        <input type="text" className='h-12 w-[420px] bg-slate-200 rounded-full px-2 text-base pl-3 focus:outline-0' placeholder='Whats on your mind?' />
      </div>
      <hr className='mx-6 flex gap-5' />
        <div className='my-6 mx-24 flex gap-3 '>
        <div className='flex '>
          <FaVideo className='text-4xl text-red-400 '/>
          <h1 className='mx-2 my-1.5 text-black'>Live Video</h1>
          </div>

          <div className='flex'>
          <IoMdPhotos className='text-4xl text-green-400 '/>
          <h1 className='mx-2 my-1.5 text-black'>Post Photos</h1>
          </div>
          {/* FaSmile */}

          <div className='flex'>
          <FaSmile className='text-4xl text-yellow-400 cursor-pointer'/>
          <h1 className='mx-2 my-1.5 text-black'>Reaction</h1>
          </div>
        </div>
        </div>
        <div>
        </div>
        </div>



        <div>
      

{/* <!-- Modal toggle --> */}

{/* <!-- Main modal --> */}
{
    toggle && (
<div id="default-modal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed flex my-auto   z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm ">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white  shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center rounded-lg justify-between p-4 md:p-5  dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Story
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={handleToggle}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor"  stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="h-full w-full">
            <img
    src={seeStory}
    className="w-full h-full "
    alt="Louvre" />
            </div>
            {/* <!-- Modal footer --> */}
        </div>
    </div>
</div>

    )
}

    </div>



      <section className='pb-10 mx-[350px] '>
      {
        
        postData.reverse().map((elem,key)=>(
          // eslint-disable-next-line react/jsx-key
          <>
          <div key={key} className="bg-white shadow-2xl shadow-gray-600 rounded-xl w-[500px] mt-4 pb-2">
          {
            sharedUser &&
            <div className="flex items-center px-4 py-3 ">
      {/* <img className="h-16 w-16 rounded-full" src={elem.userPic}/> */}
      <div className="ml-3 ">
      <div className='flex gap-1'>
        <span className=" font-semibold antialiased block leading-tight text-xl text-gray-600" >{elem.sharedUser} </span>
        <span className="text-xl font-semibold antialiased block leading-tight text-blue-600">{elem.sharedUser ? <MdVerified className='text-lime-200'/>: "" } </span>
      </div>
      <span className="text-gray-600 text-xs block mt-1">{elem.sharedTime}</span>
      </div>
      </div> 


          }
          {
            elem.sharedUser ? <hr /> : ""
          }
          
    <div className="flex items-center px-4 py-3">
      <img className="h-16 w-16 rounded-full" src={`../public/images/${elem.userPic}`}/>
      
      
      <div className="ml-3 ">
      <div className='flex gap-1'>
        <span className=" font-semibold antialiased block leading-tight text-xl text-gray-600" >{elem.userName} </span>
        <span className="text-xl font-semibold antialiased block leading-tight text-blue-600"><MdVerified className='text-lime-200'/> </span>
      </div>
        <span className="text-gray-600 text-xs block mt-1">{elem.date}</span>
        
      </div>
    </div>
    <div className='flex place-content-center'>
    <div className="flex flex-col">
    <img src={``} alt="" srcset="" />
    <img src={`/public/images/${elem.postImg}`} alt="" />
    <span className="text-sm font-semibold antialiased block leading-tight my-2 mx-2 text-xl text-gray-600" >{elem.postName}</span>
    </div>
    </div>
    <div className="flex items-center justify-between mx-4 mt-3 mb-2">
      <div  className={`flex gap-5 cursor-pointer ${username? "block":"hidden"}`}>
        <svg fill="#666666"  height="24" viewBox="0 0 48 48" width="24" onClick={()=>handleLike(elem)}><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>

         

        <svg  fill="#666666" height="24" viewBox="0 0 48 48" width="24" onClick={()=>handleComment(elem)}><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd" ></path></svg>
        <svg onClick={()=>handleShare(elem)}  fill="#666666" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" ></path></svg>
      </div>
      <div className={`flex gap-5 cursor-pointer ${username? "block":"hidden"}`} onClick={()=>handleSave(elem)}>
        <svg fill="#666666" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" ></path></svg>
      </div>
    </div>
    <div className={`font-semibold text-sm mx-4 mt-2 mb-4 text-gray-600 ${username? "block":"hidden"}`}>{elem.likes} likes</div>
    
  </div>
  
          </>
        ))
      }
      

     
      
        
      </section>
      
    </div>

    </>
  )
}

export default Home
