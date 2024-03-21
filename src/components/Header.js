import React from 'react'
import { NETFLIX_LOGO } from '../Utils/constants'

const Header = () => {
  return (
    <div className='px-8 py-2 bg-gradient-to-b from-black'>
        <img src={NETFLIX_LOGO} alt="netflix_logo" className='w-44' />
    </div>
  )
}

export default Header