import React from 'react'
import img from "../assets/FREINDbook logo(dark).png"
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
    const Navigate = useNavigate()

    function handleClick(){
        Navigate('/home')
    }

  return (
    <div className='bg-slate-50 h-screen'>
      <div className='flex place-content-center '>
        <div>
            <div className='flex-col place-content-center mt-60'>
                <h4 className='text-4xl text-cyan-700 font-bold text-center'>Welcome to</h4>
                <div>
                <img className='h-70 ' src={img} alt="" />
               </div>
            </div>
            
        </div>
      </div>


       <div className='flex place-content-center'>
            <div className='flex  flex-col gap-20'>
                <div>
                    <h4 className='text-3xl text-cyan-700'>Make freinds online and express yourself</h4>
                </div>
                <div className='flex place-content-center'>
                    <button className=' w-80 h-14 bg-sky-200 rounded-3xl text-3xl text-teal-500 font-semibold' onClick={handleClick}>Continue</button>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default Firstpage
