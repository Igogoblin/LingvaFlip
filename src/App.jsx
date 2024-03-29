import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import NotFound from "./pages/notpage/NotFound";
import Footer from "./components/footer/Footer";
// import Statistic from "./pages/stat/Statistic";
import Studied from "./pages/studied/Studied";
import SettingCards from "./pages/setting/SettingCards";
import SettingsButton from "./components/settings/SettingsButton";
import Statistic from "./pages/stat/Statistic";
import Cards from "./pages/cards/Cards";

function App() {
  return (
    <main>
      <header>
        <div className="wrapper">
          <div className="logo"></div>
          <Header></Header>
          <SettingsButton></SettingsButton>
        </div>

        {/* <img src="./assets/logoLingvo.svg" alt="logo" className="logo" /> */}
      </header>
      <div>
        <Routes>
          <Route path="/lingvaflip/" element={<Cards />} />
          <Route path="/lingvaflip/lern" element={<Studied></Studied>}></Route>
          <Route
            path="/lingvaflip/stat"
            element={<Statistic></Statistic>}
          ></Route>
          <Route
            path="/lingvaflip/settings"
            // exact={true.toString()}
            element={<SettingCards></SettingCards>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </main>
  );
}

export default App;
