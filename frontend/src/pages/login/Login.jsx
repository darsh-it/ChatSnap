
const login = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      
        <div className='w-full p-6 bg-green-400 shadow-md rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login <span className='text-blue-500'>chatSnap</span>
                </h1>
                
                <form >
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter Username' className="w-full input input-bordered h-10" />

                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter Password' className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <button className="btn btn-block btn-sm mt-6">Login
                        </button>
                    </div>
                    <p className="text-lg text-white p-2"> {"Don't"} have an account? <a href='#'className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">SignUp</a></p>
                     
                </form>
        </div>
    </div>
    </>
  )
}

export default login

//STARTER CODE FOR THIS FILE

// const login = () => {
//     return (
//       <>
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        
//           <div className='w-full p-6 bg-green-400 shadow-md rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                   <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                       Login <span className='text-blue-500'>chatSnap</span>
//                   </h1>
                  
//                   <form >
//                       <div>
//                           <label className='label p-2'>
//                               <span className='text-base label-text'>Username</span>
//                           </label>
//                           <input type='text' placeholder='Enter Username' className="w-full input input-bordered h-10" />
  
//                           <label className='label p-2'>
//                               <span className='text-base label-text'>Password</span>
//                           </label>
//                           <input type='password' placeholder='Enter Password' className="w-full input input-bordered h-10" />
//                       </div>
  
//                       <div>
//                           <button className="btn btn-block btn-sm mt-6">Login
//                           </button>
//                       </div>
//                       <p className="text-lg text-white p-2"> {"Don't"} have an account? <a href='#'className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">SignUp</a></p>
                       
//                   </form>
//           </div>
//       </div>
//       </>
//     )
//   }
  
//   export default login
  
