import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";
import Header from "./components/header/Header";
import TestPage from "./test/TestPage";
import NotFound from "./pages/notpage/NotFound";
import Footer from "./components/footer/Footer";
// import Statistic from "./pages/stat/Statistic";
import Studied from "./pages/studied/Studied";

function App() {
  return (
    <main>
      <header>
        <div className="logo"></div>
        <Header></Header>

        {/* <img src="./assets/logoLingvo.svg" alt="logo" className="logo" /> */}
      </header>
      <div>
        <Routes>
          <Route path="lingvaflip/" element={<PageOne />} />
          <Route path="lingvaflip/lern" element={<TestPage />}></Route>
          <Route path="lingvaflip/stat" element={<Studied></Studied>}></Route>
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
