import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"


const signup = () => {

    const [inputs ,SetInputs] = useState({
        fullName:"",
        username : "",
        password:"",
        confirmPassword:"",
        gender:""
    })

    const {loading,Signup} = useSignup()

    const handleCheckboxChange = (gender) =>{

         SetInputs({...inputs,gender})
    }
    const handleSubmit = async (e) =>{
           
        e.preventDefault()
         await Signup(inputs)
    }
  return (
    <>
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 bg-green-400 shadow-md rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
               
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
                      SignUp <span className='text-blue-500'>chatSnap</span>
                  </h1>

            <form onSubmit={handleSubmit}>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter Full Name Here" className="w-full input input-bordered h-10" value={inputs.fullName} onChange={(e) => SetInputs({...inputs,fullName : e.target.value})}/>

                </div>

                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" value={inputs.username} onChange={(e) => SetInputs({...inputs,username : e.target.value})}/>
                </div>

                <div>
                <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                           </label>
                           <input type='password' placeholder='Enter Password' className="w-full input input-bordered h-10" value={inputs.password} onChange={(e) => SetInputs({...inputs,password : e.target.value})}/>
                </div>

                <div>
                <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                           </label>
                           <input type='password' placeholder='Re-Enter Password' className="w-full input input-bordered h-10" value={inputs.confirmPassword} onChange={(e) => SetInputs({...inputs,confirmPassword : e.target.value})}/>
                </div>
                        
                        <GenderCheckbox  onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                   <div>
                           <button className="btn btn-block btn-sm mt-3 border border-slate-700" disabled = {loading}> {loading ? <span className="loading loading-spinner"></span> : "SignUp"}
                           </button>
                     </div>

                <p className="text-lg text-white p-2"> Already have an account? <Link to='/login'className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">Login</Link></p>
                       
                 
            </form>
        </div>

        
      
    </div>
    </>
  )
}

export default signup





