

const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://icons.iconarchive.com/icons/iconarchive/incognito-animals/256/Bear-Avatar-icon.png" alt="user image" />

            </div>
        </div>
        <div className="chat-bubble text-white  bg-blue-500" >Hi! What is Upp?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:45</div>
    </div>
  )
}

export default Message
