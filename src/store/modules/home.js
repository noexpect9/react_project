import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodData } from '@/services/modules/home'

export const getHomeDataAction = createAsyncThunk('getHomeData', async () => {
  const res = await getHomeGoodData()
  return res
})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
  },
  extraReducers: {
    [getHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    },
  },
})

export const { changeGoodPriceInfo } = homeSlice.actions
export default homeSlice.reducer
