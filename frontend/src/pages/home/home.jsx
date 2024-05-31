import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/messageContainer"

const home = () => {
  return (
    <div className='flex sm:h-[450px]  md:h-[550px] rounded-lg overflow-hidden  bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      
        <Sidebar />
       <MessageContainer />
    </div>
  )
}

export default home
