import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "../skeletons/messageSkeleton";
import { useEffect, useRef } from "react";

const Messages = () => {
   
    const {messages,loading} = useGetMessages();

    const lastMessageRef = useRef();

    useEffect(()=> {
      setTimeout(()=>{lastMessageRef.current?.scrollIntoView({behavior : "smooth"});
    },100);
    },[messages])
      
  return (
    <div className="px-4 flex-1 overflow-auto">

      {!loading && messages.length > 0  && messages.map((message)=>(
         <div key={message._id} ref ={lastMessageRef}>
        <Message key={message._id} message={message}/>
        </div>
      ))}
       {loading && [...Array(3)].map((_,idx)=> <MessageSkeleton key={idx}/>)}  

       {!loading && messages.length === 0 && (
        <p className="text-center ">Send message to start the Conversation</p>
       )}
    </div>
  )
}

export default Messages
