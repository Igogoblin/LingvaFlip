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

  const [isAll, setIsAll] = useState(test.cards.random);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  console.log(test.cards.random);
  // isChecked = useSelector();
  // const storedCheckboxState = JSON.parse(localStorage.getItem('checkboxState'));
  //   if (storedCheckboxState !== null) {
  //     dispatch(toggleCheckbox()); // Может потребоваться обновить хранилище Redux
  //   }
  // }, [dispatch]);

  const handleCheckboxChange = () => {
    dispatch(setActiveWords());
    setIsAll(dispatch(toggleCheckedRandom()));
    dispatch(generateRandom());

    console.log("for random : ");
    console.log(test);

    // localStorage.setItem("checkboxState", JSON.stringify(!isChecked));
  };
  let count = [];

  words.forEach((element) => {
    if (element.subject != count[count.length - 1]) count.push(element.subject);
  });
  // console.log(count);
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
            className={s.checkRandom}
            onChange={handleCheckboxChange}
            checked={isAll}
          ></input>{" "}
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
