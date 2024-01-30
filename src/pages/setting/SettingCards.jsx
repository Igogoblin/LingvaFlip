import s from "./settingsCard.module.css";

function SettingCards() {
  return (
    <section className={s.section_setting}>
      <div className={s.wrapper_setting}>
        <h3>Настройка карточек</h3>
        <p className={s.settings_text}>
          Вы можете выбрать конкретную тему для изучения или не останавливаться
          на чем-то одном и изучать слова из разных тем одновременно:
        </p>
        <form className={s.check_area}>
          <input type="checkbox" className={s.checkRandom}></input>{" "}
          <span>Все темы рандомно</span>
        </form>
      </div>
    </section>
  );
}

export default SettingCards;
