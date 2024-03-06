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
    card: localStorage.getItem("lingvaCard")
      ? JSON.parse(localStorage.getItem("lingvaCard"))
      : undefined,
    random: false,
    subjects: [],
  },
  reducers: {
    showJ(state) {
      // console.log(state.words[0].id);
      // console.log(state.activeWords);
      // console.log("subjects ", state.subjects);
      // console.log(state.scope);
    },
    nextCard(state) {
      // const card = state.activeWords.find((word, index) => index === state.now);
      const t = state.activeWords.find((word, index) => index === state.now);
      // console.log(t);
      state.card = t;
      // localStorage.setItem("lingvaCard",JSON.stringify(state.card));
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
    generateRandom(state) {
      // console.log(action);
      // console.log("state.activeWords.length ", state.activeWords.length);
      let ourArray;
      if (state.random) {
        ourArray = state.activeWords.sort(() => Math.random() - 0.5);
      } else {
        ourArray = state.activeWords.sort();
      }
      state.activeWords = [...ourArray];
    },
    setActiveWords(state) {
      const ourThema = new Set(state.subjects);
      const active = state.words.filter((element) => {
        if (ourThema.size === 0 && element.study === false) {
          return element;
        }
        if (ourThema.has(element.subject) && element.study === false) {
          return element;
        }
      });
      state.activeWords = [...active];
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
