import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";
import UserPage from "./components/Userpage/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<SearchPage />} />
        <Route path="/Login" element = {<Login/>}/>
        <Route path="/Signin" element = {<Signin/>}/>
        <Route path="/UserPage" element ={<UserPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
