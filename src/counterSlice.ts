import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    additional: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    subtraction: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload,
    }),
  },
});

export const { additional, subtraction } = counterSlice.actions;
export default counterSlice.reducer;
