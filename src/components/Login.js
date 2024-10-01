import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {
  const [isSignInform,setIsSignForm] =useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const handleButtonClick = () =>{
    const message= checkValidData(email.current.value, name.current.value,password.current.value)

    setErrorMessage(message)
    
    
    
    


  }
  const toggleSignIn=()=>{
  setIsSignForm(!isSignInform)
  }

  return (
    <div>
     <Header/>
     <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg" alt="logo" />
     </div>
     <form 
     onSubmit={(e)=>e.preventDefault()}
     className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'   action="">
     <h1 className='font-bold text-3xl py-6'>{isSignInform ? "Sign In" : "Sign Up"}</h1>
      {!isSignInform && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'  />}
      <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
      <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
      <p className='text-red-500 font-bold text-lg py-2'>
        {errorMessage}
      </p>

      <button  className=' cursor-pointer p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInform ? "Sign In" : "Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInform ? "New to Netflix? Sign Up Now":"Already registered ? Sign In Now"}</p>
     </form>
    </div>
  )
}

export default Login