import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";
import Header from "./components/header/Header";
import TestPage from "./test/TestPage";
import NotFound from "./pages/notpage/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main>
      <header>
        <Header></Header>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route></Route>
        </Routes>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </main>
  );
}

export default App;
