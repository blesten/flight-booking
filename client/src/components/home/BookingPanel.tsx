import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md'
import { TbCalendarUp, TbCalendarDown } from 'react-icons/tb'
import { HiOutlineUserPlus } from 'react-icons/hi2'
import { GoArrowSwitch } from 'react-icons/go'
import { useState } from 'react'
import FlightClass from './FlightClass'
import DisplayForm from './DisplayForm'

const BookingPanel = () => {
  const [flightClass, setFlightClass] = useState('premium economy')

  return (
    <div className='bg-white py-4 px-6 rounded-md'>
      <div className='flex items-center gap-7 text-sm'>
        <FlightClass flightClass='Economy' selectedFlightClass={flightClass} updateSelectedFlightClass={setFlightClass} />
        <FlightClass flightClass='Premium Economy' selectedFlightClass={flightClass} updateSelectedFlightClass={setFlightClass} />
        <FlightClass flightClass='Business Class' selectedFlightClass={flightClass} updateSelectedFlightClass={setFlightClass} />
        <FlightClass flightClass='First Class' selectedFlightClass={flightClass} updateSelectedFlightClass={setFlightClass} />
      </div>
      <div className='mt-8 flex items-center justify-between'>
        <DisplayForm title='From' content='Los Angeles' Icon={MdFlightTakeoff} />
        <div className='cursor-pointer w-8 h-8 rounded-full bg-red-600 text-white mt-9 flex items-center justify-center'>
          <GoArrowSwitch />
        </div>
        <DisplayForm title='To' content='Los Angeles' Icon={MdFlightLand} />
        <DisplayForm title='Departure' content='18 Feb 2024' Icon={TbCalendarUp} />
        <DisplayForm title='Return' content='Book Date' Icon={TbCalendarDown} />
        <DisplayForm title='Passengers' content='4 Travelers' Icon={HiOutlineUserPlus} />        
        <button className='bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-sm self-end hover:bg-red-700 transition'>Search Now</button>
      </div>
    </div>
  )
}

export default BookingPanel