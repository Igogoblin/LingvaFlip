import s from "./settingsCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setThema, delThema } from "../../store/cardSlice";
import { useState } from "react";

const SettingsThema = (prop) => {
  const dispatch = useDispatch();
  let words = useSelector((state) => state.cards.subjects);
  const subjectsArray = new Set(words);
  // const [isChecked, setIsChecked] = useState(words.has(prop.thema));
  const [isChecked, setIsChecked] = useState(subjectsArray.has(prop.thema));

  const checkThema = () => {
    //console.log({ [prop.thema]: isChecked });
    if (isChecked) {
      //console.log(isChecked);
      dispatch(delThema(prop.thema));
    } else {
      //console.log(isChecked);
      dispatch(setThema(prop.thema));
    }
    console.log(words);
    // dispatch(setThema({ [prop.thema]: isChecked }));
  };

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
          onChange={handleCheckboxChange}
          onClick={checkThema}
        />
        <button className={s.thema_item}>{prop.thema}</button>
      </div>
    </div>
  );
};

export default SettingsThema;
