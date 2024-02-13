import { useState } from "react";
// import { nextCard } from "../../store/cardSlice";
import s from "./card.module.css";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextCard, notStudy, study } from "../../store/cardSlice";

function Card() {
  //{id,subject,word,translate}
  // const card = useSelector((state) => state.cards.words);
  const card = useSelector((state) => state.cards.activeWords);
  const c = useSelector((state) => state);

  let [count, setCount] = useState(0);
  let [ourCard, setOurCard] = useState(card[0]);
  const dispatch = useDispatch();
  console.log(card);

  function showCard() {
    let lengthArr = card.length;
    dispatch(study(ourCard.id));
    console.log("смотрим когда обновляется функция показать карточку");
    if (count < lengthArr) {
      setOurCard(card[count]);
      console.log("count", count);
      setCount(count++);
    }
    dispatch(nextCard());
    console.log("ourCard", ourCard);
  }
  function notStudied() {
    dispatch(notStudy(ourCard.id));
    dispatch(nextCard());
    console.log(c);
  }
  // function studied(){
  // dispatch(studied(ourCard.id))
  // }
  // double click is bracken
  return (
    <section>
      <div className={s.card_area}>
        <div className={s.card_box}>
          <h4>{ourCard.subject}</h4>
          <div className={s.card}>
            <div className={s.front}>{ourCard.word}</div>
            <div className={s.back}>{ourCard.translate}</div>
          </div>
          <div className={s.card_panel}>
            <button className={s.button_skip}>Пропустить</button>
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
