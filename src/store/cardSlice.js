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
      console.log("state.card ", state.card);
    },
    notStudy(state, action) {
      const studied = state.activeWords.find((word) => {
        console.log(word);
        word.id === action.payload.id;
      });
      studied.study = false;
    },
  },
});

export const { showJ, nextCard, notStudy } = cardSlice.actions;
export default cardSlice.reducer;
