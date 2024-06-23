import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { useState } from 'react'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)

  return (
    <form className='w-full mt-7 overflow-auto h-[50vh] scrollbar'>
      <div className='mb-7'>
        <label htmlFor='name' className='text-sm'>Name</label>
        <input type='text' className='w-full outline-none border border-gray-300 rounded-md px-3 h-10 text-sm mt-3' />
      </div>
      <div className='mb-7'>
        <label htmlFor='email' className='text-sm'>Email</label>
        <input type='text' className='w-full outline-none border border-gray-300 rounded-md px-3 h-10 text-sm mt-3' />
      </div>
      <div className='mb-7'>
        <label htmlFor='password' className='text-sm'>Password</label>
        <div className='border border-gray-300 rounded-md flex h-10 px-3 items-center gap-3 mt-3'>
          <input type={showPassword ? 'text' : 'password'} className='flex-1 outline-none text-sm' />
          {
            showPassword
            ? <FaEyeSlash onClick={() => setShowPassword(false)} className='text-gray-400 cursor-pointer' />
            : <FaEye onClick={() => setShowPassword(true)} className='text-gray-400 cursor-pointer' />
          }
        </div>
      </div>
      <div className='mb-7'>
        <label htmlFor='passwordConfirmation' className='text-sm'>Password Confirmation</label>
        <div className='border border-gray-300 rounded-md flex h-10 px-3 items-center gap-3 mt-3'>
          <input type={showPasswordConfirmation ? 'text' : 'password'} className='flex-1 outline-none text-sm' />
          {
            showPasswordConfirmation
            ? <FaEyeSlash onClick={() => setShowPasswordConfirmation(false)} className='text-gray-400 cursor-pointer' />
            : <FaEye onClick={() => setShowPasswordConfirmation(true)} className='text-gray-400 cursor-pointer' />
          }
        </div>
      </div>
      <button className='rounded-full text-white text-sm w-full h-12 font-semibold bg-red-600 hover:bg-red-700 transition'>Sign Up</button>
    </form>
  )
}

export default SignUp