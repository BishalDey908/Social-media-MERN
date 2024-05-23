import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Savepost from './Savepost'

const CheckPrivateRoute3 = () => {
     const [user,setUser] = useState("")
    useEffect(()=>{
        setUser(localStorage.getItem("username"))
    },[user])

    if(user){
        console.log(user)
        return <Savepost/>
            
    }else{
        return <div className="h-[100vh]">
        <div className="text-black flex place-content-center py-96 text-4xl">
         <h1  >Please Login to Access This Page</h1>
        </div>
        </div>
    }



}

export default CheckPrivateRoute3

