import React, { memo, useEffect } from 'react'
import request from '@/services'
import HomeBanner from './HomeBanner'

const Home = memo(() => {
  useEffect(() => {
    request.get({
      url: '/home/highscore'
    }).then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      <HomeBanner />
    </div>
  )
})

export default Home