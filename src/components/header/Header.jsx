import { Link } from "react-router-dom";
import s from "./header.module.css";

function Header() {
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
          <Link to="lingvaflip/stat">Статистика</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
