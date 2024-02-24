import s from "./statistic.module.css";
const Statistic = () => {
  return (
    <section className={s.statistic_area}>
      <div className={s.wrapper_statistic}>
        <h4>Персональная статистика</h4>
        <div className={s.studied_words}>Изучено слов</div>
      </div>
    </section>
  );
};

export default Statistic;
