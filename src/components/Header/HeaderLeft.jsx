import React, { memo } from 'react'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <div className="flex-1 ml-10 text-primary cursor-pointer">
      <IconLogo />
    </div>
  )
})

export default HeaderLeft
