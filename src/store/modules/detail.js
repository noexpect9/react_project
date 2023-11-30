import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailList: [],
  },
  reducers: {
    changeDetailList(state, { payload }) {
      state.detailList = payload
    },
  },
})

export default detailSlice.reducer
