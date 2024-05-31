import Messages from "./Messages"
import MessageInput from "./MessageInput"
import {TiMessages} from 'react-icons/ti'

const messageContainer = () => {
    const noChatSelected = true;
  return (
    <>
    <div className="md:min-w-[450px] flex flex-col text-left">
         {noChatSelected ? (<NoChatSelected />):(
            <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
             <span className='label-text'>To:</span>
             <span className="text-white font-bold ">john doe</span>
        </div>
         <Messages />
         <MessageInput/></>)}
    </div>
    </>
  )
}

export default messageContainer


const NoChatSelected = () =>{
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-g md:text-xl text-gray-200 font-semibold felx flex-col items-center gap-2">
                <p>Welcome 👋  John Doe 😁</p>
                <p>Select a Chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl m-auto'/>

            </div>
        </div>
    )
}