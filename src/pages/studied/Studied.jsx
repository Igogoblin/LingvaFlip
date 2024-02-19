import { useState } from "react";
import { useSelector } from "react-redux";
const Studied = () => {
  const studied = useSelector((state) => state.cards.words);
  const [thema /*setThema*/] = useState(studied[0].subject);

  console.log(studied);
  console.log(thema);
  // const wordsThema = () => {
  //   studied.map((el) => {
  //     if (el.subject === thema && el.study === false) {
  //       console.log("zashel !!!");
  //       return el;
  //     }
  //   });
  // };
  // console.log(wordsThema());
  return (
    <div>
      <h3>this is Studied page</h3>
      <ul>
        {/* {studied.map((word) => {
          if (word.study) {
            <li>{word}</li>;
          }
        })} */}
        {/* <li>map</li> */}
      </ul>
      {/* {studied.map((words)=>{
        <ul>
          
        </ul>
      })} */}
      {/* {studied.forEach((element) => {
        console.log(element);
        if (element.subject == thema) {
          <ul></ul>
        }
      })} */}
      {/* {studied.map((element) => {
        if (element.subject === thema) {
          ("");
        } else {
          <ul>
            {thema}
            {studied.map((el) => {
              if (el.subject === thema && el.studied === false) {
                <li>{el.word}</li>;
              }
            })}
          </ul>;
          {
            setThema(element.subject);
          }
        }
      })} */}
    </div>
  );
};

export default Studied;
