import Card from "../../components/card/Card";
import s from "./cards.module.css";

function Cards() {
  return (
    <section className={s.cards_area}>
      <Card></Card>
    </section>
  );
}

export default Cards;
