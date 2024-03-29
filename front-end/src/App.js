import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UserPage from "./components/Userpage/UserPage";
import Basket from "./components/Basket/Basket";
import GlassPage from "./components/GlassPage/GlassPage";
import Tryon from "./components/Tryon/Tryon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<SearchPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/glass/:id" element={<GlassPage />} />
        <Route path="/tryon/:id" element={<Tryon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
