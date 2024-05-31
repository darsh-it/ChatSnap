import GenderCheckbox from "./GenderCheckbox"


const signup = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 bg-green-400 shadow-md rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
               
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
                      SignUp <span className='text-blue-500'>chatSnap</span>
                  </h1>

            <form>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter Full Name Here" className="w-full input input-bordered h-10"/>
                </div>

                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"/>
                </div>

                <div>
                <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                           </label>
                           <input type='password' placeholder='Enter Password' className="w-full input input-bordered h-10" />
                </div>

                <div>
                <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                           </label>
                           <input type='password' placeholder='Re-Enter Password' className="w-full input input-bordered h-10" />
                </div>
                        
                        <GenderCheckbox />

                   <div>
                           <button className="btn btn-block btn-sm mt-3">SignUp
                           </button>
                     </div>

                <p className="text-lg text-white p-2"> Already have an account? <a href='#'className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">Login</a></p>
                       
                 
            </form>
        </div>

        
      
    </div>
    </>
  )
}

export default signup





