import { useSelector } from "react-redux";
import { useState } from "react";
import s from "./studied.module.css";

const ThemaStudied = (prop) => {
  let words = useSelector((state) => state.cards.words);
  let allWords = 0;
  let wordsCount = 0;
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

  const countWords = (wordsThema) => {
    words.forEach((element) => {
      if (element.subject === wordsThema) {
        allWords++;
        // here  false ============!!!!!!!!!!!!!!!!!!!!
        if (element.study === false) {
          wordsCount++;
        }
      }
    });
  };

  return (
    <div className={s.notUl}>
      <div className={s.thema_reset}>
        <span>
          <button onClick={toggleDropdown} className={s.for_button_thema}>
            {prop.thema}
          </button>
          {countWords(prop.thema)}({wordsCount} из {allWords})
        </span>
        <span>сбросить</span>
      </div>

      {isOpen && (
        <ul className={s.notUl}>
          {words.map((word) =>
            // here  false ============!!!!!!!!!!!!!!!!!!!!
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
