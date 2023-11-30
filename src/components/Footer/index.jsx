import React, { memo } from 'react'
import footerData from '@/assets/data/footer.json'

const Footer = memo(() => {
  return (
    <div className='mt-5 border-t-2 p-8'>
      <div className='w-[1080px] mx-auto'>
        <div className='flex'>
          {
            footerData.map(item => {
              return (
                <div className='flex-1' key={item.name}>
                  <div className='mb-4 font-bold'>{item.name}</div>
                  <div className='mt-2 text-[#767676]'>
                    {item.list.map(i => {
                      return <div className='cursor-pointer hover:text-[#FF385C]' key={i}>{i}</div>
                    })}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
})

export default Footer
