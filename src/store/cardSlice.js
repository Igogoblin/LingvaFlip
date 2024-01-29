import { createSlice } from "@reduxjs/toolkit";
import allWords from "./words.json";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    words: [...allWords],
  },
  reducers: {
    showJ(state) {
      console.log(state);
    },
  },
});

export const { showJ } = cardSlice.actions;
export default cardSlice.reducer;
