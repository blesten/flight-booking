import { Link } from 'react-router-dom'

const HomeNavbar = () => {
  return (
    <div className='flex bg-white rounded-md justify-between items-center py-4 px-6'>
      <div>
        <h1>Lorem</h1>
      </div>
      <div className='flex items-center gap-16'>
        <Link to='/' className='font-bold text-red-600'>Home</Link>
        <Link to='/' className='text-gray-400 hover:text-red-700 hover:font-bold'>Miles</Link>
        <Link to='/' className='text-gray-400 hover:text-red-700 hover:font-bold'>Services</Link>
        <Link to='/' className='text-gray-400 hover:text-red-700 hover:font-bold'>About Us</Link>
        <Link to='/' className='text-gray-400 hover:text-red-700 hover:font-bold'>Contact Us</Link>
      </div>
      <button className='rounded-full bg-red-600 text-white font-semibold text-sm px-8 py-3 hover:bg-red-700 transition'>Sign In</button>
    </div>
  )
}

export default HomeNavbar