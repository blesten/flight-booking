import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <form className='w-full mt-7'>
      <div className='mb-7'>
        <label htmlFor='email' className='text-sm'>Email</label>
        <input type='text' className='w-full outline-none border border-gray-300 rounded-md px-3 h-10 text-sm mt-3' />
      </div>
      <div className='mb-7'>
        <label htmlFor='password' className='text-sm'>Password</label>
        <div className='mt-3'>
          <div className='border border-gray-300 rounded-md flex h-10 px-3 items-center gap-3'>
            <input type={showPassword ? 'text' : 'password'} className='flex-1 outline-none text-sm' />
            {
              showPassword
              ? <FaEyeSlash onClick={() => setShowPassword(false)} className='text-gray-400 cursor-pointer' />
              : <FaEye onClick={() => setShowPassword(true)} className='text-gray-400 cursor-pointer' />
            }
          </div>
          <p className='text-xs text-gray-400 mt-2'>Forget password? Click <Link to='/' className='text-blue-500 hover:underline'>here</Link></p>
        </div>
      </div>
      <button className='rounded-full text-white text-sm w-full h-12 font-semibold bg-red-600 hover:bg-red-700 transition'>Sign In</button>
    </form>
  )
}

export default SignIn