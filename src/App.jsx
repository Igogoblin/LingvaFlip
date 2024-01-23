import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageOne from "./pages/PageOne";
import TestPage from "./test/TestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/one" element={<TestPage />}></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  );
}

export default App;
