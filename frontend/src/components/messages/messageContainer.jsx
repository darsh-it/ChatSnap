import Messages from "./Messages"
import MessageInput from "./MessageInput"
import {TiMessages} from 'react-icons/ti'
import useConversation from "../../zustand/useConversation"
import { useEffect } from "react"

const messageContainer = () => {
   
     const {selectedConversation,setSelectedConversation} = useConversation();

     useEffect(()=>{

        //cleanup function
        return () => setSelectedConversation(null)
     },[setSelectedConversation])
  return (
    <>
    <div className="md:min-w-[450px] flex flex-col text-left">
         {!selectedConversation ? (<NoChatSelected />):(
            <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
             <span className='label-text'>To:</span>
             <span className="text-white font-bold ">{selectedConversation.fullName}</span>
        </div>
         <Messages />
         <MessageInput/></>)}
    </div>
    </>
  )
}

export default messageContainer


// eslint-disable-next-line react-refresh/only-export-components
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