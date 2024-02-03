import { createSlice } from "@reduxjs/toolkit";
import allWords from "./words.json";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    words: allWords,
    activeWords: allWords,
    now: 0,
    card: undefined,
    random: false,
  },
  reducers: {
    showJ(state) {
      console.log(state.words[0].id);

      console.log(allWords);
    },
    nextCard(state) {
      state.card = state.words[state.now];
    },
  },
});

export const { showJ, nextCard } = cardSlice.actions;
export default cardSlice.reducer;
