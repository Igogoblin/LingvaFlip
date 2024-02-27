// import s from "./settingsCard.module";
// import { useSelector } from "react-redux";
// import { useState } from "react";

const SettingsThema = (prop) => {
  // let words = useSelector((state) => state.cards.words);
  // console.log(words);

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionClick = () => {
  //   setIsOpen(false);
  // };

  return (
    <div>
      <div>
        <button
        // onClick={toggleDropdown}
        >
          {prop.thema}
        </button>
      </div>
      {/* {isOpen && (
        <ul>
          {words.map((word) => (
            <li
              key={word.id}
              onClick={() => handleOptionClick(prop.option)}
            ></li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default SettingsThema;
