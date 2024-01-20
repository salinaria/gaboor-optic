import classes from "../Navbar/Navbar.module.css";
import user from "../../assets/user.svg";
import basket from "../../assets/basket.svg";
import brands from "../../assets/brands.svg";
import search from "../../assets/search.svg";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <img src={basket} className={classes.basket} alt="icon" />
        <div className={classes.hr} />
        <img src={user} className={classes.user} alt="icon" />
      </div>
      <div className={classes.dropdown}>
        <div className={classes.brbutton}>
          <p className={classes.brand_text}>برند‌ها</p>
          <img src={brands} className={classes.brands} alt="icon" />
        </div>
        <div className={classes.brline} />
        <div className={classes.dropdown_content}>
          <div className={classes.first_col}>
            <a href="#" className={classes.col}>
              Ray Ban
            </a>
            <a href="#" className={classes.col}>
              Correra
            </a>
            <a href="#" className={classes.col}>
              Oakley
            </a>
          </div>
          <div className={classes.sec_col}>
            <a href="#" className={classes.col}>
              Persol
            </a>
            <a href="#" className={classes.col}>
              Polaried
            </a>
            <a href="#" className={classes.col}>
              AliExpress
            </a>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.homepage}>GaboorOptic</h1>
        <img src={search} className={classes.search} alt="icon" />
      </div>
    </div>
  );
};

export default Navbar;
