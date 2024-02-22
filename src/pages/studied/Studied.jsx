// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThemaStudied from "./ThemaStudied";
import s from "./studied.module.css";
import { resetAllCards } from "../../store/cardSlice";
// import { useState } from "react";

const Studied = () => {
  const studied = useSelector((state) => state.cards.words);
  const dispatch = useDispatch();

  console.log(studied);

  let count = [];

  studied.forEach((element) => {
    if (element.subject != count[count.length - 1]) count.push(element.subject);
  });
  console.log(count);

  return (
    <div>
      <div className={s.all_themas}>
        <h3>Список изученных слов</h3>
        <button onClick={() => dispatch(resetAllCards())}>
          Сбросить все карточки
        </button>
      </div>

      <>
        {count.map((el, index) => (
          <ThemaStudied thema={el} key={index} option={count} />
        ))}
      </>
    </div>
  );
};

export default Studied;
