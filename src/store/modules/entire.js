import { createSlice } from '@reduxjs/toolkit'

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    entireList: [],
  },
  reducers: {
    changeEntireList(state, { payload }) {
      state.entireList = payload
    },
  },
})

export default entireSlice.reducer
