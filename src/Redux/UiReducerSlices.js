import { createSlice } from "@reduxjs/toolkit";

const ImageChange = createSlice({
  name: "imageChanged",
  initialState: {

    img: 0,

  },
  reducers: {
    changeImgLayout: (state, action) => {
      state.img = action.payload;
    }
  }
})

export const { changeImgLayout } = ImageChange.actions;
export default ImageChange.reducer;