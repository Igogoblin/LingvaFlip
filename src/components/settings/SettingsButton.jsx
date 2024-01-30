import { Link } from "react-router-dom";

function SettingsButton() {
  return (
    <Link to="lingvaflip/settings">
      <button>Настройка карточки</button>
    </Link>
  );
}

export default SettingsButton;
