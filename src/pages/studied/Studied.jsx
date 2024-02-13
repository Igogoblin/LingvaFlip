import { useSelector } from "react-redux";
const Studied = () => {
  const studied = useSelector((state) => state.cards.words);
  console.log(studied);
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
    </div>
  );
};

export default Studied;
