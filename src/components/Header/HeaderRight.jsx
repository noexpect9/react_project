import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'

const HeaderRight = memo(() => {
  const [showMenu, setShowMenu] = useState(false)
  // 当showMenu为true时，点击其他地方关闭
  useEffect(() => {
    window.addEventListener('click', (e) => {
      setShowMenu(false)
    }, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex-1 flex justify-end items-center mr-10'>
      <div className='flex items-center'>
        <span className='mr-10 p-2 rounded-2xl hover:bg-slate-100 cursor-pointer'>登陆</span>
        <span className='mr-10 p-2 rounded-2xl hover:bg-slate-100 cursor-pointer'>注册</span>
        <span className='mr-10 p-2 rounded-2xl hover:bg-slate-100 cursor-pointer'><IconGlobal /></span>
      </div>
      <div className='relative flex justify-center items-center w-30 p-2 rounded-3xl border hover:shadow-xl cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
        <span className='mr-5'>
          <IconMenu />
        </span>
        <span>
          <IconAvatar />
        </span>
        {
          showMenu && <div className='absolute right-0 top-20 w-64 h-56 bg-white rounded-lg p-2 shadow-md'>
            <div className='p-2 hover:bg-slate-100'>注册</div>
            <div className='p-2 hover:bg-slate-100'>登陆</div>
            <hr />
            <div className='p-2 hover:bg-slate-100'>出租房源</div>
            <div className='p-2 hover:bg-slate-100'>开展体验</div>
            <div className='p-2 hover:bg-slate-100'>帮助</div>
          </div>
        }

      </div>
    </div>

  )
})

export default HeaderRight