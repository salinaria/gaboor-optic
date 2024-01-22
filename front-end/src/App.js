import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
