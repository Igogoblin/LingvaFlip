import { createSlice } from "@reduxjs/toolkit";
import allWords from "./words.json";
import { enableMapSet } from "immer";
enableMapSet();
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    words: localStorage.getItem("lingvaWords")
      ? JSON.parse(localStorage.getItem("lingvaWords"))
      : allWords,
    activeWords: localStorage.getItem("lingvaActiveWords")
      ? JSON.parse(localStorage.getItem("lingvaActiveWords"))
      : allWords,
    now: localStorage.getItem("lingvaNow")
      ? JSON.parse(localStorage.getItem("lingvaNow"))
      : 0,
    card: localStorage.getItem("lingvaCard"),
    // JSON.parse(localStorage.getItem("lingvaCard")),
    //localStorage.getItem("lingvaCard"),
    // allWords[0],
    // localStorage.getItem("lingvaCard")
    //   ? JSON.parse(localStorage.getItem("lingvaCard"))
    //   : allWords[0],
    // undefined,
    // allWords[0],
    random: localStorage.getItem("lingvaRandom")
      ? JSON.parse(localStorage.getItem("lingvaRandom"))
      : false,
    subjects: localStorage.getItem("lingvaSubjects")
      ? JSON.parse(localStorage.getItem("lingvaSubjects"))
      : [],
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
      state.card = t;
      console.log("сейчас в стейте в NOW вот такой индекс ", state.now);
      // localStorage.setItem("lingvaCard", JSON.stringify(state.card));
      saveCards();
    },
    notStudy(state, action) {
      const stud = state.activeWords.find((word) => word.id === action.payload);
      const studAll = state.words.find((word) => word.id === action.payload);
      stud.study = false;
      studAll.study = false;
      saveCards();
      // state.studied.delete(stud.subject, stud);
      // localStorage.setItem("lingvaWords", JSON.stringify(state.words));
      // localStorage.setItem(
      //   "lingvaActiveWords",
      //   JSON.stringify(state.activeWords)
      // );
      // localStorage.setItem(
      //   "lingvaCard",
      //   JSON.stringify(state.activeWords[state.now])
      // );
    },
    study(state, action) {
      const stud = state.activeWords.find((word) => word.id === action.payload);
      const studAll = state.words.find((word) => word.id === action.payload);
      stud.study = true;
      studAll.study = true;
      // console.log(stud);
      saveCards();
      // state.studied.set(stud.subject, stud);
      // localStorage.setItem("lingvaWords", JSON.stringify(state.words));
      // localStorage.setItem(
      //   "lingvaActiveWords",
      //   JSON.stringify(state.activeWords)
      // );
      // localStorage.setItem(
      //   "lingvaCard",
      //   JSON.stringify(state.activeWords.find((w) => w.id === state.now))
      // );
    },
    takeCard(state) {
      state.card = state.activeWords.find((w) => w.id === state.now);
      // localStorage.setItem("lingvaCard", JSON.stringify(state.card));
      saveCards();
    },
    changeNow(state) {
      state.now = state.now + 1;
      // localStorage.setItem("lingvaNow", JSON.stringify(state.now));
      saveCards();
    },
    resetAllCards(state) {
      state.words.forEach((element) => {
        if (element.study === true) {
          element.study = false;
        }
      });
      state.activeWords.forEach((element) => {
        console.log(element);
        if (element.study === true) {
          element.study = false;
        }
      });
      state.now = state.activeWords[0].id;
      // localStorage.setItem("lingvaWords", JSON.stringify(state.words));
      // localStorage.setItem(
      //   "lingvaActiveWords",
      //   JSON.stringify(state.activeWords)
      // );
      // localStorage.setItem("lingvaNow", JSON.stringify(state.now));
      // localStorage.setItem(
      //   "lingvaCard",
      //   JSON.stringify(state.activeWords[state.now])
      // );
      saveCards();
    },
    resetThema(state, action) {
      console.log(action.payload);
      state.words.forEach((word) => {
        if (word.subject === action.payload) {
          word.study = false;
        }
      });
      saveCards();
      // localStorage.setItem("lingvaWords", JSON.stringify(state.words));
      // localStorage.setItem(
      //   "lingvaActiveWords",
      //   JSON.stringify(state.activeWords)
      // );
      // localStorage.setItem(
      //   "lingvaCard",
      //   JSON.stringify(state.activeWords[state.now])
      // );
    },
    toggleCheckedRandom(state) {
      state.random = !state.random;
      // localStorage.setItem("lingvaRandom", JSON.stringify(state.random));
      saveCards();
    },
    setThema(state, action) {
      const ourThema = new Set(state.subjects);
      ourThema.add(action.payload);
      state.subjects = Array.from(ourThema);
      // localStorage.setItem("lingvaSubjects", JSON.stringify(state.subjects));
      saveCards();
      generateRandom();
    },
    delThema(state, action) {
      // state.subjects.delete(action.payload);
      const ourThema = new Set(state.subjects);
      // console.log(ourThema);
      ourThema.delete(action.payload);
      state.subjects = Array.from(ourThema);
      // localStorage.setItem("lingvaSubjects", JSON.stringify(state.subjects));
      saveCards();
      generateRandom();
    },
    generateRandom(state) {
      // console.log(action);
      // console.log("state.activeWords.length ", state.activeWords.length);
      let ourArray;
      setActiveWords(); // do activewords before do random
      if (!state.random) {
        console.log("when random is true");
        ourArray = state.activeWords.sort((a, b) => a - b);
      } else {
        console.log("random is false !!");
        ourArray = state.activeWords.sort(() => Math.random() - 0.5);
      }
      state.activeWords = [...ourArray];
      // localStorage.setItem(
      //   "lingvaActiveWords",
      //   JSON.stringify(state.activeWords)
      // );
      state.card = state.activeWords[state.now];
      state.now = state.activeWords[0].id;
      saveCards();
      // localStorage.setItem(
      //   "lingvaCard",
      //   JSON.stringify(state.activeWords[state.now])
      // );
      // localStorage.setItem("lingvaNow", JSON.stringify(state.now));
      // localStorage.setItem(
      //   "lingvaActiveWords",
      //   JSON.stringify(state.activeWords)
      // );
      // localStorage.setItem("lingvaRandom", JSON.stringify(state.random));
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
      saveCards();
      // localStorage.setItem("lingvaWords", JSON.stringify(state.words));
      // localStorage.setItem(
      //   "lingvaActiveWords",
      //   JSON.stringify(state.activeWords)
      // );
      // localStorage.setItem(
      //   "lingvaCard",
      //   JSON.stringify(state.activeWords[state.now])
      // );
    },
    saveCards(state) {
      localStorage.setItem("lingvaWords", JSON.stringify(state.words));
      localStorage.setItem(
        "lingvaActiveWords",
        JSON.stringify(state.activeWords)
      );
      localStorage.setItem("lingvaNow", JSON.stringify(state.now));
      localStorage.setItem("lingvaCard", JSON.stringify(state.card));
      localStorage.setItem("lingvaRandom", JSON.stringify(state.random));
      localStorage.setItem("lingvaSubjects", JSON.stringify(state.subjects));
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
  saveCards,
} = cardSlice.actions;
export default cardSlice.reducer;
