import React, { memo } from 'react'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const HeaderCenter = memo(() => {
  return (
    <div className="inline-block flex items-center justify-between border w-[500px] h-16 p-4 rounded-3xl cursor-pointer hover:shadow-lg">
      <div className="ml-5">搜索房源和体验</div>
      <div className="flex justify-center items-center rounded-full bg-primary text-white p-3"><IconSearchBar /></div>
    </div>
  )
})

export default HeaderCenter
