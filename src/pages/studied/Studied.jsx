// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThemaStudied from "./ThemaStudied";
import s from "./studied.module.css";
import { resetAllCards } from "../../store/cardSlice";
import { useState } from "react";
// import { useState } from "react";

const Studied = () => {
  const studied = useSelector((state) => state.cards.words);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  console.log(studied);

  let count = [];

  studied.forEach((element) => {
    if (element.subject != count[count.length - 1]) count.push(element.subject);
  });
  console.log(count);

  function resetAll() {
    dispatch(resetAllCards());
    togglePopup();
  }

  return (
    <section className={s.studied}>
      <div className={s.wrapper_studied}>
        <div className={s.all_themas}>
          <h3>Список изученных слов</h3>
          <button
            onClick={
              // () => dispatch(resetAllCards())
              togglePopup
            }
          >
            Сбросить все карточки
          </button>
        </div>
        {isOpen && (
          <div className={s.popup_overlay} onClick={togglePopup}>
            <div
              className={s.popup_content}
              onClick={(e) => e.stopPropagation()}
            >
              <img src="./assets/ExclamationCircle.svg" alt="attention" />
              <div>
                <h5>Сброс изученного матиала</h5>

                <p>
                  Если вы сбросите уже изученный материал, слова будут добавлены
                  в список изучаемых слов
                </p>
                <div className={s.resetButton}>
                  <button onClick={togglePopup}>Отмена</button>
                  <button onClick={resetAll}>Сбросить</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <>
          {count.map((el, index) => (
            <ThemaStudied thema={el} key={index} option={count} />
          ))}
        </>
      </div>
    </section>
  );
};

export default Studied;
