import { useState, useEffect } from 'react'
import SignIn from './../authentication/SignIn'
import SignUp from './../authentication/SignUp'

interface IProps {
  openAuthenticationOverlay: boolean
  setOpenAuthenticationOverlay: React.Dispatch<React.SetStateAction<boolean>>
  authenticationOverlayRef: React.MutableRefObject<HTMLDivElement>
}

const AuthenticationOverlay = ({ openAuthenticationOverlay, setOpenAuthenticationOverlay, authenticationOverlayRef }: IProps) => {
  const [authState, setAuthState] = useState('sign_in')

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openAuthenticationOverlay && authenticationOverlayRef.current && !authenticationOverlayRef.current.contains(e.target as Node)) {
        setOpenAuthenticationOverlay(false)
        setAuthState('sign_in')
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openAuthenticationOverlay, setOpenAuthenticationOverlay, authenticationOverlayRef])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.7)] z-10 flex items-center justify-center ${openAuthenticationOverlay ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition`}>
      <div ref={authenticationOverlayRef} className={`bg-white rounded-md w-1/3 p-5 ${openAuthenticationOverlay ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-16 pointer-events-none'} transition delay-100 flex flex-col items-center`}>
        <div className='w-20 h-20 bg-gray-200'></div>
        <h1 className='font-semibold text-xl mt-5'>{authState === 'sign_in' ? 'Sign In' : authState === 'sign_up' ? 'Sign Up' : 'Invalid State'}</h1>
        {
          authState === 'sign_in'
          ? <SignIn />
          : authState === 'sign_up'
            ? <SignUp />
            : 'Invalid State'
        }
        <div className='border-b border-gray-200 w-full mt-7 mb-3' />
        {
          authState === 'sign_in'
          ? <p className='text-xs text-gray-400'>Don&apos;t have an account? Sign up <span onClick={() => setAuthState('sign_up')} className='cursor-pointer text-blue-500 hover:underline'>here</span></p>
          : authState === 'sign_up'
            ? <p className='text-xs text-gray-400'>Already have an account? Sign in <span onClick={() => setAuthState('sign_in')} className='cursor-pointer text-blue-500 hover:underline'>here</span></p>
            : 'Invalid State'
        }
      </div>
    </div>
  )
}

export default AuthenticationOverlay