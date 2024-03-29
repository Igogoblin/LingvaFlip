import { useState } from "react";
import s from "./card.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  nextCard,
  notStudy,
  study,
  takeCard,
  changeNow,
} from "../../store/cardSlice";

function Card() {
  // сделано через промежуточное обновление каунта, которое перебирает активные слова, а надо попробовать через саму карточку в стейте

  // это блок с использованием стейта промежуточного каунта -----------------------
  const card = useSelector((state) => state.cards.activeWords);
  const c = useSelector((state) => state.cards.card);
  const test = useSelector((state) => state);
  let [count, setCount] = useState(1);
  let [ourCard, setOurCard] = useState(card[0]);
  const dispatch = useDispatch();
  // console.log(card);
  console.log(c);
  console.log(card);
  console.log(ourCard);
  console.log(localStorage.getItem("lingvaCard"));
  if (c === undefined) {
    dispatch(takeCard());
  }
  // блок промежуточного каунта --------------------------------------------------------
  // check all function
  function showCard() {
    let lengthArr = card.length;
    dispatch(study(ourCard.id));
    // console.log("смотрим когда обновляется функция показать карточку");
    if (count < lengthArr) {
      c ? setOurCard(c) : card[count];
      // setOurCard(card[count]);
      console.log("count", count);
      setCount(count++);
      dispatch(nextCard());
      dispatch(changeNow());
    }
    console.log(test);
    console.log("ourCard", ourCard);
  }
  function notStudied() {
    let lengthArr = card.length;
    if (count < lengthArr) {
      c ? setOurCard(c) : card[count];
      // setOurCard(card[count]);
      console.log("count", count);
      setCount(count++);
      dispatch(notStudy(ourCard.id));
      dispatch(nextCard());
      dispatch(changeNow());
    }
    // console.log(c);
  }

  function miss() {
    console.log("count ", count);
    console.log("outCard ", ourCard);
    let lengthArr = card.length;
    if (count < lengthArr) {
      console.log("we a here and it will be work");
      c ? setOurCard(c) : card[count];
      dispatch(nextCard());
      dispatch(changeNow());
      setCount(count++);
    }
  }
  // console.log(card);
  // maybe join two function in one !!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <section>
      <div className={s.card_area}>
        <div className={s.card_box}>
          {console.log(ourCard)}
          <h4 className={s.card_thema}>{ourCard.subject}</h4>
          <div className={s.card}>
            <div className={s.front}>
              <span>{ourCard.word}</span>
            </div>
            <div className={s.back}>
              <span>{ourCard.translate}</span>
            </div>
          </div>
          <div className={s.card_panel}>
            <button className={s.button_skip} onClick={miss}>
              Пропустить
            </button>
            <div className={s.card_buttons}>
              <button
                className={s.button_know}
                // onClick={dispatch(
                //   notStudy(
                //     {ourCard.id}
                //     /*id*/
                //   )
                // )}
                onClick={notStudied}
              >
                Не знаю
              </button>
              <button onClick={showCard} className={s.button_dont}>
                Знаю
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
