import { createSlice } from "@reduxjs/toolkit"

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // bannerList: [],
    // recommendList: []
  },
  reducers: {
    // changeBannerList(state, { payload }) {
    //   state.bannerList = payload
    // },
    // changeRecommendList(state, { payload }) {
    //   state.recommendList = payload
    // }
  }
})

export default homeSlice.reducer