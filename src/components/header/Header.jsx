import { Link } from "react-router-dom";
import s from "./header.module.css";

function Header() {
  return (
    <nav className={s.navigator}>
      <ul>
        <li>
          <Link to="/one">page one</Link>
        </li>
        <li>
          <Link>page two</Link>
        </li>
        <li>
          <Link>page three</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
