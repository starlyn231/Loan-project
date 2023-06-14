import { createSlice } from "@reduxjs/toolkit";

const UiIdSlider= createSlice({
    name: 'uiId',
    initialState: {
      selectedId: null,
    },
    reducers: {
      selectedIdData: (state, action) => {
        state.selectedId = action.payload;
      },
      toggleModal: (state) => {
        state.openModal = !state.openModal; // Utiliza una negación para alternar el estado del modal
      },
    },
});

export const { selectedIdData,toggleModal } = UiIdSlider.actions;
export default UiIdSlider.reducer;