interface IProps {
  flightClass: string
  selectedFlightClass: string
  updateSelectedFlightClass: React.Dispatch<React.SetStateAction<string>>
}

const FlightClass = ({ flightClass, selectedFlightClass, updateSelectedFlightClass }: IProps) => {
  return (
    <button onClick={() => updateSelectedFlightClass(flightClass.toLowerCase())} className={`rounded-full px-6 py-3 hover:bg-red-600 hover:font-bold transition hover:text-white ${selectedFlightClass === flightClass.toLowerCase() ? 'bg-red-600 text-white font-bold' : 'bg-gray-100 text-gray-500'}`}>{flightClass}</button>
  )
}

export default FlightClass