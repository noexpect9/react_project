import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Rate } from 'antd'

const RoomItem = memo((props) => {
  const { itemData } = props
  return (
    <div className="flex flex-wrap">
      {itemData.slice(0, 8).map((item) => {
        return (
          <div key={item.id} className="w-1/4 p-2">
            <div className="relative py-[66.66%] px-8 pt-0">
              <img src={item.picture_url} alt="" className="absolute top-0 left-0 w-full h-full rounded-sm" />
            </div>
            <div className="text-[#767676]">{item.verify_info.messages}</div>
            <div className="line-clamp-2">{item.name}</div>
            <div>
              {item.price_format}
              /晚
            </div>
            <div className="flex items-center">
              <Rate disabled className="text-xs text-green-800 ml-0" value={item.star_rating ?? 5} />
              <div className="ml-1">
                {item.reviews_count}
                {' '}
                -
                {' '}
                {item.bottom_info?.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.array,
}

export default RoomItem
