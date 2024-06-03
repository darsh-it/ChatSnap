import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
      const [loading,setLoading] = useState(false)
      const {setAuthUser} = useAuthContext()

      const Login = async (username,password) =>{

        const success = handleInputErrors({username,password})
        if(!success) return;

         setLoading(true)
           try{
            console.log(username)
            console.log(password)
              const res = await fetch("/api/auth/login",{
                method :"POST",
                headers : {"Content-Type": "application/json"},
                body: JSON.stringify({username,password})
              })

              const data = await res.json()

             
              
              if(data.error) throw new Error(data.error)

              localStorage.setItem("chat-user",JSON.stringify(data))
              setAuthUser(data)


           }catch(error){
            toast.error(error.message)
           }finally{
            setLoading(false)
           }

      }

      return {loading,Login}
}

export default useLogin


function handleInputErrors({username,password}){
    if ( !username || !password )
        {
             toast.error("please fill all the fields")
             return false
    }    
    return true

}
