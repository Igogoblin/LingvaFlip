import { createSlice } from "@reduxjs/toolkit";
import allWords from "./words.json";
import { enableMapSet } from "immer";
enableMapSet();
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    words: allWords,
    activeWords: allWords,
    now: 1,
    card: undefined,
    random: false,
    studied: new Map(),
    // studied: [],
  },
  reducers: {
    showJ(state) {
      console.log(state.words[0].id);

      console.log(allWords);
    },
    nextCard(state) {
      // const card = state.activeWords.find((word, index) => index === state.now);
      const t = state.activeWords.find((word, index) => index === state.now);
      // console.log(t);
      state.card = t;
    },
    notStudy(state, action) {
      const stud = state.activeWords.find((word) => word.id === action.payload);
      const studAll = state.words.find((word) => word.id === action.payload);
      stud.study = false;
      studAll.study = false;
      state.studied.delete(stud.subject, stud);
    },
    study(state, action) {
      const stud = state.activeWords.find((word) => word.id === action.payload);
      const studAll = state.words.find((word) => word.id === action.payload);
      stud.study = true;
      studAll.study = true;
      console.log(stud);
      state.studied.set(stud.subject, stud);
    },
    takeCard(state) {
      state.card = state.activeWords[state.now];
    },
    changeNow(state) {
      state.now = state.now + 1;
    },
    // studiedCards(state,action){}

    // showStudy(state){

    // }
    // Settings -------------------------------------------------------------
  },
});

export const { showJ, nextCard, notStudy, study, takeCard, changeNow } =
  cardSlice.actions;
export default cardSlice.reducer;
