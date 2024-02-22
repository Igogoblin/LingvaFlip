import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import s from "./header.module.css";

function Header() {
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("");

  const handleNavLinkClick = (path) => {
    setCurrentPath(path);
    navigate(path);
  };

  return (
    <nav className={s.navigator}>
      <ul>
        <li>
          <Link
            exact
            to="/lingvaflip/"
            className={currentPath === "/" ? s.link_active : ""}
            onClick={() => handleNavLinkClick("/")}
          >
            Карточки
          </Link>
        </li>
        <li>
          <Link to="/lingvaflip/lern" className={s.link_active}>
            Изучено
          </Link>
        </li>
        <li>
          <Link to="/lingvaflip/stat" className={s.link_active}>
            Статистика
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
