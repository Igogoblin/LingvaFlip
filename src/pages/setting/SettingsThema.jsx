import s from "./settingsCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setThema } from "../../store/cardSlice";
import { useState } from "react";

const SettingsThema = (prop) => {
  const dispatch = useDispatch();
  let words = useSelector((state) => state.cards.subjects);
  const [isChecked, setIsChecked] = useState(words.has(prop.thema));

  const checkThema = () => {
    dispatch(setThema({ [prop.thema]: isChecked }));
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
