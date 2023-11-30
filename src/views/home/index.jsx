import React, { memo, useEffect } from 'react'
import HomeBanner from './HomeBanner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHomeDataAction } from '@/store/modules/home'
import Content from '@/components/Content'

const Home = memo(() => {
  // 从redux中获取home
  const { goodPriceInfo } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo
    }
  }, shallowEqual)
  console.log(goodPriceInfo)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeDataAction())
  }, [dispatch])

  return (
    <div>
      <HomeBanner />
      <div className='w-[1032px] mx-auto'>
        <Content title={goodPriceInfo.title} />
      </div>
    </div>
  )
})

export default Home