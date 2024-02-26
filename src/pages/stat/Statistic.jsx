import s from "./statistic.module.css";
import { useSelector } from "react-redux";
const Statistic = () => {
  const allWords = useSelector((state) => state.cards.words);

  const studFromAll = function () {
    let rezult = 0;
    for (let i = 0; i < allWords.length; i++) {
      if (allWords[i].study === true) {
        rezult++;
      }
    }
    return rezult;
  };
  const statisticWidth = (100 / allWords.length) * studFromAll() + "%";
  const styleBar = {
    backgroundColor: "#1890ff",
    width: statisticWidth,
    borderRadius: "8px",
  };
  return (
    <section className={s.statistic_area}>
      <div className={s.wrapper_statistic}>
        <h4>Персональная статистика</h4>
        <div className={s.studied_words}>
          <h5>Изучено слов</h5>
          <div className={s.progress}>
            <div className={s.progress_bar}>
              <div style={styleBar}></div>
            </div>
            <span>
              {studFromAll()} из {allWords.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
