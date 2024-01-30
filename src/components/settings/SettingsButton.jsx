import { Link } from "react-router-dom";
import s from "./settingsButton.module.css";

function SettingsButton() {
  return (
    <Link to="lingvaflip/settings">
      <button className={s.settings}>Настройка карточки</button>
    </Link>
  );
}

export default SettingsButton;
