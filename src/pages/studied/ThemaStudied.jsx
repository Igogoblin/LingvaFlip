import { useSelector } from "react-redux";
import { useState } from "react";
import s from "./studied.module.css";

const ThemaStudied = (prop) => {
  let words = useSelector((state) => state.cards.words);
  console.log(words);

  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={s.notUl}>
      <div className={s.thema_reset}>
        <button onClick={toggleDropdown} className={s.for_button_thema}>
          {prop.thema}
        </button>
        <span>сбросить</span>
      </div>

      {isOpen && (
        <ul className={s.notUl}>
          {words.map((word) =>
            word.subject === prop.thema && word.study === false ? (
              <li
                key={word.id}
                onClick={() => handleOptionClick(prop.option)}
                className={s.word_place}
              >
                <span>{word.word}</span>
                <span>{word.translate}</span>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      )}

      {/* {selectedOption && <p>Selected Option: {selectedOption}</p>} */}
    </div>
  );
};

export default ThemaStudied;
