import s from "./settingsCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setThema } from "../../store/cardSlice";
import { useState } from "react";

const SettingsThema = (prop) => {
  const dispatch = useDispatch();
  let words = useSelector((state) => state.cards.subjects);
  const [isChecked, setIsChecked] = useState(words.has(prop.thema));

  // console.log(words);
  // console.log(words.has(prop.thema));
  // const [isChecked,setIsChecked]= useState(false);
  const checkThema = (value) => {
    // console.log(prop.thema);
    // console.log(isChecked);
    // const mid = prop.thema;
    // const ourValue = { prop.thema: isChecked };
    dispatch(setThema({ [prop.thema]: isChecked }));
  };
  // const getChecked = (value) => {
  //   console.log("value", value);
  // }; nativeEvent.srcElement.disabled
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="check"
          id="shoose_thema"
          checked={isChecked}
          // checked={setIsChecked(!isChecked)}
          onChange={handleCheckboxChange}
          onClick={checkThema}
        />
        <button
          className={s.thema_item}
          // onClick={toggleDropdown}
        >
          {prop.thema}
        </button>
      </div>
    </div>
  );
};

export default SettingsThema;
