import React, { useState } from 'react'
import logo from "../assets/FREINDbook logo(dark).png"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twiter.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
const Login = () => {
    axios.defaults.withCredentials=true
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const isLoggedIn = true
        axios.post("http://localhost:3000/api/login",{username,password,isLoggedIn})
        .then((e)=>{
            console.log(e.data);
            if(e.data === "Login successfully"){
            alert(e.data)
            navigate("/home")
            localStorage.setItem("username",username)
            }
            if(e.data ==="Login unsuccessfully"){
                alert("Password Incorrect")
                navigate("/login")
            }if(e.data ==="Invalid Username or Password"){
                alert("Invalid Username or Password")
                navigate("/login")
            }if(e.data==="Invalid username or Password"){
                alert("Username incorrect")
            }
        })
        .catch((err)=>{
            console.log("Login error",err)
        })

    }
  return (

     <>
     
     <Sidebar />
     <div>
      <section className="bg-gray-100">
  <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      
      <div className=" w-full bg-white rounded-3xl  dark:border md:mt-0 sm:max-w-xl xl:p-10 shadow-2xl ">
          
      <a href="#" className="flex place-content-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-90 mt-7 p-10 " src={logo} alt="logo"/>
             
      </a>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8  ">
              <h1 className=" flex place-content-center text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Login
              </h1>
              <form className="space-y-4 md:space-y-6" method='POST' onSubmit={handleSubmit}>
              <div>
                      <label htmlFor="username" className="block mb-2 text-base font-normal text-gray-900 dark:text-white">Your Username</label>
                      <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-zinc-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" onChange={(e)=>setUsername(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-zinc-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  
                  {/* type="submit" */}
                  <div className=' flex flex-col place-content-center '>
                    <div className='flex place-content-center p-3 text-sm' >
                        <p>Forgot Password ? </p>
                    </div>
                  <button type="submit" className=" shadow-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-5 py-2.5 text-center me-2 mb-2 w-full">Submit</button>
                    <div className='flex place-content-center p-3  text-sm'>
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


                  </div>
                  <p className="flex place-content-center text-sm font-light text-gray-500 dark:text-gray-400">
                      Do not have an account? <Link to="/reg" className=" text-sky-600 underline font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
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

export default Login
