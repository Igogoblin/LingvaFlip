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
    subjects: new Set(),
    // studied: new Map(),
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
      // state.studied.delete(stud.subject, stud);
    },
    study(state, action) {
      const stud = state.activeWords.find((word) => word.id === action.payload);
      const studAll = state.words.find((word) => word.id === action.payload);
      stud.study = true;
      studAll.study = true;
      // console.log(stud);
      // state.studied.set(stud.subject, stud);
    },
    takeCard(state) {
      state.card = state.activeWords[state.now];
    },
    changeNow(state) {
      state.now = state.now + 1;
    },
    resetAllCards(state) {
      state.words.forEach((element) => {
        if (element.study === true) {
          element.study = false;
        }
      });
      state.activeWords.forEach((element) => {
        if (element.study === true) {
          element.study = false;
        }
      });
      state.now = 1;
    },
    resetThema(state, action) {
      console.log(action.payload);
      state.words.forEach((word) => {
        if (word.subject === action.payload) {
          word.study = false;
        }
      });
    },
    toggleCheckedRandom(state) {
      state.random = !state.random;
    },
    setThema(state, action) {
      // console.log(action);
      // console.log(action.payload);
      // console.log(Object.keys(action.payload)[0]);
      // console.log(Object.values(action.payload)[0]);
      // const ourThema = {
      //   [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
      // };
      // console.log(ourThema);
      // console.log(Object.values(action.payload)[0]);
      Object.values(action.payload)[0]
        ? state.subjects.delete(Object.keys(action.payload)[0])
        : state.subjects.add(Object.keys(action.payload)[0]);
      // state.subjects.add(ourThema);
      // console.log(state.subjects.has(Object.keys(action.payload)[0]));
    },

    // studiedCards(state,action){}

    // showStudy(state){
    // const newArray = Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    // setRandomNumbers(newArray)
    // }
    // Settings -------------------------------------------------------------
  },
});

export const {
  showJ,
  nextCard,
  notStudy,
  study,
  takeCard,
  changeNow,
  resetAllCards,
  resetThema,
  toggleCheckedRandom,
  setThema,
} = cardSlice.actions;
export default cardSlice.reducer;
