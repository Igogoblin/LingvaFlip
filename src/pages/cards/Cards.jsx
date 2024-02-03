import Card from "../../components/card/Card";
import s from "./cards.module.css";
import { useSelector } from "react-redux";
// import { useState } from "react";

function Cards() {
  const cards = useSelector((state) => state.cards.words);
  console.log(cards);
  // const [count, setCount] = useState(0);
  return (
    <section className={s.cards_area}>
      {/* {cards.map((card)=>(
        <Card key={card.id} {...card}></Card>
      ))} */}
      <Card></Card>
      {/* this is cards area */}
    </section>
  );
}

export default Cards;
