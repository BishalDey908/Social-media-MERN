import { useEffect, useState } from "react"
import ProfileCard from "../Components/ProfileCard"
import axios from "axios"
import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import { RiH1 } from "react-icons/ri"
import { FaMagnifyingGlass } from "react-icons/fa6"

const Search = () => {
  
  // const [searchQuerry,setSearchQuerry] = useState("")
  const [userData,setUserData] = useState([])

  const handleButton = (e) =>{
    const searchQuerry = e.target.value
    axios.post("http://localhost:3000/api/search",{searchQuerry})
    .then((e)=>{
      // console.log(e.data)
      setUserData(e.data)
      if(e.data === "No such user exists!"){
        alert(e.data);
      }
    })
    .catch((err)=>{
      console.log("error in search",err)
    })
    // console.log(searchQuerry)
  }


  
   
    

  

  

  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="h-[100vh] px-48 mt-32">
      
      
      

    <div className="flex  rounded-xl mt-4 shadow-md shadow-black ">
    <div className="bg-white ">
    <FaMagnifyingGlass className='ml-6 mt-4 text-2xl text-cyan-700'/>
    </div>
    <input className="w-full rounded p-2 h-14 pl-4 focus:outline-0 bg-white" type="text" placeholder="find your friends" name="searchQuerry" onChange={handleButton}/>
    </div>


    <div className="flex flex-wrap place-content-center gap-4 mt-6">
      {
        
        userData.map((data)=>(

         // eslint-disable-next-line react/jsx-key
         <ProfileCard userdata={data} />
        )) 
      }
    </div>
    </div>
    </>
    
    
  )
}

export default Search
