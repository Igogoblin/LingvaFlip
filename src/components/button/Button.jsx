import s from "../footer/footer.module.css";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { showJ } from "../../store/cardSlice";
// import t from "../../store/words.json";

const Button = () => {
  // const dispatch = useDispatch();
  const test = useSelector((state) => state.cards);
  // console.log(t);
  function tes() {
    console.log(test);
  }
  return (
    <button
      className={s.button}
      onClick={tes}
      // onClick={tes}
    >
      Далее
    </button>
  );
};

export default Button;
