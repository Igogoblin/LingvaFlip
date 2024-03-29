import s from "./settingsCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCheckedRandom,
  generateRandom,
  setActiveWords,
} from "../../store/cardSlice";
import { useState } from "react";
import SettingsThema from "./SettingsThema";

function SettingCards() {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.cards.words);
  const test = useSelector((state) => state);
  // console.log("what we have in random :", test.cards.random);
  const [isAll, setIsAll] = useState(test.cards.random);
  console.log(test.cards.random);
  console.log("isAll ", isAll);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = () => {
    dispatch(setActiveWords());
    dispatch(toggleCheckedRandom());
    dispatch(generateRandom());
    setIsAll(test.cards.random);
  };
  let count = [];

  words.forEach((element) => {
    if (element.subject != count[count.length - 1]) count.push(element.subject);
  });

  return (
    <section className={s.section_setting}>
      <div className={s.wrapper_setting}>
        <h3>Настройка карточек</h3>
        <p className={s.settings_text}>
          Вы можете выбрать конкретную тему для изучения или не останавливаться
          на чем-то одном и изучать слова из разных тем одновременно:
        </p>
        <form className={s.check_area}>
          <input
            type="checkbox"
            className={s.checkrandom}
            onChange={handleCheckboxChange}
            checked={isAll}
          ></input>
          {/* {" "} */}
          <span>Все темы рандомно</span>
        </form>
        <div className={s.check_thema} onClick={togglePopup}>
          Доступные темы
        </div>

        {isOpen &&
          count.map((el, index) => (
            <SettingsThema
              key={index}
              thema={el}
              option={count}
            ></SettingsThema>
          ))}
      </div>
    </section>
  );
}

export default SettingCards;
