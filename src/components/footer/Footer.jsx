// import { showJ } from "../../store/cardSlice";
import Button from "../button/Button";
import s from "./footer.module.css";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Footer() {
  // const dispatch = useDispatch();
  const sh = useSelector((state) => state.cards);

  const show = () => {
    // dispatch(showJ());
    console.log(sh);
  };
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        {/* <div className="footer">

        </div> */}
        <Button className={s.button} onClick={show}></Button>
      </div>
    </footer>
  );
}
export default Footer;
