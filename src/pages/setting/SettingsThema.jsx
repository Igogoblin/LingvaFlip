import s from "./settingsCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setThema } from "../../store/cardSlice";
// import { useState } from "react";

const SettingsThema = (prop) => {
  const dispatch = useDispatch();
  // let words = useSelector((state) => state.cards.words);
  // console.log(words);
  const checkThema = () => {
    dispatch(setThema(prop.thema));
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="check"
          id="shoose_thema"
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
