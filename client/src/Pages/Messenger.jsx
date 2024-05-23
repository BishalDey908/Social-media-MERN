import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

const Messenger = () => {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <div className="h-screen ml-[700px] py-[300px]">
      <a href="http://localhost:4000/" className="text-4xl text-gray-600">Click here to start a Chat</a>
    </div>
    </div>
  )
}

export default Messenger
