import { useSelector } from "react-redux";
const ThemaStudied = (prop) => {
  let words = useSelector((state) => state.cards.words);
  console.log(words);
  return (
    <ul>
      {words.map((word) =>
        word.subject === prop.thema && word.study === false ? (
          <li key={word.id}>{word.word}</li>
        ) : (
          ""
        )
      )}
    </ul>
  );
};

export default ThemaStudied;
