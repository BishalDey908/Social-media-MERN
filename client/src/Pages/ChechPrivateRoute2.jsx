import { useEffect, useState } from "react"
import Create from "./Create"
import Profile from "./Profile"

const ChechPrivateRoute2 = () => {
  
    const [user,setUser] = useState("")
    useEffect(()=>{
        setUser(localStorage.getItem("username"))
    },[user])

    if(user){
        console.log(user)
        return <Profile/>
            
    }else{
        return <div className="h-[100vh]">
        <div className="text-black flex place-content-center py-96 text-4xl">
         <h1 >Please Login to Access This Page</h1>
        </div>
        </div>
    }
}

export default ChechPrivateRoute2
