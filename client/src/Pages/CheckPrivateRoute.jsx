import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

import Create from "./Create";


const CheckPrivateRoute = () => {
    const [user,setUser] = useState("")
    useEffect(()=>{
        setUser(localStorage.getItem("username"))
    },[user])

    if(user){
        console.log(user)
        return <Create/>
    }else{
        return <div className="h-[100vh]">
        <div className="text-black flex place-content-center py-96 text-4xl">
         <h1 >Please Login to Access This Page</h1>
        </div>
        </div>
    }

    return (
        <>
        <Navbar />
        <Sidebar/>
        </>
     )
}


export default CheckPrivateRoute
