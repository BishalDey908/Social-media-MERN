import axios from "axios"
import { useEffect, useState } from "react"


const OnlineCard = () => {
    const [loginUsers,setLoginUsers] = useState([])

    useEffect(()=>{
        axios.get("https://social-media-mern-1usj.onrender.com/api/loginuser")
        .then((loginuser)=>{
            setLoginUsers(loginuser.data)
        })
        .catch((err)=>{
            console.log("Error to fetch loggedIn user",err)
        })
    },[loginUsers])

    // console.log(loginUsers)

  return (
    <div>
      {/* <!-- component --> */}
      {
        loginUsers.map((users,index)=>(
            <>
            <div key={index} className="pr-2 my-2 ">
  <div className="cursor-default select-none space-y-2 rounded-sm bg-[#f2f3f5] p-4 dark:bg-white  rounded-xl">
    <div className="flex items-center justify-between gap-16">
      <div className="flex items-center gap-4">
        <img src={`../public/images/${users.profilePic}`} alt="Discord" className="h-14 w-14 rounded-xl" draggable="false" />
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://discord.com"><h1 className="cursor-pointer font-normal text-[#060607] hover:underline dark:text-gray-700">{users.username}</h1></a>
          <div className="flex items-center justify-between gap-3 text-xs py-2">
            <p className="text-[#80848e]">
              <span className="inline-flex"
                ><svg className="h-[11px] w-[11px] fill-[#02fb6a] " strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05z"></path></svg
              ><p className="ml-2 text-s text-gray-700">Online</p></span>
              
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
            </>
        ))
      }

    </div>
    
  )
}

export default OnlineCard
