import { Link } from "react-router-dom";
import s from "./header.module.css";
// import { useSelector } from "react-redux";
// import { useState } from "react";

function Header() {
  // const all = useSelector((state) => state.cards.words);
  // const statistic = [[]];

  // console.log(all);

  // function orderStat() {
  //   let count = all[0].subject;

  //   console.log("count", count);

  //   for (let i = 0; i < all.length; i++) {
  //     if (
  //       statistic[i][0] !=
  //       // .statistic.length - 1
  //       count
  //     ) {
  //       statistic.push([all[i].subject]);
  //     }
  //     // if(all[i]<)
  //   }
  // }
  // orderStat();
  // console.log(statistic);
  return (
    <nav className={s.navigator}>
      <ul>
        <li>
          <Link to="lingvaflip/">Карточки</Link>
        </li>
        <li>
          <Link to="lingvaflip/lern">Изучено</Link>
        </li>
        <li>
          <Link
            to="lingvaflip/stat"
            // onClick={orderStat}
          >
            Статистика
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
