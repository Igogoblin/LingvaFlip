import Button from "../button/Button";
import s from "./footer.module.css";
function Footer() {
  return (
    <footer className={s.footer}>
      <div className="wrapper">
        <Button className={s.button}></Button>
      </div>
    </footer>
  );
}
export default Footer;
