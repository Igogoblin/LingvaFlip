import s from "./card.module.css";
// import { useState } from "react";

function Card() {
  // const [isFlipped, setFlipped] = useState(false);

  // const handleCardClick = () => {
  //   setFlipped(!isFlipped);
  // };

  return (
    <div
      // className={`card_${isFlipped ? "flipped" : ""}`}
      // onClick={handleCardClick}
      className={s.card}
    >
      this is Card
      <div className={s.front}>Front</div>
      <div className={s.back}>Back</div>
    </div>
  );
}

export default Card;
