// import { useState } from "react";
import { useSelector } from "react-redux";
// import ThemaStudied from "./ThemaStudied";

const Studied = () => {
  const studied = useSelector((state) => state.cards.words);

  console.log(studied);

  let count = [];

  studied.forEach((element) => {
    if (element.subject != count[count.length - 1]) count.push(element.subject);
  });
  console.log(count);

  return (
    <div>
      <h3>this is Studied page</h3>
      {/* {studied.array.forEach((element) => {
        if (element.study === false) {
          <p>element.word</p>;
        }
      })} */}
      {/* {studied.map((el) => {
        <p key={el.id}>{el.study === false ? "asfd" : ""}</p>;
        console.log(el.stydy === false);
        // if (el.study === false) {
        //   {
        //     console.log("zashell!!!!!!!!");
        //   }
        //   <p>asdf</p>;
        //   // <p>{el.word}</p>
        // }
      })} */}
      <>
        c
        {count.map((el) => {
          <p>{el}</p>;
        })}
      </>

      <p>dsa</p>
    </div>
  );
};

export default Studied;
