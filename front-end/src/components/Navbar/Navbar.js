import classes from "../Navbar/Navbar.module.css";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../assets/user.svg";
import basket from "../../assets/basket.svg";
import brands from "../../assets/brands.svg";
import search from "../../assets/search.svg";

const Navbar = () => {
  const inputSearch = useRef("");
  const history = useNavigate();
  function goSearch() {
    history("/search/" + inputSearch.current.value);
  }
  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <a href="/basket" className={classes.use}>
          <img src={basket} className={classes.basket} alt="icon" />
        </a>
        <div className={classes.hr} />
        <a href={currentUser()?"/UserPage":"/Login"} className={classes.bas}>
          <img src={user} className={classes.user} alt="icon" />
        </a>
      </div>
      <div className={classes.dropdown}>
        <div className={classes.brbutton}>
          <p className={classes.brand_text}>برند‌ها</p>
          <img src={brands} className={classes.brands} alt="icon" />
        </div>
        <div className={classes.brline} />
        <div className={classes.dropdown_content}>
          <div className={classes.first_col}>
            <a href="/search/Ray%20Ban" className={classes.col}>
              Ray Ban
            </a>
            <a href="/search/Carrera" className={classes.col}>
              Carrera
            </a>
            <a href="/search/Oakley" className={classes.col}>
              Oakley
            </a>
          </div>
          <div className={classes.sec_col}>
            <a href="/search/Persol" className={classes.col}>
              Persol
            </a>
            <a href="/search/Polaroid" className={classes.col}>
              Polariod
            </a>
            <a href="/search/AliExpress" className={classes.col}>
              AliExpress
            </a>
          </div>
        </div>
      </div>
      <div className={classes.search_container}>
        <form>
          <input
            ref={inputSearch}
            type="text"
            placeholder="جستجو..."
            name="search"
            className={classes.searchbox}
          />
          <button
            type="submit"
            onClick={goSearch}
            className={classes.searchbutt}
          >
            <img src={search} className={classes.search} alt="icon" />
          </button>
        </form>
      </div>
      <a href="/">
        <h1 className={classes.homepage}>GaboorOptic</h1>
      </a>
    </div>
  );
};

export default Navbar;
