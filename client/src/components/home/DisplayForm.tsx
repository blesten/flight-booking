import { FaChevronDown } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface IProps {
  title: string
  content: string
  Icon: IconType
}

const DisplayForm = ({ title, content, Icon }: IProps) => {
  return (
    <div>
      <p className='text-sm text-gray-500 mb-3'>{title}</p>
      <div className='rounded-full bg-gray-100 px-3 py-2 flex items-center gap-5 w-fit'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center'>
          <Icon className='text-gray-500' />
        </div>
        <p className='text-sm text-gray-500'>{content}</p>
        <div className='rounded-full bg-white w-7 h-7 flex items-center justify-center'>
          <FaChevronDown className='text-xs text-gray-500' />
        </div>
      </div>
    </div>
  )
}

export default DisplayForm