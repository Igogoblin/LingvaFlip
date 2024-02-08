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
      const stud = state.activeWords.find((word) => word.id === action.payload);
      const studAll = state.words.find((word) => word.id === action.payload);
      stud.study = false;
      studAll.study = false;
    },
    study(state, action) {
      const stud = state.activeWords.find((word) => word.id === action.payload);
      const studAll = state.words.find((word) => word.id === action.payload);
      stud.study = true;
      studAll.study = false;
    },
    // Settings -------------------------------------------------------------
  },
});

export const { showJ, nextCard, notStudy, study } = cardSlice.actions;
export default cardSlice.reducer;
