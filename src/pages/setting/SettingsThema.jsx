import s from "./settingsCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setThema } from "../../store/cardSlice";
// import { useState } from "react";

const SettingsThema = (prop) => {
  const dispatch = useDispatch();
  // const [isChecked, setIsChecked] = useState();
  // let words = useSelector((state) => state.cards.words);
  // console.log(words);
  // const [isChecked,setIsChecked]= useState(false);
  const checkThema = (value) => {
    console.log(value);
    dispatch(setThema(prop.thema));
  };
  // const getChecked = (value) => {
  //   console.log("value", value);
  // };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="check"
          id="shoose_thema"
          // checked={setIsChecked(!isChecked)}
          // onChange={getChecked(this)}
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
