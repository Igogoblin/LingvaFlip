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
    // subjects: new Set(),
    subjects: [],
    arrRandom: [],
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
      const ourThema = new Set(state.subjects);
      ourThema.add(action.payload);
      state.subjects = Array.from(ourThema);
    },
    delThema(state, action) {
      // state.subjects.delete(action.payload);
      const ourThema = new Set(state.subjects);
      // console.log(ourThema);
      ourThema.delete(action.payload);
      state.subjects = Array.from(ourThema);
    },
    generateRandom(state, action) {
      console.log(action);
      console.log("state.activeWords.length ", state.activeWords.length);
      const ourArray = state.activeWords.sort(() => Math.random() - 0.5);
      state.activeWords = [...ourArray];
    },
    setActiveWords(state) {
      console.log(state.activeWords);
      const ourThema = new Set(state.subjects);
      const activeWords = state.words.map((element) => {
        if (ourThema.size === 0) {
        }
        // console.log();
        // if(element.study===false){
        // }
      });
    },
    // studiedCards(state,action){}

    // showStudy(state){
    // const newArray = Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    // setRandomNumbers(newArray)
    // }
    // Settings -------------------------------------------------------------
    // random, localStorage
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
  delThema,
  generateRandom,
  setActiveWords,
} = cardSlice.actions;
export default cardSlice.reducer;
