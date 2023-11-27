import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'

const HeaderLeft = memo(() => {
  return (
    <div className='flex-1 ml-10 text-red-600 cursor-pointer'>
      <IconLogo />
    </div>
  )
})

export default HeaderLeft