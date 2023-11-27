import React, { memo } from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderCenter from './HeaderCenter'
import HeaderRight from './HeaderRight'

const Header = memo(() => {
  return (
    <div className='flex items-center h-20 border-b-2'>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  )
})

export default Header