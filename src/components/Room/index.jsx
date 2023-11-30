import React, { memo } from 'react'
import PropTypes from 'prop-types'

const RoomItem = memo((props) => {
  const { itemData } = props
  return (
    <div className="flex flex-wrap">
      {itemData.map((item) => {
        return (
          <div key={item.id} className="w-1/4 p-2">
            <div className="relative  py-[66.66%] px-8 pt-0">
              <img src={item.picture_url} alt="" className="absolute top-0 left-0 w-full h-full rounded-sm" />
            </div>
            <div>{item.name}</div>
            {/* <div>{item.bottomInfo.content}</div> */}
            <div>{item.price_format}</div>
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
