import s from "./statistic.module.css";
import { useSelector } from "react-redux";
const Statistic = () => {
  const allWords = useSelector((state) => state.cards.words);
  const styleBar = {
    backgroundColor: "#1890ff",
    width: "allWords/2",
    borderRadius: "2px",
  };
  return (
    <section className={s.statistic_area}>
      <div className={s.wrapper_statistic}>
        <h4>Персональная статистика</h4>
        <div className={s.studied_words}>
          Изучено слов
          <div style={styleBar}>{allWords.length}</div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
