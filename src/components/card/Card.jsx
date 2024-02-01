import s from "./card.module.css";
// import { useState } from "react";

function Card() {
  // const [isFlipped, setFlipped] = useState(false);

  // const handleCardClick = () => {
  //   setFlipped(!isFlipped);
  // };

  return (
    <section>
      <div className={s.card_area}>
        <div className={s.card_box}>
          <h4>Thema</h4>
          <div
            // className={`card_${isFlipped ? "flipped" : ""}`}
            // onClick={handleCardClick}
            className={s.card}
          >
            this is Card
            <div className={s.front}>Front</div>
            <div className={s.back}>Back</div>
          </div>
          <div className={s.card_panel}>
            <button className={s.button_skip}>Пропустить</button>
            <div className={s.card_buttons}>
              <button className={s.button_know}>Не знаю</button>
              <button className={s.button_dont}>Знаю</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
