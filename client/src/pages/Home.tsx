import HomeNavbar from './../components/home/HomeNavbar'
import BookingPanel from './../components/home/BookingPanel'

const Home = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-full relative pointer-events-none'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/jumbotron.jpg`} alt='' className='w-full h-full absolute top-0 left-0' />
        <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.3)] w-full h-full' />
      </div>
      <div className='absolute top-0 left-0 p-10 w-full'>
        <HomeNavbar />
        <h1 className='mt-7 text-7xl font-semibold text-white leading-[6rem]'>Elevate Your <br /> Journey</h1>
      </div>
      <div className='absolute bottom-0 left-0 p-10 w-full'>
        <h1 className='text-gray-200 text-6xl font-semibold mb-8 text-right'>Simplify Your Flight</h1>
        <BookingPanel />
      </div>
    </div>
  )
}

export default Home