import React, { useState } from 'react'
import logo from "../assets/FREINDbook logo(dark).png" 
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twiter.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { FaFacebook } from 'react-icons/fa'

const Registration = () => {
    
    axios.defaults.withCredentials=true

    const[username, setUsername] = useState("")
    const[email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [profilepic, setProfilepic] = useState("")
    const navigare = useNavigate()

    console.log(username,email,password)

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3000/api/reg",{username,email,password})
        .then((e)=>{
            if(e.data==="User created successfully!"){
                alert(e.data);
                localStorage.setItem("username",username)
                navigare("/home")
            }else{
                alert(e.data)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
  return (
        <>
         
         <Sidebar />
        <div>
      <section className="bg-gray-100">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className=" w-full bg-white rounded-3xl  dark:border md:mt-0 sm:max-w-xl xl:p-10 shadow-2xl ">
      <a href="#" className="flex place-content-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-90 mt-7 p-10 " src={logo} alt="logo"/>
             
      </a>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 " >
              <h1 className=" flex place-content-center text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" method='POST' onSubmit={handleSubmit}>
              <div>
                      <label htmlFor="username" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Enter Your Username</label>
                      <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-zinc-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" onChange={(e)=>setUsername(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Enter Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-zinc-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Enter Your Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-zinc-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  
                  {/* type="submit" */}
                  <div className='flex place-content-center pt-5'>
                  <button type="submit" className=" shadow-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-5 py-2.5 text-center me-2 mb-2 w-full">Sign In</button>
                  </div>
                  
                    <div className='flex place-content-center  text-sm'>
                        <p>- Or Continue With -</p>
                    </div>

                    <div className='flex place-content-center'>
                        <div className='flex  '>
                            <div className='pr-10'>
                            <img className="w-12 " src={google} alt="logo"/>

                            </div>

                            <div className='pr-10'>
                            <img className="w-12 " src={facebook} alt="logo"/>

                            </div>

                            <div > 
                            <img className="w-14 " src={twitter} alt="logo"/>

                            </div>
                        </div>
                    </div>

                  <p className="flex place-content-center text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?  <Link to="/login" className=" underline font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600"> Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
        </>

    
  )
}

export default Registration
